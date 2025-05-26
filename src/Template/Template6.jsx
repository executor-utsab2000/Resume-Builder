import '../CSS_SCSS/template6.scss'
import UserContext from '../Context/userContext';
import { useContext } from 'react';

const Template6 = () => {

    const { userData } =useContext(UserContext)


    return (
        <>
            <div className="container template6">
                <div className="header">
                    <h1>Adam Stotch</h1>
                    <p>Realtor</p>
                    <div className="contact">
                        <p>Email: adam@novoresume.com | Phone: 1111 234 555 | Location: Orlando, FL</p>
                        <p>Website: adam-development.com | LinkedIn: linkedin.com/in/adam.stotch</p>
                    </div>
                </div>



                <p>Dedicated realtor with 5+ years of property management experience. Has <strong>closed 30+ successful transactions</strong> as the buyer's sole representative. As a recent Certified Property Manager, is up-to-date with real estate trends and constantly improves their property management skills.</p>

                <h2>Work Experience</h2>
                <div className="experience">
                    <div className="experience-item">
                        <h3>Realtor - American Realty & Associates <span className='fw-bold '>(02/2019 - Present)</span></h3>
                        <ul>
                            <li><strong>Promoted</strong> apartment listings via social media, ads, Facebook groups, and more.</li>
                            <li><strong>Closed</strong> 20+ successful transactions with $5+ million in volume as the buyer’s sole representative.</li>
                            <li><strong>Accompanied</strong> buyers to apartment viewings and helped them evaluate the properties.</li>
                            <li><strong>Led</strong> a team of 5 to generate property lists and prepare legal documents.</li>
                            <li><strong>Advised</strong> clients on market conditions, prices, and mortgages.</li>
                            <li><strong>Negotiated</strong> between buyers and sellers.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <h3>Real Estate Agent - Penny Realty Inc. <span className='fw-bold '>(11/2015 - 01/2019)</span></h3>
                        <ul>
                            <li><strong>Increased</strong> client retention via newsletters and expert advice.</li>
                            <li><strong>Helped</strong> close 15+ transactions in the final year.</li>
                            <li><strong>Managed</strong> appointments and prepared legal documents.</li>
                            <li><strong>Created</strong> property sale lists with detailed info.</li>
                        </ul>
                    </div>
                </div>

                <h2>Education</h2>
                <div className="education">
                    <div className="education-item">
                        <h3>BA in Business Administration - University of Florida</h3>
                        <p>2010 - 2013</p>
                    </div>
                </div>

                <div className="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>Market and Risk Analysis</li>
                        <li>Property Management</li>
                        <li>Property Manager 5000 Software</li>
                        <li>MLS Database</li>
                        <li>Negotiation</li>
                        <li>Written and Verbal Communication</li>
                        <li>Organization</li>
                        <li>Networking</li>
                    </ul>
                </div>

                <div className="certificates">
                    <h2>Certificates</h2>
                    <ul>
                        <li>Licensed Realtor in Florida (Valid until 09/2029)</li>
                        <li>Certified Property Manager - The Institute of Real Estate Management</li>
                        <li>Certified Residential Specialist / CRS</li>
                        <li>Accredited Buyer’s Representative® / ABR®</li>
                    </ul>
                </div>

                <div className="memberships">
                    <h2>Memberships</h2>
                    <ul>
                        <li>National Association of Realtors</li>
                        <li>Institute of Real Estate Management</li>
                    </ul>
                </div>

                <div className="languages">
                    <h2>Languages</h2>
                    <p>English</p>
                    <p>Spanish</p>
                    <p>French</p>
                    <p>German</p>
                </div>

                <div className="interests">
                    <h2>Interests & Hobbies</h2>
                    <ul>
                        <li>Photography</li>
                        <li>Community Involvement</li>
                        <li>Learning Languages</li>
                        <li>Blogging</li>
                    </ul>
                </div>
            </div>  
        </>
    )
}

export default Template6