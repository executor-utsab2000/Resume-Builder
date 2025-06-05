import '../CSS_SCSS/template6.scss'
import UserContext from '../Context/UserContext';
import { useContext, useRef } from 'react';
import { handleDownloadPdf } from '../JS/handleDownloadPdf';

const Template6 = () => {

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




            <div className="container template6" ref={printContent}>
                <header className="top-section">
                    <div className="left-header">
                        <h1>{userData.fName + " " + userData.lName}</h1>
                        <p className="title">{userData.designation}</p>
                    </div>
                    <div className="right-header">
                        <p>📧 {userData.email}</p>
                        <p>📞 {userData.contact}</p>
                        <p>📍 {userData.address}</p>
                        <p>🌐 {userData.portfolio}</p>
                        <p>🔗 {userData.linkedin}</p>
                    </div>
                </header>

                <section className="summary">
                    <p>{userData.profileSummary}</p>
                </section>

                <div className="content">
                    <div className="left">
                        <h2>Work Experience</h2>
                        {
                            userData.workExperience.map((elm) => {
                                return (
                                    <div className="job">
                                        <h3>{elm.designation}</h3>
                                        <p className="company text-capitalize">{elm.companyName} <span>{`${elm.startDate} - ${elm.endDate}`}</span></p>
                                        <ul>
                                            {
                                                elm.responsibilities.split('//')?.map(elm => <li>{elm}</li>)
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }

                        <h2>Projects</h2>
                        {
                            userData.project.map((elm) => {
                                return (
                                    <div className="jobContainer">
                                        <h3>{elm.title}</h3>
                                        <p> {`${elm.startDate} - ${elm.endDate}`}</p>
                                        <div className="d-flex job">
                                            <div className="jobLeft">
                                                <ul className='pe-5'>
                                                    {
                                                        elm.learnings.split('//')?.map(elm => <li>{elm}</li>)
                                                    }
                                                </ul>
                                            </div>
                                            <div className="jobRight">
                                                <ul className='ps-5'>
                                                    {
                                                        elm.techStacks.split('//')?.map(elm => <li>{elm}</li>)
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                        <h2>Education</h2>
                        {
                            userData.qualification.map((elm) => {
                                return (
                                    <p><strong>{elm.degree}</strong><br />
                                        {elm.institute}<br />
                                        <small>{elm.year}</small>
                                    </p>
                                )
                            })
                        }
                    </div>

                    <section className="right">
                        <h2>Skills</h2>
                        <ul className="skills">
                            {
                                userData.technicalSkills?.map(elm => <li>{elm}</li>)
                            }
                        </ul>

                        <h2>Certificates</h2>
                        <ul className="certificates">
                            {
                                userData.certificate?.map(elm => <li>{elm.title} - {elm.issuedBy}</li>)
                            }
                        </ul>

                        <h2>Soft Skills</h2>
                        <ul className="memberships">
                            {
                                userData.softSkills?.map(elm => <li>{elm}</li>)
                            }
                        </ul>

                        <h2>Languages</h2>
                        <ul className="languages">
                            {
                                userData.languages.map(elm => <li>{elm}</li>)
                            }
                        </ul>

                        <h2>Interests & Hobbies</h2>
                        <ul className="hobbies">
                            {
                                userData.hobbies?.map(elm => <li>{elm}</li>)
                            }
                        </ul>
                    </section>
                </div>
            </div>


        </>
    )
}

export default Template6