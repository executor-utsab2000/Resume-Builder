import '../CSS_SCSS/template3.scss'
import UserContext from '../Context/UserContext';
import { useContext, useRef } from 'react';
import { handleDownloadPdf } from '../JS/handleDownloadPdf';
const Template3 = () => {
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




            <div className="container py-5 template3 d-flex" ref={printContent}>
                <div className="leftPanel">
                    <h2>{userData.fName + " " + userData.lName}</h2>
                    <p className="text-danger fw-semibold">{userData.designation}</p>
                    <p className="text-muted mb-5">{userData.profileSummary}</p>

                    <div className="icon-text"><i className="bi bi-envelope"></i> {userData.email}</div>
                    <div className="icon-text"><i className="bi bi-telephone"></i> {userData.contact}</div>
                    <div className="icon-text"><i className="bi bi-geo-alt"></i> {userData.address}</div>
                    {userData.portfolio.trim().length !== 0 && <div className="icon-text"><i className="bi bi-globe"></i> {userData.portfolio}</div>}
                    {userData.linkedin.trim().length !== 0 && <div className="icon-text"><i className="bi bi-linkedin"></i> {userData.linkedin}</div>}
                    {userData.github.trim().length !== 0 && <div className="icon-text"><i className="bi bi-medium"></i> {userData.github}</div>}
                </div>
                <div className="rightPanel">
                    <div className="innerContainer">

                        {
                            userData.hasOwnProperty('technicalSkills') &&
                            <section>
                                <div className="section-title"><i className="bi bi-patch-check"></i> AREAS OF EXPERTISE</div>
                                <div>
                                    {
                                        userData.technicalSkills?.map(elm => <span className="badge-skill">{elm}</span>)
                                    }
                                </div>
                            </section>
                        }

                        <section>
                            <div className="section-title"><i className="bi bi-patch-check"></i> SOFT SKILLS</div>
                            <div>
                                {
                                    userData.softSkills?.map(elm => <span className="badge-skill">{elm}</span>)
                                }
                            </div>
                        </section>

                        {userData.hasOwnProperty('workExperience') &&
                            <section>
                                <div className="section-title"><i className="bi bi-briefcase"></i> WORK EXPERIENCE</div>
                                {
                                    userData.workExperience.map((elm) => {
                                        return (
                                            <div className="work-item">
                                                <h5>{elm.designation}, <span className='text-capitalize' >{elm.companyName}</span></h5>
                                                <small className="text-muted">{`${elm.startDate} - ${elm.endDate}`}</small>
                                                <ul>
                                                    {
                                                        elm.responsibilities.split(',')?.map(elm => <li>{elm}</li>)
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </section>}

                        {userData.hasOwnProperty('project') &&
                            <section>
                                <div className="section-title"><i className="bi bi-briefcase"></i> PROJECTS</div>
                                {
                                    userData.project.map((elm) => {
                                        return (
                                            <div className="work-item">
                                                <h5>{elm.title} -
                                                    <small className="text-muted">(
                                                        {
                                                            elm.techStacks.split(',')?.map(elm => `${elm} , `)
                                                        }
                                                        )</small>
                                                </h5>
                                                <small className="text-muted">{`${elm.startDate} - ${elm.endDate}`}</small>
                                                <ul>
                                                    {
                                                        elm.learnings.split(',')?.map(elm => <li>{elm}</li>)
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </section>}

                        <section>
                            <div className="section-title"><i className="bi bi-mortarboard"></i> EDUCATION</div>
                            {
                                userData.qualification.map((elm) => {
                                    return (
                                        <div className="education-item">
                                            <strong>{elm.degree}</strong><br />
                                            {elm.institute} <span className="text-muted">{elm.year}</span>
                                        </div>
                                    )
                                })
                            }
                        </section>

                        {userData.hasOwnProperty('certificate') &&
                            <section>
                                <div className="section-title"><i className="bi bi-mortarboard"></i> CERTIFICATES</div>
                                {
                                    userData.certificate.map((elm) => {
                                        return (
                                            <div className="education-item">
                                                <strong>{elm.title}</strong><br />
                                                {elm.issuedBy} <span className="text-muted ps-3">{`${elm.startDate} - ${elm.endDate}`}</span>
                                            </div>
                                        )
                                    })
                                }
                            </section>}

                        <section>
                            <div className="section-title"><i className="bi bi-patch-check"></i> INTERESTS</div>
                            {
                                userData.hobbies?.map(elm => <span className="badge-skill">{elm}</span>)
                            }

                        </section>

                        <section>
                            <div className="section-title"><i className="bi bi-patch-check"></i> LANGUAGES</div>
                            {
                                userData.languages?.map(elm => <span className="badge-skill">{elm}</span>)
                            }

                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Template3