import '../CSS_SCSS/template6.scss'
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

const Template6 = () => {

    const { userData } = useContext(UserContext)


    return (
        <>

            <div class="container template6">
                <header class="top-section">
                    <div class="left-header">
                        <h1>{userData.fName + " " + userData.lName}</h1>
                        <p class="title">{userData.designation}</p>
                    </div>
                    <div class="right-header">
                        <p>📧 {userData.email}</p>
                        <p>📞 {userData.contact}</p>
                        <p>📍 {userData.address}</p>
                        <p>🌐 {userData.portfolio}</p>
                        <p>🔗 {userData.linkedin}</p>
                    </div>
                </header>

                <section class="summary">
                    <p>{userData.profileSummary}</p>
                </section>

                <div class="content">
                    <div class="left">
                        <h2>Work Experience</h2>
                        {
                            userData.workExperience.map((elm) => {
                                return (
                                    <div class="job">
                                        <h3>{elm.designation}</h3>
                                        <p class="company text-capitalize">{elm.companyName} <span>{`${elm.startDate} - ${elm.endDate}`}</span></p>
                                        <ul>
                                            {
                                                elm.responsibilities.split(',')?.map(elm => <li>{elm}</li>)
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
                                    <div class="job">
                                        <h3>{elm.title}</h3>
                                        <p> {`${elm.startDate} - ${elm.endDate}`}</p>
                                        <div className="d-flex  ">
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

                    <section class="right">
                        <h2>Skills</h2>
                        <ul class="skills">
                            {
                                userData.technicalSkills?.map(elm => <li>{elm}</li>)
                            }
                        </ul>

                        <h2>Certificates</h2>
                        <ul class="certificates">
                            {
                                userData.certificate?.map(elm => <li>{elm.title} - {elm.issuedBy}</li>)
                            }
                        </ul>

                        <h2>Soft Skills</h2>
                        <ul class="memberships">
                            {
                                userData.softSkills?.map(elm => <li>{elm}</li>)
                            }
                        </ul>

                        <h2>Languages</h2>
                        <ul class="languages">
                            {
                                userData.languages.map(elm => <li>{elm}</li>)
                            }
                        </ul>

                        <h2>Interests & Hobbies</h2>
                        <ul class="hobbies">
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