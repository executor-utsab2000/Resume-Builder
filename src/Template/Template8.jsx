import '../CSS_SCSS/template8.scss'
import UserContext from '../Context/UserContext';
import { useContext } from 'react';



const Template8 = () => {
    const { userData } = useContext(UserContext)

    return (
        <>
            <div className=" container template8">
                <div className="resume">
                    <div className="left-column">
                        <h1>First Last</h1>
                        <h2>Human Resources Assistant</h2>
                        <p>
                            Human resources assistant with 10 years of experience in HR administration and coordination, including recruitment, onboarding, human resources information system (HRIS), and event planning. Skilled in streamlining operations, controlling costs, and maximizing efficiency. Key achievement: performed successful background checks, drug screens, and sex offender registry search on 950 employees before management confirmed their appointments.
                        </p>

                        <h3>WORK EXPERIENCE</h3>
                        <div className="job">
                            <div className="title">
                                <strong>Human Resources Assistant</strong>
                                <span>November 2015 – Present</span>
                            </div>
                            <div className="company">Resume Worded, New York, NY</div>
                            <ul>
                                <li>Copied 200 documents, sent 490 emails, and filed much paperwork under the direct supervision of the HR manager.</li>
                                <li>Performed background checks, drug screens, and sex offender registry search on 950 employees.</li>
                                <li>Spearheaded 20 seminars on workplace violence, emergency response plans, and health awareness for 1K new employees.</li>
                                <li>Conducted 500 interviews with over 1.2K potential candidates.</li>
                            </ul>
                        </div>

                        <div className="job">
                            <div className="title">
                                <strong>Payroll Supervisor</strong>
                                <span>February 2013 – October 2015</span>
                            </div>
                            <div className="company">Growthsi, San Francisco, CA</div>
                            <ul>
                                <li>Computed weekly earnings for 800 employees within 24 hours.</li>
                                <li>Provided training sessions to 700 employees, increasing participation by 75%.</li>
                                <li>Improved productivity by 80% YOY with a computerized system.</li>
                                <li>Supervised a 15-member team processing time cards for 800 employees.</li>
                            </ul>
                        </div>

                        <div className="job">
                            <div className="title">
                                <strong>Headhunter</strong>
                                <span>June 2010 – January 2013</span>
                            </div>
                            <div className="company">Resume Worded’s Exciting Company, New York, NY</div>
                            <ul>
                                <li>Recruited and placed over 730 professionals earning over $200K annually.</li>
                                <li>Supervised development of 2.3K employees for 200 HNIs.</li>
                                <li>Trained 94 employees in interviewing and talent acquisition.</li>
                                <li>Scouted over 23K resumes for Fortune 500 companies.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="section">
                            <h3>CONTACT</h3>
                            <ul>
                                <li>New Orleans, LA (Open to Remote)</li>
                                <li>+1-234-456-789</li>
                                <li>email@resumeworded.com</li>
                                <li>linkedin.com/in/username</li>
                                <li>github.com/resumeworded</li>
                            </ul>
                        </div>

                        <div className="section">
                            <h3>SKILLS</h3>
                            <strong>Technical Skills:</strong>
                            <ul>
                                <li>Recruiting (Advanced)</li>
                                <li>Screening (Experienced)</li>
                                <li>Sourcing</li>
                                <li>Interviewing</li>
                                <li>Training</li>
                            </ul>
                            <strong>Hiring Techniques:</strong>
                            <ul>
                                <li>Talent Management</li>
                                <li>Employee Engagement</li>
                                <li>Strategic Human Resource Planning</li>
                            </ul>
                            <strong>Tools and Software:</strong>
                            <ul>
                                <li>Intuit QuickBooks</li>
                                <li>Stratitec TimeIPS</li>
                                <li>Microsoft Outlook</li>
                                <li>Oracle Taleo</li>
                                <li>ADP Workforce Now</li>
                            </ul>
                        </div>

                        <div className="section">
                            <h3>EDUCATION</h3>
                            <p><strong>Resume Worded University</strong><br />
                                Bachelor of Arts – Psychology<br />
                                Boston, MA – May 2010<br />
                                Awards: Resume Worded Teaching Fellow, Dean’s List 2012 (Top 10%)</p>
                        </div>

                        <div className="section">
                            <h3>OTHER</h3>
                            <ul>
                                <li>Certified Payroll Professional</li>
                                <li>SHRM-CP Certification</li>
                                <li>Certified Payroll Professional</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Template8