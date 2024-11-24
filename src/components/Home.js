import '../index.css';
import logocolor from './images/logocolor.png';
import city from './videos/city.mp4';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
//importing icons
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// Navigation component
function Navigation() {


    return (
        <>
            <div id="container_home_video">
                <video src={city} autoPlay loop muted />
            </div>
            <div className='container'>

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
            <div id="home_content">
                <section id="left_section">
                    Welcome to Sahil's Profile<br />
                    <ul id='left_section_para'>
                        <li className="quality-1">1x Hackathon Winner<span><NavLink to='https://www.linkedin.com/feed/update/urn:li:activity:7264373328046342144/' target='_blank'><OpenInNewIcon/></NavLink></span></li>
                        <li >IBM Z Ambassador at IBM<span><NavLink target='_blank' to='https://www.linkedin.com/in/sahilgupta123/overlay/1729971598801/single-media-viewer/?profileId=ACoAAEnupYoBpfQmUZ7IdrHvmLjFRCkTN76p1Nw' ><OpenInNewIcon/></NavLink></span></li>
                        <li >SWE intern at Headstarter<span><NavLink target='_blank' to='https://www.linkedin.com/posts/sahilgupta123_so-i-have-some-news-to-share-today-i-am-activity-7221220943468146688-wZVG?utm_source=share&utm_medium=member_desktop'><OpenInNewIcon/></NavLink></span></li>
                        <li > Volunteer Marketing Director at GDG Vancouver<span><NavLink target='_blank' to='https://www.linkedin.com/posts/sahilgupta123_im-happy-to-share-that-ive-been-involved-activity-7228939792208605185-c0dl?utm_source=share&utm_medium=member_desktop'><OpenInNewIcon/></NavLink></span></li>
                        <li >Volunteer Interviewer at CodePath<span><NavLink target='_blank' to='https://www.linkedin.com/in/sahilgupta123/overlay/1729971752815/single-media-viewer/?profileId=ACoAAEnupYoBpfQmUZ7IdrHvmLjFRCkTN76p1Nw'><OpenInNewIcon/></NavLink></span></li>
                        </ul>
                        <div className='icons'>
                        <div >
                            <NavLink id='linkedin' to='https://www.linkedin.com/in/sahil-gupta-7224962a7/'><LinkedInIcon  /></NavLink>
                        
                        </div>
                        <div >
                            <NavLink id='github' to="https://github.com/SahilGupta721"><GitHubIcon  /></NavLink>
                        
                        </div>
                        <div >
                            <NavLink id='Email' to="mailto:sahilgupta@70500gmail.com">
                        <EmailIcon />
                        </NavLink>
                        </div>
                        </div>
                </section>
                <section id="right_section">
                    <p id="right_section_para">Globally focused software engineering student</p>
                </section>
            </div>
        </>
    );

}

export default Navigation;