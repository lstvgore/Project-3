import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';




function Navbar () {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };
    window.addEventListener('resize', showButton);
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    GroovIn<i className='Logo'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-record-vinyl' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to= '/Login' className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                        <Link to='/Register' className='nav-links' onClick={closeMobileMenu}>
                            Register
                        </Link>
                    </li>
                </ul>
           </div>
        </nav>
        </>
        )
}
export default Navbar