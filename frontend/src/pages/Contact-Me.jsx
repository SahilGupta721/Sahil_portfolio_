import {  useState } from 'react';
import Navbar from '../components/Navbar/navbar.jsx';
import "../css/Contact.css";

const contact_video = "https://res.cloudinary.com/doype8ygx/video/upload/v1741754199/about_plu1tx.mp4";

function Contact() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [description, setDes] = useState('');
    let [loading, setLoading]=useState('')

    let handleForm = (e) => {
        e.preventDefault();
         if(name.trim()==='' ||email.trim()==='' || description.trim()===''){
            alert('Please all the necessary details')
            return;}
        setLoading(true);
        fetch(`${import.meta.env.VITE_BACKEND_URL}/fill-form`, {
            
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, description})

            }).then((res) => res.json()).then((data) => {
                alert(`Response Sent`)
                setLoading(false);
                console.log(`Your name: ${name}, Your email: ${email}, Your description: ${description}`)
            }
            )
            
    }
    return (
        <>
            <div className="contact_drone_video">
                <video src={contact_video} autoPlay loop muted></video>
            </div>
            <div id="pop"><Navbar /></div>
            <div className="contact_content">

                <form>
                    <label htmlFor="name" className="contact_labels"> Your Name:</label>
                    <input id="name" size={60} minLength={2} maxLength={100} name="name" placeholder="Alex Cola" type="text" value={name} onChange={(e)=>{setName(e.target.value)
                    console.log(typeof(name))
                    }}/>

                    <label htmlFor="email" className="contact_labels"> Your Email:</label>
                    <input id="email" size={60} minLength={7} name="email" required maxLength={25} type="email" placeholder="alexcol90239@gmail.com" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                        console.log(typeof(email))
                    }}
                    />

                    <label htmlFor="description" className="contact_labels"> Description:</label>
                    <textarea rows={15} cols={80} id="description" name="description" value={description} onChange={(e)=>{
                        setDes(e.target.value)
                        console.log(typeof(description))
                    }} placeholder="Hi Sahil, hope your are doing well. I saw you porfolio and would like to know more about your expertise...."></textarea>

                    <div className="submit_div">
                        <button className="submit" size={5} type="submit" onClick={handleForm}  >{loading?'Submitting':'Submit'}</button>
                    </div>

                </form>
            </div>
        </>
    );

}


export default Contact;
