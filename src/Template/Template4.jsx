import '../CSS_SCSS/template4.scss'
import UserContext from '../Context/UserContext';
import { useContext } from 'react';


const Template4 = () => {

    const { userData } = useContext(UserContext)


    return (
        <>
            <div className="container py-4 template4">
                <div className="text-start">
                    <h2 className="fw-bold">{userData.fName + " " + userData.lName}</h2>
                    <h6 className="text-danger">{userData.designation}</h6>
                    <p>{userData.profileSummary}</p>
                </div>

                <div className="row text-start contact-icons mb-3">
                    <div className="col-md-4 contact-item"><i className="bi bi-envelope-fill"></i> {userData.email}</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-telephone-fill"></i> {userData.contact}</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-geo-alt-fill"></i> {userData.address}</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-link-45deg"></i> {userData.portfolio}</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-linkedin"></i> {userData.linkedin}</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-medium"></i> {userData.github}</div>
                </div>

                <div className="section-title">Areas of Expertise</div>
                <div className="skills">
                    {
                        userData.technicalSkills?.map(elm => <span>{elm}</span>)
                    }
                </div>

                <div className="section-title">Soft SKills</div>
                <div className="skills">
                    {
                        userData.softSkills?.map(elm => <span>{elm}</span>)
                    }
                </div>

                <div className="section-title">Work Experience</div>
                <div className="sub-section mb-3">
                    {
                        userData.workExperience.map((elm) => {
                            return (
                                <>
                                    <div className="job-title">{elm.designation}</div>
                                    <div className="job-company">{elm.companyName}</div>
                                    <div className="job-dates">{`${elm.startDate} - Present`}</div>
                                    <ul>
                                        {
                                            elm.responsibilities.split(',')?.map(elm => <li>{elm}</li>)
                                        }
                                    </ul>
                                </>
                            )
                        })
                    }


                </div>

                <div className="section-title">Education</div>
                {
                    userData.qualification.map((elm) => {
                        return (
                            <>
                                <div className="sub-section mb-2">
                                    <strong>{elm.degree}</strong><br />
                                    {elm.institute}<br />
                                    <small className="text-danger">{elm.year}</small>
                                </div>
                            </>
                        )
                    })
                }


                <div className="section-title">Hobbies</div>
                <div className="skills">
                    {
                        userData.hobbies?.map(elm => <span>{elm}</span>)
                    }
                </div>

                <div className="section-title">Languages</div>
                <div className="skills">
                    {
                        userData.languages?.map(elm => <span>{elm}</span>)
                    }
                </div>









            </div>
        </>
    )
}

export default Template4