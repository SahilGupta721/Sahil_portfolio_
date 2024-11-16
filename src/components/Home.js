import '../index.css';
import logocolor from './images/logocolor.png';
import city from './videos/city.mp4';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Navigation component
function Navigation() {

//DisplayContent is not working below
    // function DisplayContent() {
    //     // Typing effect for the left section
    //     let text = "I am SWE intern at Headstarter-,Volunteer Marketing Director at GDG Vancouver-, Volunteer Interviewer at CodePath";
    //     let newArray = text.split("-");
    //     let combinedText = newArray.join(' ');

    //     for (let i = 0; i < combinedText.length; i++) {
    //         setTimeout(() => {
    //             document.getElementById('left_section_para').innerHTML += combinedText[i];
    //         }, i * 100);
    //     }

    //     // Adding text to the right section
    //     let rightSectionSpan = document.createElement("span");
    //     let rightSectionPara = document.getElementById('right_section_para');
    //     rightSectionPara.appendChild(rightSectionSpan);
    //     rightSectionSpan.textContent = "Globally focused software engineering student";
    //     {/* Created right left section to have type effect and text */ }

    // }
    return (
        <>
            <div id="container_home_video">
                <video src={city} autoPlay loop muted />
            </div>
            <div className='container'>
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
            <div id="home_content">
                <section id="left_section">
                    Welcome to Sahil's Profile<br />
                    <p id='left_section_para'>I am SWE intern at Headstarter,Volunteer Marketing Director at GDG Vancouver, Volunteer Interviewer at CodePath</p>
                </section>
                <section id="right_section">
                    <p id="right_section_para">Globally focused software engineering student</p>
                </section>
            </div>
        </>)

}

export default Navigation;