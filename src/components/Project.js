import Navigation from "./Home";
import { NavLink } from 'react-router-dom';
import logocolor from './images/logocolor.png';

import city from "./videos/city.mp4";
import "./project.css";
function Projects() {
    return (
        <>
            <div id="container_project_video">
                <video src={city} autoPlay loop muted />
            </div>
            <div className='container_project'>
            <div>
                    <img src={logocolor} className='logo' alt="logo" style={{ width: 120 }} />
                </div>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/Project'>Projects</NavLink></li>
                        <li><NavLink to='/AboutMe'>About</NavLink></li>
                        <li><NavLink to='/Contact-Me'>Contact</NavLink></li>
                        <li><NavLink to='/Services'>Services</NavLink></li>
                    </ul>
                </nav>
            </div>
            <section className="section_project_content">
                <div id="project_cards">
                <a href="http://studentweb.cencol.ca/sgupt172/Assignment-3/assignment3.html" target="_blank" rel="noopener noreferrer">
                    <div id="project_one">Project 1</div>
                </a>
                <a href="http://studentweb.cencol.ca/sgupt172/ASSIGNMENT2/js05_txt.html" ><div id="project_two">Project2</div></a>

                <a href="http://studentweb.cencol.ca/sgupt172/Assignment-4/assignment4.html"><div id="project_three">Project3</div></a>
                <p id="project_content">
                Project:1=It is bascially bug smasher where user will cath bug<br/>
                Project:2=It is bascially a photo gallery slideshow application<br/>
                Project:1=It is project to demonstrate how to retrieve content from server
                </p>
                </div>
            </section>

        </>)

}

export default Projects;
