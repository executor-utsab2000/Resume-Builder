import SmallItems from '../Components/SmallItems';
import '../CSS_SCSS/template1.scss'
import UserContext from '../Context/UserContext';
import { useContext, useRef } from 'react';
import { handleDownloadPdf } from '../JS/handleDownloadPdf';


const Template1 = () => {

    const { userData } = useContext(UserContext)
    const printContent = useRef(null)

    // console.log(userData);

    return (
        <>
            <div className="printBtnDiv">
                <button className="btn btn-primary" onClick={() => handleDownloadPdf(printContent)}> <i className="fa-solid fa-file-pdf me-2"></i>Save As PDF</button>
            </div>

            <div className="container template1" ref={printContent}>
                <div className="topSection d-flex jus">
                    <div className="leftPanel">
                        <div className="nameHeader">{userData.fName + " " + userData.lName}</div>
                        {
                            userData.designation.trim().length !== 0 && <div className="designation">{userData.designation}</div>
                        }

                        <div className="profileSummary mt-2">{userData.profileSummary}</div>
                    </div>
                    <div className="rightPanel d-flex justify-content-end my-auto">
                        <div className="content">
                            <p>{userData.email} <i className="fa-solid fa-envelope"></i></p>
                            <p>{userData.contact} <i className="fa-solid fa-phone-flip"></i></p>
                            <p>{userData.address} <i className="fa-solid fa-location-dot"></i></p>
                            <p>{userData.github} <i className="fa-brands fa-github"></i></p>
                            <p>{userData.linkedin} <i className="fa-brands fa-linkedin"></i></p>
                            <p>{userData.portfolio} <i className="fa-solid fa-globe"></i></p>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="sectionHeader">Skills</div>
                    <div className="skills d-flex">
                        {
                            userData.hasOwnProperty('technicalSkills') &&
                            <div className="leftPanel">
                                <div className="skillSmallHeader">Technical Skills</div>
                                <div className="d-flex flex-wrap">
                                    {
                                        userData.technicalSkills?.map(elm => <SmallItems title={elm} />)
                                    }
                                </div>

                            </div>
                        }
                        <div className="rightPanel">
                            <div className="skillSmallHeader">Soft Skills</div>
                            <div className="d-flex flex-wrap">
                                {
                                    userData.softSkills?.map(elm => <SmallItems title={elm} />)
                                }
                            </div>
                        </div>
                    </div>
                </section>

                {
                    userData.hasOwnProperty('workExperience') &&
                    <section>
                        <div className="sectionHeader">Work Experience</div>
                        <div className="experienceContainer">
                            {
                                userData.workExperience?.map((elm) => {
                                    return (
                                        <>
                                            <div className="experience d-flex">
                                                <div className="leftPanel">
                                                    <div className="companyName">{elm.designation}</div>
                                                    <div className="designation">{elm.companyName}</div>
                                                    <div className="duration">{`${elm.startDate} - ${elm.endDate}`}</div>

                                                    <div className="projectWorked">
                                                        <div className="header">Projects :</div>
                                                        <ul>
                                                            {
                                                                elm.projectList.split(',')?.map(elm => <li>{elm}</li>)
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="rightPanel">
                                                    <div className="responsibilities">
                                                        <div className="header">Responsibilities :</div>
                                                        <ul>
                                                            {
                                                                elm.responsibilities.split(',')?.map(elm => <li>{elm}</li>)
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </section>
                }

                {
                    userData.hasOwnProperty('project') &&
                    <section>
                        <div className="sectionHeader">Personal Projects</div>
                        <div className="projectContainer">
                            {
                                userData.project?.map((elm) => {
                                    return (
                                        <div className="projectItems itemContainer d-flex">
                                            <div className="leftPanel">
                                                <div className="projectTitle">{elm.title}</div>
                                                <div className="projectDuration">{`${elm.startDate} - ${elm.endDate}`}</div>
                                                <div className="projectTechStacks">
                                                    <div className="header">Projects Tech Stacks:</div>
                                                    <ul>
                                                        {
                                                            elm.techStacks.split(',')?.map(elm => <li>{elm}</li>)
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="rightPanel">
                                                <div className="projectLearnings">
                                                    <ul>
                                                        {
                                                            elm.learnings.split(',')?.map(elm => <li>{elm}</li>)
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                }

                {
                    userData.hasOwnProperty('certificate') &&
                    <section>
                        <div className="sectionHeader">Certificates /  Achivements</div>
                        <div className="certificateContainer">
                            {
                                userData.certificate?.map((elm) => {
                                    return (
                                        <div className="certificate itemContainer">
                                            <div className="row">
                                                <div className="col-10 my-auto">
                                                    <div className="certificateTitle">{elm.title}</div>
                                                    <div className="certificateInstitute">{elm.issuedBy}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                }


                {
                    userData.hasOwnProperty('qualification') &&
                    <section>
                        <div className="sectionHeader">Educational qualification</div>
                        <div className="educationContainer">
                            {
                                userData.qualification?.map((elm) => {
                                    return (
                                        <div className="education itemContainer">
                                            <div className="row">
                                                <div className="col-10 my-auto">
                                                    <div className="qualificationTitle">{elm.degree}</div>
                                                    <div className="qualificationInstitute">{elm.institute}</div>
                                                </div>
                                                <div className="col-2 text-end my-auto">
                                                    <div className="qualificationYear">{elm.year}</div>
                                                    <div className="qualificationMarks">{elm.marks}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                }

                <section>
                    <div className="sectionHeader">Languages</div>
                    <div className="languageContainer d-flex flex-wrap">
                        {
                            userData.languages?.map(elm => <SmallItems title={elm} />)
                        }
                    </div>
                </section>


                <section>
                    <div className="sectionHeader">Hobbies  /  Interests</div>
                    <div className="languageContainer d-flex flex-wrap">
                        {
                            userData.hobbies?.map(elm => <SmallItems title={elm} />)
                        }
                    </div>
                </section>


            </div>
        </>
    )
}

export default Template1