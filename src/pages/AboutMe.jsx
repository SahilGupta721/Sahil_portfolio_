import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar.jsx';

import '../css/AboutMe.css'
const about_video = "https://res.cloudinary.com/doype8ygx/video/upload/v1741754199/about_plu1tx.mp4";


function About() {
   
    
    return (
        <>
            {/* <Navigation/> */}

            <div id="About_content">
                <div id="video_drone">
                    {/* Added different video */}
                    <video src={about_video} autoPlay loop muted />
                </div>
                <div id="pop">
                <Navbar /> </div>
                <section id="section_about">
                <div id="about_circle"></div>
                <div id="about_line"> Software Developer!</div>
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