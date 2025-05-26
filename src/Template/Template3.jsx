import '../CSS_SCSS/template3.scss'
import UserContext from '../Context/userContext';
import { useContext } from 'react';

const Template3 = () => {
    const { userData } =useContext(UserContext)
    


    return (
        <>
            <div className="container py-5 template3">
                <div className="row">

                    <div className="col-md-4 left-section">
                        <h2>Chris Flims</h2>
                        <p className="text-danger">Project Manager - Remote</p>
                        <p className="text-muted">Dynamic and goal-driven Project Manager with 10+ years of comprehensive background in project management, coordination, cost analysis, and quality assurance.</p>
                        <div className="icon-text"><i className="bi bi-envelope"></i> chris@novoresume.com</div>
                        <div className="icon-text"><i className="bi bi-telephone"></i> 123 332 4141</div>
                        <div className="icon-text"><i className="bi bi-geo-alt"></i> Oslo, Working Remotely</div>
                        <div className="icon-text"><i className="bi bi-globe"></i> chris-films.com</div>
                        <div className="icon-text"><i className="bi bi-linkedin"></i> linkedin.com/in/chris.flims</div>
                        <div className="icon-text"><i className="bi bi-medium"></i> medium.com/@chris.flims</div>
                    </div>


                    <div className="col-md-8">

                        <div className="section-title"><i className="bi bi-patch-check"></i> AREAS OF EXPERTISE</div>
                        <div>
                            <span className="badge-skill">Project Analysis</span>
                            <span className="badge-skill">JIRA</span>
                            <span className="badge-skill">Gtmhub</span>
                            <span className="badge-skill">CMS</span>
                            <span className="badge-skill">Data Analysis</span>
                            <span className="badge-skill">Workforce Management & Coaching</span>
                            <span className="badge-skill">Agile</span>
                            <span className="badge-skill">KPI Management</span>
                            <span className="badge-skill">Stakeholders Engagement</span>
                            <span className="badge-skill">Digital Operation Improvement</span>
                            <span className="badge-skill">Resource Optimization</span>
                            <span className="badge-skill">AI & ML</span>
                        </div>


                        <div className="section-title"><i className="bi bi-briefcase"></i> WORK EXPERIENCE</div>

                        <div className="work-item">
                            <h5>Project Manager, GHG Logistics</h5>
                            <small className="text-muted">02/2021 - Present</small>
                            <ul>
                                <li>Managed multiple technical initiatives with QA and process improvement.</li>
                                <li>Led service strategy and increased productivity by 10%.</li>
                                <li>Improved KPI reporting, system migrations, and application dev.</li>
                                <li>Maintained 100% client satisfaction on services.</li>
                                <li>Resolved project issues on time in 95% of cases.</li>
                            </ul>
                        </div>

                        <div className="work-item">
                            <h5>Project Manager, Amazing Creations International</h5>
                            <small className="text-muted">03/2015 - 12/2020</small>
                            <ul>
                                <li>Tracked site performance, kept 40 out of 45 projects under budget.</li>
                                <li>Generated timeline and budget forecasting reports.</li>
                                <li>Improved team coordination and communication efficiency by 15%.</li>
                            </ul>
                        </div>

                        <div className="work-item">
                            <h5>Assistant Project Manager, Sunshine Big3 Enterprise</h5>
                            <small className="text-muted">06/2012 - 02/2015</small>
                            <ul>
                                <li>Reviewed proposals and served as core team expert.</li>
                                <li>Supported customers with insights and need assessments.</li>
                                <li>Improved daily operations via procedural enhancements.</li>
                            </ul>
                        </div>


                        <div className="section-title"><i className="bi bi-mortarboard"></i> EDUCATION</div>
                        <div className="education-item">
                            <strong>Master of Science in Project Management</strong><br />
                            Trondheim University <span className="text-muted">2012 - 2014</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Template3