import '../CSS_SCSS/template7.scss'
import UserContext from '../Context/UserContext';
import { useContext } from 'react';


const Template7 = () => {
    const { userData } = useContext(UserContext)

    return (
        <>
            <div className='container resume template7'>
                <div>
                    <header>
                        <h1>First Last</h1>
                        <p>Bay Area, California • +1-234-456-789 • professionalemail@resumeworded.com • linkedin.com/in/username</p>
                    </header>

                    <section className="section">
                        <h2>PROFESSIONAL EXPERIENCE</h2>

                        <div className="job">
                            <div className="job-header">
                                <h3>Resume Worded</h3>
                                <span>New York, NY</span>
                                <span className="date">Jun 2018 – Present</span>
                            </div>
                            <p><strong>Human Resources Manager</strong></p>
                            <ul>
                                <li>Structured and implemented programs and policies in training, compensation, benefits, and onboarding, saving over 70% in recruiting costs.</li>
                                <li>Led HR strategy for 150+ franchises, generating over $40 million in revenue.</li>
                                <li>Oversaw company reorganization: closed 20 franchises and 65+ job cuts.</li>
                            </ul>
                        </div>

                        <div className="job">
                            <div className="job-header">
                                <h3>Second Company</h3>
                                <span>New York, NY</span>
                                <span className="date">Jan 2015 – May 2018</span>
                            </div>
                            <p><strong>Human Resources Manager</strong></p>
                            <ul>
                                <li>Implemented employee referral program, reducing cost per hire by 35%.</li>
                                <li>Managed benefits for 350+ employees across 7 departments.</li>
                                <li>Ensured 100% compliance with federal/state regulations (EEO, ADA, FMLA, HIPAA).</li>
                            </ul>
                        </div>

                        <div className="job">
                            <div className="job-header">
                                <h3>Third Company</h3>
                                <span>San Diego, CA</span>
                                <span className="date">May 2008 – Dec 2014</span>
                            </div>

                            <p><strong>Assistant Human Resources Manager (Nov 2011 – Dec 2014)</strong></p>
                            <ul>
                                <li>Promoted within 18 months due to performance and impact.</li>
                                <li>Improved retention rate to over 80% by enhancing work environment.</li>
                                <li>Planned 30+ training sessions for 300+ employees across 6 offices.</li>
                            </ul>

                            <p><strong>Human Resources Coordinator (May 2010 – Oct 2011)</strong></p>
                            <ul>
                                <li>Conducted phone interviews for 30+ roles.</li>
                                <li>Cut complaints/turnover by 50% through open-door policy and corrective actions.</li>
                                <li>Trained 15+ recruits on onboarding and orientation.</li>
                            </ul>

                            <p><strong>Human Resources Assistant (May 2008 – May 2010)</strong></p>
                            <ul>
                                <li>Screened and recruited 100+ candidates, hiring 40+ over 2 years.</li>
                                <li>Maintained employee records and assignments.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="section">
                        <h2>EDUCATION</h2>
                        <div className="job-header">
                            <h3>Resume Worded University</h3>
                            <span>San Francisco, CA</span>
                            <span className="date">May 2010</span>
                        </div>
                        <p>Bachelor of Science in Human Resource Management.</p>
                    </section>

                    <section className="section">
                        <h2>SKILLS</h2>
                        <ul className="skills">
                            <li>ADP Workforce Now</li>
                            <li>PurelyHR</li>
                            <li>Oracle Taleo</li>
                            <li>MS Office Suite</li>
                            <li>iCIMS Talent Acquisition</li>
                            <li>Human Resources Management Software (HRMS)</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Template7