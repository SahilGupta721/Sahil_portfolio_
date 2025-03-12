import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (<>
        <div className='navbar_container'>

            <nav>
                <ul>
                    <li className="nav" ><NavLink to='/'>Home</NavLink></li>
                    <li className="nav"><NavLink to='/Project'>Projects</NavLink></li>
                    <li className="nav"><NavLink to='/AboutMe'>About</NavLink></li>
                    <li className="nav"><NavLink to='/Contact-Me'>Contact</NavLink></li>
                    <li className="nav"><NavLink to='/Services'>Services</NavLink></li>
                </ul>
            </nav>
        </div>
    </>)

}
export default Navbar;