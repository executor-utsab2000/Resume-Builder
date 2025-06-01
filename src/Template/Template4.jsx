import '../CSS_SCSS/template4.scss'
import UserContext from '../Context/UserContext';
import { useContext, useRef } from 'react';
import { handleDownloadPdf } from '../JS/handleDownloadPdf';


const Template4 = () => {

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
                                <input type="text" className="form-control" ref={resumeName} value={'Resume'} />
                                <button className="btn btn-success" onClick={() => handleDownloadPdf(printContent, resumeName.current.value)}> <i className="fa-solid fa-file-pdf me-2"></i>Save As PDF</button>
                                <div className="text-danger">(Don't use '.pdf' provide only name)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container py-4 template4" ref={printContent}>
                <div className="text-start">
                    <h2 className="fw-bold">{userData.fName + " " + userData.lName}</h2>
                    <h6 className="text-danger">{userData.designation}</h6>
                    <p>{userData.profileSummary}</p>
                </div>

                <div className="row text-start contact-icons mb-3">
                    <div className="col-md-4 contact-item"><i className="bi bi-envelope-fill"></i> {userData.email}</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-telephone-fill"></i> {userData.contact}</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-geo-alt-fill"></i> {userData.address}</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-link-45deg"></i> {userData.portfolio}</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-linkedin"></i> {userData.linkedin}</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-medium"></i> {userData.github}</div>
                </div>

                <div className="section-title">Areas of Expertise</div>
                <div className="skills">
                    {
                        userData.technicalSkills?.map(elm => <span>{elm}</span>)
                    }
                </div>

                <div className="section-title">Soft SKills</div>
                <div className="skills">
                    {
                        userData.softSkills?.map(elm => <span>{elm}</span>)
                    }
                </div>

                <div className="section-title">Work Experience</div>
                <div className="sub-section mb-3">
                    {
                        userData.workExperience.map((elm) => {
                            return (
                                <>
                                    <div className="job-title">{elm.designation}</div>
                                    <div className="job-company">{elm.companyName}</div>
                                    <div className="job-dates">{`${elm.startDate} - ${elm.endDate}`}</div>
                                    <ul>
                                        {
                                            elm.responsibilities.split(',')?.map(elm => <li>{elm}</li>)
                                        }
                                    </ul>
                                </>
                            )
                        })
                    }
                </div>

                <div className="section-title">Projects</div>
                <div className="sub-section mb-3">
                    {
                        userData.project.map((elm) => {
                            return (
                                <>
                                    <div className="job-title">{elm.title}</div>
                                    <div className="skills">
                                        {
                                            elm.techStacks.split(',')?.map(elm => <span>{elm}</span>)
                                        }
                                    </div>
                                    <div className="job-dates">{`${elm.startDate} - ${elm.endDate}`}</div>
                                    <ul>
                                        {
                                            elm.learnings.split(',')?.map(elm => <li>{elm}</li>)
                                        }
                                    </ul>
                                </>
                            )
                        })
                    }
                </div>

                <div className="section-title">Education</div>
                {
                    userData.qualification.map((elm) => {
                        return (
                            <>
                                <div className="sub-section mb-2">
                                    <strong>{elm.degree}</strong><br />
                                    {elm.institute}<br />
                                    <small className="text-danger">{elm.year}</small>
                                </div>
                            </>
                        )
                    })
                }

                <div className="section-title">Certificates</div>
                {
                    userData.certificate.map((elm) => {
                        return (
                            <>
                                <div className="sub-section mb-2">
                                    <strong>{elm.title}</strong><br />
                                    {elm.issuedBy}<br />
                                    <small className="text-danger">{`${elm.startDate} - ${elm.endDate}`}</small>
                                </div>
                            </>
                        )
                    })
                }


                <div className="section-title">Hobbies</div>
                <div className="skills">
                    {
                        userData.hobbies?.map(elm => <span>{elm}</span>)
                    }
                </div>

                <div className="section-title">Languages</div>
                <div className="skills">
                    {
                        userData.languages?.map(elm => <span>{elm}</span>)
                    }
                </div>









            </div>
        </>
    )
}

export default Template4