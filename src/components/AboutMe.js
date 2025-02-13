import { NavLink } from 'react-router-dom';
import logocolor from './images/logocolor.png';

import './AboutMe.css'
import drone2k from "./videos/drone2k.mp4";
import resume from "./Resume/resume.pdf"


function About() {
   
    
    return (
        <>
            {/* <Navigation/> */}

            <div id="About_content">
                <div id="video_drone">
                    {/* Added different video */}
                    <video src={drone2k} autoPlay loop muted />
                </div>
                
                <nav className='About_navbar'>
                    <ul>
                        <li className="nav" ><NavLink className="a_about" to='/'>Home</NavLink></li>
                        <li className="nav"><NavLink className="a_about" to='/Project'>Projects</NavLink></li>
                        <li className="nav"><NavLink className="a_about" to='/AboutMe'>About</NavLink></li>
                        <li className="nav"><NavLink className="a_about" to='/Contact-Me'>Contact</NavLink></li>
                        <li className="nav"><NavLink className="a_about" to='/Services'>Services</NavLink></li>
                        


                    </ul>
                </nav>
                <section id="section_about">
                <div id="about_circle"></div>
                <div id="about_line">Extroverted Software Developer!</div>
                <div id="about_content">
                <span id="about_span">Hi!</span>
                <p className='about_para'>
                I am Sahil Gupta currently working as a IBM Z Ambassador at IBM, Volunteer Interviewer at CodePath, and was a former SWE intern at Headstarter.<br/><br/>I am particularly interested in opportunities that allow me to leverage my technical expertise in software engineering and contribute to innovative projects. I am passionate to thrive in collaborative environments where I can work with diverse teams to create robust and scalable software solutions.
                </p>
            </div>
                </section>
            
            </div>
            
        </>
    );
}
export default About;