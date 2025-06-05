// import SmallItems from '../Components/SmallItems';
import '../CSS_SCSS/template2.scss'
import UserContext from '../Context/UserContext';
import { useContext, useRef } from 'react';
import { handleDownloadPdf } from '../JS/handleDownloadPdf';

const Template2 = () => {
    const { userData } = useContext(UserContext)
    const printContent = useRef(null)
    const resumeName = useRef(null)

    return (
        <>
            <div className="printBtnDiv">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo">
                                <i className="fa-solid fa-file-pdf me-2"></i>Save As PDF
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div class="accordion-body">
                                <label htmlFor="">Enter PDF Name :</label>
                                <input type="text" className="form-control" ref={resumeName} />
                                <button className="btn btn-success" onClick={() => handleDownloadPdf(printContent, resumeName.current.value)}> <i className="fa-solid fa-file-pdf me-2"></i>Save As PDF</button>
                                <div className="text-danger">(Don't use '.pdf' provide only name)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container template2" ref={printContent}>
                <div className="text-center">
                    <h1>{userData.fName + " " + userData.lName}</h1>
                    <h5 className="text-danger">{userData.designation}</h5>
                    <p className="mt-3 pb-4">
                        {userData.profileSummary}
                    </p>
                </div>

                <div className="topItemContainer">
                    <div className="topItems"><i className="bi bi-envelope"></i> {userData.email}</div>
                    <div className="topItems"><i className="bi bi-telephone"></i> {userData.contact}</div>
                    {userData.portfolio.trim().length !== 0 && <div className="topItems"><i className="bi bi-globe"></i> {userData.portfolio}</div>}
                    {userData.linkedin.trim().length !== 0 && <div className="topItems"><i className="bi bi-linkedin"></i> {userData.linkedin}</div>}
                    {userData.address.trim().length !== 0 && <div className="topItems"><i className="bi bi-geo-alt"></i> {userData.address}</div>}
                </div>

                {
                    userData.hasOwnProperty('technicalSkills') &&
                    <>
                        <div className="section-title">Areas of Expertise</div>
                        <div className="mb-3 mt-2">
                            <div className="d-flex flex-wrap ">
                                {
                                    userData.technicalSkills.map(elm => <span className="badge m-1 px-3 py-2 text-bg-secondary">{elm}</span>)
                                }
                            </div>
                        </div>
                    </>
                }

                <div className="section-title">Soft Skills</div>
                <div className="mb-3 mt-2">
                    <div className="d-flex flex-wrap ">
                        {
                            userData.softSkills.map(elm => <span className="badge m-1 px-3 py-2 text-bg-secondary">{elm}</span>)
                        }
                    </div>
                </div>



                {
                    userData.hasOwnProperty('workExperience') &&
                    <>
                        <div className="section-title">Work Experience</div>
                        {
                            userData.workExperience.map((elm) => {
                                return (
                                    <div>
                                        <h5>{elm.designation} - <span className='text-capitalize'>{elm.companyName}</span> <span className="text-muted small">({`${elm.startDate} - Present`})</span></h5>
                                        <ul>
                                            {
                                                elm.responsibilities.split('//').map(elm => <li>{elm}</li>)
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </>
                }

                {
                    userData.hasOwnProperty('project') &&
                    <>
                        <div className="section-title">Personal Projects</div>
                        {
                            userData.project?.map((elm) => {
                                return (
                                    <div>
                                        <h5>{elm.title} -  <span className="text-muted small">({`${elm.startDate} - ${elm.endDate}`})</span></h5>
                                        <div className="d-flex  ">
                                            <ul className='pe-5'>
                                                {
                                                    elm.learnings.split('//')?.map(elm => <li>{elm}</li>)
                                                }
                                            </ul>
                                            <ul className='ps-5'>
                                                {
                                                    elm.techStacks.split('//')?.map(elm => <li>{elm}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                }



                <div className="section-title">Education</div>
                {
                    userData.qualification.map((elm) => {
                        return (
                            <p><strong>{elm.degree}</strong><br />
                                {elm.institute} <span className="text-muted ps-3">{elm.year}</span></p>
                        )
                    })
                }


                {
                    userData.hasOwnProperty('certificate') &&
                    <>
                        <div className="section-title">Certificates</div>
                        {
                            userData.certificate.map((elm) => {
                                return (
                                    <p><strong>{elm.title}</strong><br />
                                        {elm.issuedBy} <span className="text-muted ps-3">{`${elm.startDate} - ${elm.endDate}`}</span></p>
                                )
                            })
                        }
                    </>
                }


                <div className="section-title">Hobbies</div>
                <div className="mb-3 mt-2">
                    <div className="d-flex flex-wrap">
                        {
                            userData.hobbies.map(elm => <span className="badge m-1 px-3 py-2 text-bg-secondary">{elm}</span>)
                        }
                    </div>
                </div>


            </div>


        </>
    )
}

export default Template2