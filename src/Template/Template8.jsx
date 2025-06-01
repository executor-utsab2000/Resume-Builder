import '../CSS_SCSS/template8.scss'
import UserContext from '../Context/UserContext';
import { useContext, useRef } from 'react';
import { handleDownloadPdf } from '../JS/handleDownloadPdf';



const Template8 = () => {
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
                                <input type="text" className="form-control" ref={resumeName} value={'Resume'}/>
                                <button className="btn btn-success" onClick={() => handleDownloadPdf(printContent, resumeName.current.value)}> <i className="fa-solid fa-file-pdf me-2"></i>Save As PDF</button>
                                <div className="text-danger">(Don't use '.pdf' provide only name)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            

            <div className=" container template8" ref={printContent}>
                <div className="resume">
                    <div className="left-column">
                        <h1>{userData.fName + " " + userData.lName}</h1>
                        <h2>{userData.designation}</h2>
                        <p>{userData.profileSummary}</p>

                        <h3>WORK EXPERIENCE</h3>
                        {
                            userData.workExperience.map((elm) => {
                                return (
                                    <div className="job">
                                        <div className="title">
                                            <strong>{elm.designation}</strong>
                                            <span>{`${elm.startDate} - ${elm.endDate}`}</span>
                                        </div>
                                        <div className="company">{elm.companyName}</div>
                                        <ul>
                                            {
                                                elm.responsibilities.split(',')?.map(elm => <li>{elm}</li>)
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                        <br />
                        <h3>PROJECTS</h3>
                        {
                            userData.project.map((elm) => {
                                return (
                                    <div className="job">
                                        <div className="title">
                                            <strong>{elm.title}</strong>
                                            <span>{`${elm.startDate} - ${elm.endDate}`}</span>
                                        </div>
                                        <div className="company">
                                            {
                                                elm.techStacks.split(',')?.map(elm => `${elm} , `)
                                            }
                                        </div>
                                        <ul>
                                            {
                                                elm.learnings.split(',')?.map(elm => <li>{elm}</li>)
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }


                    </div>

                    <div className="right-column">
                        <div className="section">
                            <h3>CONTACT</h3>
                            <ul>
                                <li>{userData.address}</li>
                                <li>{userData.contact}</li>
                                <li>{userData.email}</li>
                                <li>{userData.linkedin}</li>
                                <li>{userData.github}</li>
                            </ul>
                        </div>

                        <div className="section">
                            <h3>SKILLS</h3>
                            <strong>Technical Skills:</strong>
                            <ul>
                                {
                                    userData.technicalSkills?.map(elm => <li>{elm}</li>)
                                }
                            </ul>
                            <strong>Soft SKills:</strong>
                            <ul>
                                {
                                    userData.softSkills?.map(elm => <li>{elm}</li>)
                                }
                            </ul>
                        </div>

                        <div className="section">
                            <h3>CERTIFICATES:</h3>
                            <ul>
                                {
                                    userData.certificate?.map(elm => <li>{elm.title}</li>)
                                }
                            </ul>
                        </div>

                        <div className="section">
                            <h3>EDUCATION</h3>
                            <p><strong>Resume Worded University</strong><br />
                                Bachelor of Arts – Psychology<br />
                                Boston, MA – May 2010<br />
                                Awards: Resume Worded Teaching Fellow, Dean’s List 2012 (Top 10%)</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Template8