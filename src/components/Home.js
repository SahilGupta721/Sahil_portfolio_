import '../index.css';
import logocolor from './images/logocolor.png';
import city from './videos/city.mp4';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
                        <li className="nav_home"><NavLink to='/'>Home</NavLink></li>
                        <li className="nav_home"><NavLink to='/Project'>Projects</NavLink></li>
                        <li className="nav_home"><NavLink to='/AboutMe'>About</NavLink></li>
                        <li className="nav_home"><NavLink to='/Contact-Me'>Contact</NavLink></li>
                        <li className="nav_home"><NavLink to='/Services'>Services</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div id="home_content">
                <section id="left_section">
                    Welcome to Sahil's Profile<br />
                    <ul id='left_section_para'>
                        <li className="quality-1">1x Hackathon Winner</li>
                        <li >IBM Z Ambassador at IBM</li>
                        <li >SWE intern at Headstarter</li>
                        <li > Volunteer Marketing Director at GDG Vancouver</li>
                        <li >Volunteer Interviewer at CodePath</li>
                        </ul>
                </section>
                <section id="right_section">
                    <p id="right_section_para">Globally focused software engineering student</p>
                </section>
            </div>
        </>
    );

}

export default Navigation;