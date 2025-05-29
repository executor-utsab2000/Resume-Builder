import '../CSS_SCSS/template5.scss'
import React from 'react'
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

const Template5 = () => {

    const { userData } = useContext(UserContext)

    return (
        <>
            <div className='container template5'>

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
                                        elm.responsibilities.split(',')?.map(elm => <li>{elm}</li>)
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