import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const handleDownloadPdf = async (contentToPrint) => {
  const element = contentToPrint.current;

  // Render the HTML content to a canvas
  const canvas = await html2canvas(element, { scale: 2 }); // better quality
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pdfWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  // First page
  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pdfHeight;

  // Add additional pages if needed
  while (heightLeft > 0) {
    position -= pdfHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;
  }

  pdf.save("Example.pdf");
};
