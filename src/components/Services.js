
import logocolor from './images/logocolor.png';
import city from './videos/city.mp4';
import VerifiedIcon from '@mui/icons-material/Verified';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./service.css"
function Services() {
    return (
        <>
            <div id="container_service_video">
                <video src={city} autoPlay loop muted />
            </div>
            <div className='container_service'>
                <nav>
                    <ul>
                        <li className="nav"><NavLink to='/'>Home</NavLink></li>
                        <li className="nav"><NavLink to='/Project'>Projects</NavLink></li>
                        <li className="nav"><NavLink to='/AboutMe'>About</NavLink></li>
                        <li className="nav"><NavLink to='/Contact-Me'>Contact</NavLink></li>
                        <li className="nav"><NavLink to='/Services'>Services</NavLink></li>
                    </ul>
                </nav>
            </div>
            <section className="section_service_content">
                <div id="service_cards">
                    <div id="technical_skills">
                        <h3>Technical Skills</h3>
                        <div className="technical_skills_content">
                            <ul className="technical_skills_list">
                                <div id="technical_skill_one"><li><VerifiedIcon /> <h4>Web Development</h4></li></div>

                                <div id="technical_skill_two"><li><VerifiedIcon /> <h4>Object Oriented Programming</h4></li></div>
                                <div id="technical_skill_three"><li><VerifiedIcon /><h4> UX/UI Prototyping</h4></li></div>
                                <div id="technical_skill_four"><li><VerifiedIcon /><h4> Data Structures & Algorithms</h4></li></div>
                                <div id="technical_skill_five"><li><VerifiedIcon /><h4> Data Analysis</h4></li></div>
                            </ul>
                        </div>
                    </div>



                    <div id="programming_languages">
                        <h3>Programming Languages</h3>

                        <ul className="technical_skills_list">
                            <div id="technical_skill_one"><li><VerifiedIcon /> <h4>Python</h4></li></div>

                            <div id="technical_skill_two"><li><VerifiedIcon /> <h4>Java</h4></li></div>
                            <div id="technical_skill_three"><li><VerifiedIcon /><h4> C#</h4></li></div>
                            <div id="technical_skill_four"><li><VerifiedIcon /><h4> TypeScript</h4></li></div>
                            <div id="technical_skill_five"><li><VerifiedIcon /><h4> JavaScript</h4></li></div>
                        </ul>
                    </div>
                </div>
                <div id="service_card-2">
                <div id="web_database">
                    <h3>Web & Database</h3>
                    <div className="technical_skills_content">
                        <ul className="technical_skills_list">
                            <div id="technical_skill_one"><li><VerifiedIcon /> <h4>Node.js</h4></li></div>

                            <div id="technical_skill_two"><li><VerifiedIcon /> <h4>React</h4></li></div>
                            <div id="technical_skill_three"><li><VerifiedIcon /><h4> Express.js</h4></li></div>
                            <div id="technical_skill_four"><li><VerifiedIcon /><h4> Bootstrap</h4></li></div>
                            <div id="technical_skill_five"><li><VerifiedIcon /><h4> Rest API</h4></li></div>
                            <div id="technical_skill_six"><li><VerifiedIcon /><h4> SQL & NOSQL</h4></li></div>
                        </ul>
                    </div>
                </div>
                <div id="tools">
                    <h3>Tools</h3>
                    <div className="tools_content">
                        <ul className="tools_list">
                            <div id="tool_one"><li><VerifiedIcon /> <h4>Jira</h4></li></div>
                            <div id="tool_two"><li><VerifiedIcon /> <h4>Visual Studio 2022</h4></li></div>
                            <div id="tool_three"><li><VerifiedIcon /> <h4>Visual Studio Code</h4></li></div>
                            <div id="tool_four"><li><VerifiedIcon /> <h4>Power BI</h4></li></div>
                            <div id="tool_five"><li><VerifiedIcon /> <h4>Tableau</h4></li></div>
                            <div id="tool_six"><li><VerifiedIcon /> <h4>MS Office 365</h4></li></div>

                            
                        </ul>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}
export default Services;