import SmallItems from '../Components/SmallItems';
import '../CSS_SCSS/template1.scss'
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

const Template1 = () => {

    const { userData } = useContext(UserContext)
    console.log(userData);


    return (
        <>
            <div className="container template1">
                <div className="row mt-2">
                    <div className="col-7 pe-3 my-auto">
                        <div className="nameHeader">{userData.fName + " " + userData.lName}</div>
                        <div className="designation">{userData.designation}</div>
                        <div className="profileSummary mt-2">{userData.profileSummary}</div>
                    </div>
                    <div className="col-5 my-auto">
                        <div className="row topRightDetails">
                            <div className="col-11 text-end">{userData.email}</div>
                            <div className="col-1"><i className="fa-solid fa-envelope"></i></div>

                            <div className="col-11 text-end mt-2">{userData.contact}</div>
                            <div className="col-1"><i className="fa-solid fa-phone-flip"></i></div>

                            <div className="col-11 text-end mt-2">{userData.address}</div>
                            <div className="col-1"><i className="fa-solid fa-location-dot"></i></div>

                            <div className="col-11 text-end mt-2">{userData.github}</div>
                            <div className="col-1"><i className="fa-brands fa-github"></i></div>

                            <div className="col-11 text-end mt-2">{userData.linkedin}</div>
                            <div className="col-1"><i className="fa-brands fa-linkedin"></i></div>

                            <div className="col-11 text-end mt-2">{userData.portfolio}</div>
                            <div className="col-1"><i className="fa-solid fa-globe"></i></div>
                        </div>
                    </div>
                </div>

                <div className="sectionHeader">Skills</div>
                <div className="skillContainer">
                    <div className="row">
                        <div className="col-6 pe-2">
                            <div className="skillSmallHeader">Technical Skills</div>
                            <div className="d-flex flex-wrap">
                                {
                                    userData.technicalSkills?.map(elm => <SmallItems title={elm} />)
                                }
                            </div>
                        </div>
                        <div className="col-6 ps-2">
                            <div className="skillSmallHeader">Soft Skills</div>
                            <div className="d-flex flex-wrap">
                                {
                                    userData.softSkills?.map(elm => <SmallItems title={elm} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sectionHeader">Work Experience</div>
                <div className="experienceContainer">
                    {
                        userData.workExperience?.map((elm) => {
                            return (
                                <>
                                    <div className="experience w-100 itemContainer">
                                        <div className="row">
                                            <div className="col-3 my-auto">
                                                <div className="companyName">{elm.designation}</div>
                                                <div className="designation">{elm.companyName}</div>
                                                <div className="duration">{`${elm.startDate} - Present`}</div>

                                                <div className="projectWorked">
                                                    <div className="header">Projects :</div>
                                                    <ul>
                                                        {
                                                            elm.projectList.split(',')?.map(elm => <li>{elm}</li>)
                                                        }
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-9 responsibilities my-auto">
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

                <div className="sectionHeader">Personal Projects</div>
                <div className="projectContainer">
                    {
                        userData.project?.map((elm) => {
                            return (
                                <div className="projectItems itemContainer">
                                    <div className="row">
                                        <div className="col-3 my-auto">
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
                                        <div className="col-9 my-auto">
                                            <div className="projectLearnings">
                                                <ul>
                                                    {
                                                        elm.learnings.split(',')?.map(elm => <li>{elm}</li>)
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>





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


                <div className="sectionHeader">Languages</div>
                <div className="languageContainer d-flex flex-wrap">
                    {
                        userData.languages?.map(elm => <SmallItems title={elm} />)
                    }
                </div>


                <div className="sectionHeader">Hobbies  /  Interests</div>
                <div className="languageContainer d-flex flex-wrap">
                    {
                        userData.hobbies?.map(elm => <SmallItems title={elm} />)
                    }
                </div>








































            </div>
        </>
    )
}

export default Template1