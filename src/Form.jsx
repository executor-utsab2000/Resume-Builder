import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import setNestedObject from './JS/setNestedObject'
import UserContext from './Context/UserContext'
import { useEffect } from 'react'


const Form = () => {

    const [qualification, setQualification] = React.useState([0])
    const [workExperience, setWorkExperience] = React.useState([])
    const [technicalSkills, setTechnicalSkills] = React.useState([])
    const [softSkills, setSoftSkills] = React.useState([0])
    const [languages, setLanguages] = React.useState([0])
    const [certificate, setCertificate] = React.useState([])
    const [project, setProject] = React.useState([])
    const [hobbies, setHobbies] = React.useState([0])

    const { setUserData } = useContext(UserContext)
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const data = {};

        for (let [key, value] of formData.entries()) {
            setNestedObject(data, key, value);
        }
        setUserData(data);
        navigate('/template-listing');
    }
    return (
        <div className='formResume'>
            <h1 className='mb-4'> RESUME BUILDER </h1>
            <form onSubmit={submitForm} autoComplete='off'>
                <section>
                    <h4 className='text-center'>Personal Details :</h4>
                    <table className="table  ">
                        <tbody>
                            <tr>
                                <td colSpan={2}>
                                    <h6 className="text-danger"> *If Middle Name add to First Name *</h6>
                                </td>
                            </tr>
                            <tr>
                                <td className='w-25'><label htmlFor="fName">First Name: <span className="fw-bold text-danger">*</span></label></td>
                                <td><input id="fName" name="fName" className='form-control mandetory' placeholder='Enter First Name' required /></td>
                            </tr>
                            <tr>
                                <td className='w-25'><label htmlFor="lName">Last Name: <span className="fw-bold text-danger">*</span></label></td>
                                <td><input id="lName" name="lName" className='form-control mandetory' placeholder='Enter Last Name' required /></td>
                            </tr>
                            <tr>
                                <td className='w-25'><label htmlFor="designation">Designation:</label></td>
                                <td><input id="designation" name="designation" className='form-control' placeholder='Enter Designation' /></td>
                            </tr>
                            <tr>
                                <td className='w-25'><label htmlFor="contact">Contact: <span className="fw-bold text-danger">*</span></label></td>
                                <td><input id="contact" name="contact" className='form-control mandetory' placeholder='Enter Contact' required /></td>
                            </tr>
                            <tr>
                                <td className='w-25'><label htmlFor="email">Email: <span className="fw-bold text-danger">*</span></label></td>
                                <td><input id="email" name="email" className='form-control mandetory' placeholder='Enter Email' required /></td>
                            </tr>
                            <tr>
                                <td className='w-25'><label htmlFor="address">Address: <span className="fw-bold text-danger">*</span></label></td>
                                <td><textarea id="address" name="address" className='form-control w-100 mandetory' placeholder='Enter Address' rows={4} required ></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section>
                    <h4 className='mt-5 text-center'>Links :</h4>
                    <table className="table  ">
                        <tbody>
                            <tr>
                                <td className='w-25'><label htmlFor="github">Github</label></td>
                                <td><input id="github" name="github" className='form-control' placeholder='Enter Github Profile Link' /></td>
                            </tr>
                            <tr>
                                <td className='w-25'><label htmlFor="linkedin">Linkedin:</label></td>
                                <td><input id="linkedin" name="linkedin" className='form-control' placeholder='Enter Linkedin' /></td>
                            </tr>
                            <tr>
                                <td className='w-25'><label htmlFor="portfolio">Portfolio:</label></td>
                                <td><input id="portfolio" name="portfolio" className='form-control' placeholder='Enter Portfolio Link' /></td>
                            </tr>
                        </tbody>
                    </table>
                </section>


                <section>
                    <h4 className='mt-5 text-center'>Work Experience :</h4>
                    {workExperience.map((elm, index) => {
                        return (
                            <>
                                <div className="experienceItems">
                                    <div className="row">
                                        <div className="col-12 fw-bold mb-1">Work Experience {index + 1}</div>
                                        <div className="col-lg-2 my-auto"><input name={`workExperience[${index}][designation]`} className='form-control' placeholder='Enter Designation' /></div>
                                        <div className="col-lg-2 my-auto"><input name={`workExperience[${index}][companyName]`} className='form-control' placeholder='Enter Company Name' /></div>
                                        <div className="col-lg-2 my-auto"><input name={`workExperience[${index}][startDate]`} className='form-control' placeholder='Enter Start Date ' /></div>
                                        <div className="col-lg-2 my-auto"><input name={`workExperience[${index}][endDate]`} className='form-control' placeholder='Enter Resign Date' /></div>
                                        <div className="col-lg-2 my-auto"><textarea name={`workExperience[${index}][projectList]`} id="" rows={4} className='w-100 form-control' placeholder='Enter Projects List / use " // " separator to  separate projects'></textarea></div>
                                        <div className="col-lg-2 my-auto"><textarea name={`workExperience[${index}][responsibilities]`} id="" rows={4} className='w-100 form-control' placeholder='Enter Responsibilities / use " // " separator to  separate responsibilities'></textarea></div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                    <button type="button" className='btn btn-success mb-5 actionIcon' onClick={() => setWorkExperience([...workExperience, workExperience.length])}><i className="fa-solid fa-plus"></i></button>
                </section>

                <section>
                    <h4 className='mt-5 text-center'>Educational Qualification : <span className="fw-bold text-danger">*</span></h4>
                    {
                        qualification.map((elm, index) => {
                            return (
                                <>
                                    <div className="qualificationItem mb-3">
                                        <div className="row">
                                            <div className="col-lg-12 my-auto fw-bold">Qualification {index + 1}</div>
                                            <div className="col-lg-2 my-auto"><input name={`qualification[${index}][degree]`} className='form-control mandetory' placeholder='Enter Qualification Degree  Eg. Graduation ,HS, etc' required /></div>
                                            <div className="col-lg-2 my-auto"><input name={`qualification[${index}][year]`} className='form-control mandetory' placeholder='Enter Year of Pass out' required /></div>
                                            <div className="col-lg-2 my-auto"><input name={`qualification[${index}][marks]`} className='form-control mandetory' placeholder='Enter Marks ' required /></div>
                                            <div className="col-lg-2 my-auto"><input name={`qualification[${index}][course]`} className='form-control mandetory' placeholder='Enter Course' required /></div>
                                            <div className="col-lg-2 my-auto"><input name={`qualification[${index}][institute]`} className='form-control mandetory' placeholder='Enter College / School' required /></div>
                                            <div className="col-lg-2 my-auto"><input name={`qualification[${index}][headInstitute]`} className='form-control mandetory' placeholder='Enter University / Board' required /></div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <button type="button" className='btn btn-success mb-5 actionIcon' onClick={() => setQualification([...qualification, qualification.length])}><i className="fa-solid fa-plus"></i></button>
                </section>


                <section>
                    <h4 className='mt-5 text-center'>Technical Skills :</h4>
                    <table className="table  ">
                        <tbody>
                            {
                                technicalSkills.map((elm, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>Technical Skills {index + 1}</td>
                                            <td><input name={`technicalSkills[${index}]`} className='form-control' placeholder='Enter Technical Skills' /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button type="button" className='btn btn-success mb-5 actionIcon' onClick={() => setTechnicalSkills([...technicalSkills, technicalSkills.length])}><i className="fa-solid fa-plus"></i></button>
                </section>


                <section>
                    <h4 className='mt-5 text-center'>Soft Skills : <span className="fw-bold text-danger">*</span></h4>
                    <table className="table  ">
                        <tbody>
                            {
                                softSkills.map((elm, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>Soft Skills {index + 1}</td>
                                            <td><input name={`softSkills[${index}]`} className='form-control mandetory' placeholder='Enter Soft Skills ' required /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button type="button" className='btn btn-success mb-5 actionIcon' onClick={() => setSoftSkills([...softSkills, softSkills.length])}><i className="fa-solid fa-plus"></i></button>
                </section>


                <section>
                    <h4 className='mt-5 text-center'>Languages : <span className="fw-bold text-danger">*</span></h4>
                    <table className="table  ">
                        <tbody>
                            {
                                languages.map((elm, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>Languages {index + 1}</td>
                                            <td><input name={`languages[${index}]`} className='form-control mandetory' placeholder='Enter Languages You Speak' required /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button type="button" className='btn btn-success mb-5 actionIcon' onClick={() => setLanguages([...languages, languages.length])}><i className="fa-solid fa-plus"></i></button>
                </section>


                <section>
                    <h4 className='mt-5 text-center'>Certificates (if any) :</h4>
                    {
                        certificate.map((elm, index) => {
                            return (
                                <div className="certificateItems">
                                    <div className="row">
                                        <div className="col-lg-2 fw-bold">Certificate {index + 1}</div>
                                        <div className="col-lg-3"><input name={`certificate[${index}][title]`} className='form-control' placeholder='Enter Certificate Title' /></div>
                                        <div className="col-lg-2"><input name={`certificate[${index}][startDate]`} className='form-control' placeholder='Enter Certificate Start Date' /></div>
                                        <div className="col-lg-2"><input name={`certificate[${index}][endDate]`} className='form-control' placeholder='Enter Certificate End Date' /></div>
                                        <div className="col-lg-3"><input name={`certificate[${index}][issuedBy]`} className='form-control' placeholder='Enter Certificate Issue Institute' /></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button type="button" className='btn btn-success mb-5 actionIcon' onClick={() => setCertificate([...certificate, certificate.length])}><i className="fa-solid fa-plus"></i></button>
                </section>


                <section>
                    <h4 className='mt-5 text-center'>Personal Projects / Achivements :</h4>
                    {
                        project.map((elm, index) => {
                            return (
                                <div className="projectItems">
                                    <div className="row">
                                        <div className="col-12 fw-bold">Projects {index + 1}</div>
                                        <div className="col-lg-2 my-auto"><input name={`project[${index}][title]`} className='form-control' placeholder='Project Title' /></div>
                                        <div className="col-lg-2 my-auto"><input name={`project[${index}][startDate]`} className='form-control' placeholder='Start Date' /></div>
                                        <div className="col-lg-2 my-auto"><input name={`project[${index}][endDate]`} className='form-control' placeholder='End Date' /></div>
                                        <div className="col-lg-2 my-auto"><input name={`project[${index}][liveLink]`} className='form-control' placeholder='Live Link(if any)' /></div>
                                        <div className="col-lg-2 my-auto"><textarea name={`project[${index}][learnings]`} id="" rows={4} className='w-100 form-control' placeholder='Learning  use " // " to sepatate learnings'></textarea></div>
                                        <div className="col-lg-2 my-auto"><textarea name={`project[${index}][techStacks]`} id="" rows={4} className='w-100 form-control' placeholder='Tech Stacks  use " // " to sepatate'></textarea></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button type="button" className='btn btn-success mb-5 actionIcon' onClick={() => setProject([...project, project.length])}><i className="fa-solid fa-plus"></i></button>
                </section>



                <section>
                    <h4 className='mt-5 text-center'>Hobby : <span className="fw-bold text-danger">*</span></h4>
                    <table className="table  ">
                        <tbody>
                            {
                                hobbies.map((elm, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>Hobby {index + 1}</td>
                                            <td><input name={`hobbies[${index}]`} className='form-control mandetory' placeholder='Enter Hobbies or interests' required /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button type="button" className='btn btn-success mb-5 actionIcon' onClick={() => setHobbies([...hobbies, hobbies.length])}><i className="fa-solid fa-plus"></i></button>
                </section>

                <section>
                    <h4 className='mt-5 text-center'>Profile Summary : <span className="fw-bold text-danger">*</span></h4>
                    <table className="table  ">
                        <tbody>
                            <tr>
                                <td className='w-25'>Profile Summary</td>
                                <td><textarea name="profileSummary" id="" rows={7} className='w-100 form-control mandetory' placeholder='Enter Profile Summary' required></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                </section>


                <input type="submit" className='btn btn-success w-100 py-3' value="Submit" />

            </form>
        </div>
    )
}

export default Form