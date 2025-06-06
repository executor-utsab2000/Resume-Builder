import '../CSS_SCSS/template5.scss'
import React from 'react'
import UserContext from '../Context/UserContext';
import { useContext, useRef } from 'react';
import { handleDownloadPdf } from '../JS/handleDownloadPdf';

const Template5 = () => {

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

            <div className='container template5' ref={printContent}>
                <div className="text-start">
                    <div className="name">{userData.fName + " " + userData.lName}</div>
                    <div className="title">{userData.designation}</div>
                    <p>{userData.profileSummary}</p>
                </div>


                <div className="section-title">CONTACT</div>
                <div className="mb-3">
                    <div className="info-item"><span>Email:</span> {userData.email}</div>
                    <div className="info-item"><span>Phone:</span> {userData.contact}</div>
                    <div className="info-item"><span>Location:</span> {userData.address}</div>
                    <div className="info-item"><span>Website:</span> {userData.portfolio}</div>
                    <div className="info-item"><span>LinkedIn:</span> {userData.linkedin}</div>
                    <div className="info-item"><span>Medium:</span>{userData.github}</div>
                </div>

                <div className="section-title">AREAS OF EXPERTISE</div>
                <ul>
                    {
                        userData.technicalSkills?.map(elm => <li>{elm}</li>)
                    }
                </ul>


                <div className="section-title">WORK EXPERIENCE</div>
                {
                    userData.workExperience.map((elm) => {
                        return (
                            <>
                                <p><strong>{elm.designation}</strong> - <span className='text-capitalize'>{elm.companyName}</span> <span className="text-muted">{`${elm.startDate} - ${elm.endDate}`}</span></p>
                                <ul>
                                    {
                                        elm.responsibilities.split('//')?.map(elm => <li>{elm}</li>)
                                    }
                                </ul>
                            </>
                        )
                    })
                }

                <div className="section-title">PROJECTS</div>
                {
                    userData.project.map((elm) => {
                        return (
                            <>
                                <p><strong>{elm.title}</strong> - <span className="text-muted">{`${elm.startDate} - ${elm.endDate}`}</span></p>
                                <div className="d-flex projectBottom">
                                    <div className="leftPanel">
                                        <ul className='pe-5'>
                                            {
                                                elm.learnings.split('//')?.map(elm => <li>{elm}</li>)
                                            }
                                        </ul>
                                    </div>
                                    <div className="rightPanel">
                                        <ul className='ps-5'>
                                            {
                                                elm.techStacks.split('//')?.map(elm => <li>{elm}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }




                <div className="section-title">EDUCATION</div>
                {
                    userData.qualification.map((elm) => {
                        return (
                            <> <p><strong>{elm.degree}</strong><br />
                                {elm.institute}, {elm.year}</p>
                            </>
                        )
                    })
                }

                <div className="section-title">CERTIFICATIONS</div>
                {
                    userData.certificate.map((elm) => {
                        return (
                            <div className="certification-item">{elm.title} – {elm.issuedBy}</div>
                        )
                    })
                }

                <div className="section-title">LANGUAGES</div>
                <ul>
                    {
                        userData.languages.map((elm) => {
                            return (
                                <li>{elm}</li>
                            )
                        })
                    }
                </ul>

                <div className="section-title">INTERESTS</div>
                <ul>
                    {
                        userData.hobbies.map((elm) => {
                            return (
                                <li>{elm}</li>
                            )
                        })
                    }
                </ul>















            </div>




        </>
    )
}

export default Template5