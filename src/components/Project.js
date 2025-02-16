import { NavLink } from 'react-router-dom';
import about from "./videos/interview.mp4";
import city from "./videos/city.mp4";
import "./project.css";
function Projects() {
    return (
        <>
            <div id="container_project_video">
                <video src={city} autoPlay loop muted />
            </div>
            <div className='container_project'>

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
            <section className="section_project_content">
                <div id="project_cards">

                    <a href="https://interviewprep-ddne.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <div id="project_one">
                            <span>InterviewPrep</span>
                            <div id="links">

                                <a href="https://github.com/SahilGupta721/InterviewPrep" ><span class="github">Github</span></a>
                                <a href="https://interviewprep-ddne.onrender.com/"><span class="github">Live view</span></a>

                            </div>

                            <video src={about} autoPlay loop muted />
                        </div>
                    </a>
                    <a href="http://studentweb.cencol.ca/sgupt172/Assignment-3/assignment3.html" target='_blank'><div id="project_two">Bug Smasher</div></a>

                    <a href="https://github.com/SahilGupta721/Gui-Calculator" target='_blank'><div id="project_three">GUI Application</div></a>
                    {/* <p id="project_content">
                Project:1=It is bascially bug smasher where user will cath bug<br/>
                Project:2=It is bascially a photo gallery slideshow application<br/>
                Project:1=It is project to demonstrate how to retrieve content from server
                </p> */}
                </div>
            </section>

        </>)

}

export default Projects;
