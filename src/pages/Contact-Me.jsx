
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar.jsx';
import "../css/Contact.css";

const contact_video = "https://res.cloudinary.com/doype8ygx/video/upload/v1741754199/about_plu1tx.mp4";

function Contact() {
    return (
        <>
            <div className="contact_drone_video">
                <video src={contact_video} autoPlay loop muted></video>
            </div>
            <div id="pop">
                <Navbar /> </div>
            <div className="contact_content">
               
            <form>
                <label for="name" className="contact_labels"> Your Name:</label>
                <input required id="name" size={60} minLength={2} maxLength={100} name="name" placeholder="Alex Cola" type="text" />
                <label for="email" className="contact_labels"> Your Email:</label>
                <input id="email" size={60} minLength={7} name="email" required maxLength={25} type="email" placeholder="alexcol90239@gmail.com" />
                <label for="description" className="contact_labels"> Description:</label>
                <textarea rows={15} required cols={80} id="description" name="description" placeholder="Hi Sahil, hope your are doing well. I saw you porfolio and would like to know more about your expertise...."></textarea>
                <div className="submit_div">
                   <NavLink to='/'> 
                   <input className="submit" size={5} name="reset" type="submit" value="Submit" />
                   </NavLink>
                    
                </div>

            </form>
            </div> 
        </> 
    );
}
export default Contact;
