import '../CSS_SCSS/template4.scss'
import UserContext from '../Context/userContext';
import { useContext } from 'react';


const Template4 = () => {

    const { userData } =useContext(UserContext)


    return (
        <>
            <div className="container py-4 template4">
                <div className="text-start">
                    <h2 className="fw-bold">Chris Flims</h2>
                    <h6 className="text-danger">Project Manager - Remote</h6>
                    <p>
                        Dynamic and goal-driven Project Manager with 10+ years of comprehensive background in providing client-centric solutions across diverse sectors.
                        Equipped with a record of success on project management, combined with demonstrated abilities in project coordination, programming, invoicing,
                        scheduling, cost analysis, site measurements, quality calculations, and quality assurance.
                        Looking for an opportunity to apply my project management, remote skills and grow professionally.
                    </p>
                </div>

                <div className="row text-start contact-icons mb-3">
                    <div className="col-md-4 contact-item"><i className="bi bi-envelope-fill"></i> chris@novoresume.com</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-telephone-fill"></i> 123 332 4141</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-geo-alt-fill"></i> Oslo, Working Remotely</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-link-45deg"></i> chris-films.com</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-linkedin"></i> linkedin.com/in/chris.flims</div>
                    <div className="col-md-4 contact-item"><i className="bi bi-medium"></i> medium.com/@chris.flims</div>
                </div>

                <div className="section-title">Areas of Expertise</div>
                <div className="skills">
                    <span>Project Analysis</span>
                    <span>JIRA</span>
                    <span>Gtmhub</span>
                    <span>CMS</span>
                    <span>Data Analysis</span>
                    <span>Workforce Management & Coaching</span>
                    <span>Agile</span>
                    <span>KPI Management</span>
                    <span>Stakeholders Engagement</span>
                    <span>Digital Operation Improvement</span>
                    <span>Resource Optimization</span>
                    <span>AI & ML</span>
                </div>

                <div className="section-title">Work Experience</div>
                <div className="sub-section mb-3">
                    <div className="job-title">Project Manager</div>
                    <div className="job-company">GHG Logistics</div>
                    <div className="job-dates">02/2021 - Present</div>
                    <ul>
                        <li>Oversee responsibility for the management of multiple technical initiatives while establishing and maintaining general quality assurance and optimum process flow.</li>
                        <li>Develop overall implementation approach, service strategy, proposal plan, consistent system integration, and service strategy.</li>
                        <li>Initiate PMO directory and KPI reporting improvement, system migrations, and application development.</li>
                        <li>Follow up with clients to ensure 100% customer satisfaction with existing product lines and services.</li>
                        <li>Monitor every project's progress from design to implementation while steadily resolving issues on time in 95% of cases.</li>
                    </ul>

                    <div className="job-title">Project Manager</div>
                    <div className="job-company">Amazing Creations International</div>
                    <div className="job-dates">03/2015 - 12/2020</div>
                    <ul>
                        <li>Tracked website performance and recommended dynamic optimizations.</li>
                        <li>Generate in-depth reports regarding variances and forecasting of the timeline, project scope, and budget for 45 projects.</li>
                        <li>Establish efficient coordination between departments that increased communication efficiency by 15%.</li>
                    </ul>

                    <div className="job-title">Assistant Project Manager</div>
                    <div className="job-company">Sunshine Big3 Enterprise</div>
                    <div className="job-dates">06/2012 - 02/2015</div>
                    <ul>
                        <li>Demonstrated cross-functionality by serving as subject expert/core team member to review proposals.</li>
                        <li>Offered hands-on assistance to customers and maintained current knowledge of preferences.</li>
                        <li>Managed opening and closing procedures and recommended efficiency enhancements.</li>
                    </ul>
                </div>

                <div className="section-title">Education</div>
                <div className="sub-section">
                    <strong>Master of Science in Project Management</strong><br />
                    Trondheim University<br />
                    <small className="text-danger">2012 - 2014</small>
                </div>
            </div>
        </>
    )
}

export default Template4