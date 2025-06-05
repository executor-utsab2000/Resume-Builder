import '../CSS_SCSS/template9.scss'
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
                                <input type="text" className="form-control" ref={resumeName} />
                                <button className="btn btn-success" onClick={() => handleDownloadPdf(printContent, resumeName.current.value)}> <i className="fa-solid fa-file-pdf me-2"></i>Save As PDF</button>
                                <div className="text-danger">(Don't use '.pdf' provide only name)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container template template9" ref={printContent}>
                <div className="topLayer d-flex">
                    <div className="leftDiv">
                        {userData.fName + " " + userData.lName}
                        <div className="designation"> {
                            userData.designation.trim().length !== 0 && <div className="designation">{userData.designation}</div>
                        }</div>
                    </div>
                    <div className="rightDiv">{userData.profileSummary}</div>
                </div>

                <div className="bottomLayer d-flex">
                    <div className="leftDiv">
                        <div className="contentContainer">
                            <div className="address d-flex">
                                <i className="fa-solid fa-location-dot my-auto"></i>
                                <div>
                                    {userData.address}
                                </div>
                            </div>

                            <div className="contactLinks mb-5">
                                <p><i className="fa-solid fa-at"></i> {userData.email}</p>
                                <p><i className="fa-solid fa-phone"></i> {userData.contact}</p>
                                {userData.linkedin.trim().length !== 0 && <p><i className="fa-brands fa-linkedin"></i> {userData.linkedin}</p>}
                                {userData.github.trim().length !== 0 && <p><i className="fa-brands fa-square-github"></i> {userData.github}</p>}
                                {userData.portfolio.trim().length !== 0 && <p><i className="fa-solid fa-link"></i> {userData.portfolio}</p>}
                            </div>

                            {
                                userData.hasOwnProperty('technicalSkills') &&
                                <section>
                                    <div className="header">Technical Skills</div>
                                    {
                                        userData.technicalSkills?.map(elm => <span className="badge m-1 px-3 py-2 text-bg-secondary">{elm}</span>)
                                    }
                                </section>
                            }

                            <section>
                                <div className="header">Soft Skills</div>
                                {
                                    userData.softSkills?.map(elm => <span className="badge m-1 px-3 py-2 text-bg-secondary">{elm}</span>)
                                }
                            </section>

                            <section>
                                <div className="header">Languages</div>
                                {
                                    userData.languages?.map(elm => <span className="badge m-1 px-3 py-2 text-bg-secondary">{elm}</span>)
                                }
                            </section>

                            <section>
                                <div className="header">Hobbies</div>
                                {
                                    userData.hobbies?.map(elm => <span className="badge m-1 px-3 py-2 text-bg-secondary">{elm}</span>)
                                }
                            </section>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="contentContainer">

                            <section className='mt-0'>
                                <div className="header">Academic qualifications</div>
                                {
                                    userData.qualification.map((elm) => {
                                        return (
                                            <div className="qualification">
                                                <div>
                                                    <div className="degree">{elm.degree}</div>
                                                    <div className="institute">{elm.institute}</div>
                                                    <div className="headInstitute">{elm.headInstitute}</div>
                                                </div>
                                                <div className="text-end">
                                                    <div className="passYear">{elm.year}</div>
                                                    <div className="marks">{elm.marks}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </section>

                            {
                                userData.hasOwnProperty('workExperience') &&
                                <section>
                                    <div className="header">Work experience</div>
                                    {
                                        userData.workExperience.map((elm) => {
                                            return (
                                                <div className="experience">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <div className="jobRole">{elm.designation}</div>
                                                            <div className="coName text-capitalize">{elm.companyName}</div>
                                                        </div>
                                                        <div className="duration">{`${elm.startDate} - ${elm.endDate}`}</div>
                                                    </div>
                                                    <div className="responsibilities">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="pe-2">
                                                                <ul>
                                                                    {
                                                                        elm.projectList.split('//')?.map(elm => <li>{elm}</li>)
                                                                    }
                                                                </ul>
                                                            </div>
                                                            <div className="ps-2">
                                                                <ul>
                                                                    {
                                                                        elm.responsibilities.split('//')?.map(elm => <li>{elm}</li>)
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </section>}

                            {
                                userData.hasOwnProperty('project') &&
                                <section>
                                    <div className="header">Personal projects</div>
                                    {
                                        userData.project.map((elm) => {
                                            return (
                                                <div className="project">
                                                    <div className="title">{elm.title}</div>
                                                    <div className="liveLink">{elm.liveLink}</div>
                                                    <div className="duration">{`${elm.startDate} - ${elm.endDate}`}</div>
                                                    <div className="techStacks">
                                                        {
                                                            elm.techStacks.split('//')?.map(elm => <span className="badge m-1 px-3 py-2 text-bg-secondary">{elm}</span>)
                                                        }
                                                    </div>
                                                    <div className="learnings">
                                                        <ul>
                                                            {
                                                                elm.learnings.split('//')?.map(elm => <li>{elm}</li>)
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </section>}

                            {
                                userData.hasOwnProperty('certificate') &&
                                <section>
                                    <div className="header">Certificates</div>
                                    {
                                        userData.certificate.map((elm) => {
                                            return (
                                                <div className="certificates d-flex justify-content-between">
                                                    <div>
                                                        <div className="certificateTitle">{elm.title}</div>
                                                        <div className="certificateIssuedBy">{elm.issuedBy}.</div>
                                                    </div>
                                                    <div className="certificateDuration">{`${elm.startDate} - ${elm.endDate}`}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </section>}


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Template8