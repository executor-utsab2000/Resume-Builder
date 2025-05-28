import SmallItems from '../Components/SmallItems';
import '../CSS_SCSS/template2.scss'
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

const Template2 = () => {
    const { userData } = useContext(UserContext)

    return (
        <>
            <div className="container template2">
                <div className="text-center">
                    <h1>{userData.fName + " " + userData.lName}</h1>
                    <h5 className="text-danger">{userData.designation}</h5>
                    <p className="mt-3 pb-4">
                        {userData.profileSummary}
                    </p>
                </div>

                <div className="row text-center my-4 contact-info">
                    <div className="col-3 icon-text mx-auto my-1"><i className="bi bi-envelope"></i> {userData.email}</div>
                    <div className="col-3 icon-text mx-auto my-1"><i className="bi bi-telephone"></i> {userData.contact}</div>
                    <div className="col-3 icon-text mx-auto my-1"><i className="bi bi-globe"></i> {userData.portfolio}</div>
                    <div className="col-3 icon-text mx-auto my-1"><i className="bi bi-linkedin"></i> {userData.linkedin}</div>
                    <div className="col-6 icon-text mx-auto my-1"><i className="bi bi-geo-alt"></i> {userData.address}</div>
                </div>

                <div className="section-title">Areas of Expertise</div>
                <div className="mb-3">
                    <div className="d-flex flex-wrap">
                        {
                            userData.technicalSkills.map(elm => <SmallItems title={elm} />)
                        }
                    </div>
                </div>

                <div className="section-title">Work Experience</div>
                {
                    userData.workExperience.map((elm) => {
                        return (
                            <div>
                                <h5>{elm.designation} - <span className='text-capitalize'>{elm.companyName}</span> <span className="text-muted small">({`${elm.startDate} - Present`})</span></h5>
                                <ul>
                                    {
                                        elm.responsibilities.split(',').map(elm => <li>{elm}</li>)
                                    }
                                </ul>
                            </div>
                        )
                    })
                }

                <div className="section-title">Personal Projects</div>
                {
                    userData.project?.map((elm) => {
                        return (
                            <div>
                                <h5>{elm.title} -  <span className="text-muted small">({`${elm.startDate} - ${elm.endDate}`})</span></h5>
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



                <div className="section-title">Education</div>
                {
                    userData.qualification.map((elm) => {
                        return (
                            <p><strong>{elm.degree}</strong><br />
                                {elm.institute} <span className="text-muted ps-3">{elm.year}</span></p>
                        )
                    })
                }


                <div className="section-title">Certificates</div>
                {
                    userData.certificate.map((elm) => {
                        return (
                            <p><strong>{elm.title}</strong><br />
                                {elm.issuedBy} <span className="text-muted ps-3">{`${elm.startDate} - ${elm.endDate}`}</span></p>
                        )
                    })
                }
            </div>


        </>
    )
}

export default Template2