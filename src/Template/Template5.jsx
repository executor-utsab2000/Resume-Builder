import '../CSS_SCSS/template5.scss'
import React from 'react'
import UserContext from '../Context/userContext';
import { useContext } from 'react';

const Template5 = () => {

    const { userData } =useContext(UserContext)

    return (
        <>
            <div className='container template5'>

                <div className="text-start">
                    <div className="name">Chris Flims</div>
                    <div className="title">Project Manager - Remote</div>
                    <p>
                        Dynamic and goal-driven Project Manager with 10+ years of experience in providing client-centric solutions across diverse sectors.
                        Equipped with a record of success in project coordination, scheduling, cost analysis, quality calculations, and assurance.
                        Seeking an opportunity to grow professionally.
                    </p>
                </div>


                <div className="section-title">CONTACT</div>
                <div className="mb-3">
                    <div className="info-item"><span>Email:</span> chris@novoresume.com</div>
                    <div className="info-item"><span>Phone:</span> 123 332 4141</div>
                    <div className="info-item"><span>Location:</span> Oslo, Working Remotely</div>
                    <div className="info-item"><span>Website:</span> chris-films.com</div>
                    <div className="info-item"><span>LinkedIn:</span> linkedin.com/in/chris.flims</div>
                    <div className="info-item"><span>Medium:</span> medium.com/@chris.flims</div>
                </div>


                <div className="section-title">AREAS OF EXPERTISE</div>
                <ul>
                    <li>Project Analysis</li>
                    <li>JIRA</li>
                    <li>Gtmhub</li>
                    <li>CMS</li>
                    <li>Data Analysis</li>
                    <li>Workforce Management & Coaching</li>
                    <li>Agile</li>
                    <li>KPI Management</li>
                    <li>Stakeholder Engagement</li>
                    <li>Digital Operation Improvement</li>
                    <li>Resource Optimization</li>
                    <li>AI & ML</li>
                </ul>


                <div className="section-title">WORK EXPERIENCE</div>
                <p><strong>Project Manager</strong> - GHG Logistics <span className="text-muted">(02/2021 - Present)</span></p>
                <ul>
                    <li>Oversaw multiple technical initiatives.</li>
                    <li>Developed implementation approaches and service strategies.</li>
                    <li>Initiated PMO directory and KPI improvements.</li>
                    <li>Maintained high client satisfaction levels.</li>
                    <li>Resolved issues on time in 95% of cases.</li>
                </ul>

                <p><strong>Project Manager</strong> - Amazing Creations International <span className="text-muted">(03/2015 - 12/2020)</span></p>
                <ul>
                    <li>Tracked website performance for 45 projects.</li>
                    <li>Generated forecasts and variance reports.</li>
                    <li>Improved inter-department communication by 15%.</li>
                </ul>

                <p><strong>Assistant Project Manager</strong> - Sunshine Big3 Enterprise <span className="text-muted">(06/2012 - 02/2015)</span></p>
                <ul>
                    <li>Served as SME for proposals and procedures.</li>
                    <li>Provided customer assistance and product knowledge.</li>
                    <li>Recommended workflow enhancements for better efficiency.</li>
                </ul>


                <div className="section-title">EDUCATION</div>
                <p><strong>Master of Science in Project Management</strong><br />
                    Trondheim University, 2012 - 2014</p>


                <div className="section-title">CERTIFICATIONS</div>
                <div className="certification-item">Certified ScrumMaster (CSM) – Scrum Alliance</div>
                <div className="certification-item">Project Management Professional (PMP) – PMI</div>
                <div className="certification-item">Google Project Management Certificate – Coursera</div>
            </div>
        </>
    )
}

export default Template5