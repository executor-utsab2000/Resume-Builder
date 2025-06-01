import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const handleDownloadPdf = async (
  contentToPrint,
  nameOfPdf = "Resume"
) => {
  const element = contentToPrint.current;

  // Render the HTML content to canvas
  const canvas = await html2canvas(element, { scale: 2 }); // high resolution
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a0",
  });

  const pdfWidth = pdf.internal.pageSize.getWidth(); // 595.28 pt for A4
  const pdfHeight = pdf.internal.pageSize.getHeight(); // 841.89 pt for A4

  // Calculate scaled image dimensions to fit content into a single page
  const canvasAspectRatio = canvas.width / canvas.height;
  const pdfAspectRatio = pdfWidth / pdfHeight;

  let imgWidth = pdfWidth;
  let imgHeight = pdfWidth / canvasAspectRatio;

  if (imgHeight > pdfHeight) {
    imgHeight = pdfHeight;
    imgWidth = pdfHeight * canvasAspectRatio;
  }

  const x = (pdfWidth - imgWidth) / 2; // center horizontally
  const y = (pdfHeight - imgHeight) / 2; // center vertically

  pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
  pdf.save(`${nameOfPdf}.pdf`);
};
