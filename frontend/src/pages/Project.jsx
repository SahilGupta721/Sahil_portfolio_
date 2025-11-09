import { NavLink } from 'react-router-dom';
import about from "../components/videos/interview.mp4";
import city from "../components/videos/city.mp4";

import Navbar from '../components/Navbar/navbar.jsx';
import "../css/project.css";
import '../components/Navbar/navbar.css';  

function Projects() {
    return (
        <>
            <div id="container_project_video">
                <video src={city} autoPlay loop muted />
            </div>
            <Navbar />
            <div id="project_content">
                <section className="section_project_content">
                    <div id="project_cards">
                        <div id="project_five">
                            
                           
                            <div className="buttons_five">
                                <a href='https://www.eco-sphere.co/' target='_blank'><span id='live'>Live</span></a>
                                
                                <NavLink to='https://github.com/sarahhalime/EcoSphere' target='_blank'><span id='code'>Code</span></NavLink>
                            </div>
                        </div>
                        
                        <div id="project_one">
                            
                            <span className='project-name'>InterviewPrep</span>
                            <div className="buttons_one">
                                <a href='https://interviewprep-ddne.onrender.com/' target='_blank'><span id='live'>Live</span></a>
                                
                                <NavLink to='https://github.com/SahilGupta721/InterviewPrep' target='_blank'><span id='code'>Code</span></NavLink>
                            </div>
                        </div>
                        <div id="project_two">
                            
                            <span className='project-name'>VizWeather</span>
                            <div className="buttons_two">
                            <NavLink to='https://vizweather.vercel.app/' target='_blank'>  <span id='live_two'>Live</span></NavLink>
                                <NavLink to='https://github.com/SahilGupta721/VizWeather_frontend' target='_blank'>
                                <span id='code_two'>Code</span>
                                </NavLink>
                            </div>
                        </div>
                        <div id="project_three">
                        
                            <span className='project-name'>BugSmasher</span>
                            <div className="buttons_three">
                            <NavLink to='http://studentweb.cencol.ca/sgupt172/Assignment-3/assignment3.html' target='_blank'><span id='live_three'>Live</span>
                            </NavLink>
                            </div>
                        </div>
                        <div id="project_four">
                            
                            <span className='project-name'>GUI APP</span>
                            
                            <NavLink to='https://github.com/SahilGupta721/Gui-Calculator' target='_blank'><span id='code_four'>Code</span>
                            </NavLink>
                        </div>
                        
                        
                    </div>
                </section>
            </div>
        </>
    );
}

export default Projects;
