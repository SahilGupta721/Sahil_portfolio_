
import logocolor from './images/logocolor.png';
import city from './videos/city.mp4';
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
            <section className="section_service_content">
                <div id="service_cards">
                    <div id="service_one">I am proficient in MERN Stack, leveraging my expertise in front-end programming</div>
                
                <div id="service_two">I am experienced with using problem solving approaches using OOPs in Java, Python and C#</div>

                <div id="service_three">comming soon</div>

                </div>
            </section>
        </>
    );
}
export default Services;