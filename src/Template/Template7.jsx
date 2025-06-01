import '../CSS_SCSS/template7.scss'
import UserContext from '../Context/UserContext';
import { useContext, useRef } from 'react';
import { handleDownloadPdf } from '../JS/handleDownloadPdf';


const Template7 = () => {
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


            

            <div className='container resume template7' ref={printContent}>
                <div>
                    <header>
                        <h1>{userData.fName + " " + userData.lName}</h1>
                        <p>{userData.address} • {userData.contact} • {userData.email} • {userData.linkedin}</p>
                        <h6 className='my-5'>{userData.profileSummary}</h6>
                    </header>

                    <section className="section">
                        <h2>PROFESSIONAL EXPERIENCE</h2>

                        {
                            userData.workExperience.map((elm) => {
                                return (
                                    <div className="job">
                                        <div className="job-header">
                                            <h3 className='text-capitalize'>{elm.companyName}</h3>
                                            <span className="date">{`${elm.startDate} - ${elm.endDate}`}</span>
                                        </div>
                                        <p><strong>{elm.designation}</strong></p>
                                        <ul>
                                            {
                                                elm.responsibilities.split(',')?.map(elm => <li>{elm}</li>)
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }

                    </section>

                    <section className="section">
                        <h2>PROJECTS</h2>

                        {
                            userData.project.map((elm) => {
                                return (
                                    <div className="job">
                                        <div className="job-header">
                                            <h3 className='text-capitalize'>{elm.title}</h3>
                                            <span className="date">{`${elm.startDate} - ${elm.endDate}`}</span>
                                        </div>
                                        <div className="d-flex ">
                                            <ul className='pe-5'>
                                                {
                                                    elm.learnings.split(',')?.map(elm => <li>{elm}</li>)
                                                }
                                            </ul>
                                            <ul className='ps-5'>
                                                {
                                                    elm.techStacks.split(',')?.map(elm => <li>{elm}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </section>

                    <section className="section">
                        <h2>EDUCATION</h2>
                        {
                            userData.qualification.map((elm) => {
                                return (
                                    <>
                                        <div className="job-header">
                                            <h3>{elm.institute}</h3>
                                            <span className="date">{elm.year}</span>
                                        </div>
                                        <p>{elm.degree}</p>
                                    </>
                                )
                            })
                        }
                    </section>

                    <section className="section">
                        <h2>CERTIFICATES</h2>
                        {
                            userData.certificate.map((elm) => {
                                return (
                                    <>
                                        <div className="job-header">
                                            <h3>{elm.title}</h3>
                                            <span className="date">{`${elm.startDate} - ${elm.endDate}`}</span>
                                        </div>
                                        <p className='text-muted'>({elm.issuedBy})</p>
                                    </>
                                )
                            })
                        }
                    </section>

                    <section className="section">
                        <h2>SKILLS</h2>
                        <ul className="skills">
                            {
                                userData.technicalSkills?.map(elm => <li>{elm}</li>)
                            }
                        </ul>
                    </section>

                    <section className="section">
                        <h2>SOFT SKILLS</h2>
                        <ul className="skills">
                            {
                                userData.softSkills?.map(elm => <li>{elm}</li>)
                            }
                        </ul>
                    </section>

                    <section className="section">
                        <h2>HOBBIES</h2>
                        <ul className="skills">
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

export default Template7