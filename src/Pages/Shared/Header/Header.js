import { Link } from 'react-router-dom';
import logo from '../../../Resources/Assets/logo.png';
import './Header.css';
const Header = () => {
    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/services'>Services</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
    <li><Link to='/my-review'>My Review</Link></li>
    <li><Link to='/contact-us'>Contact</Link></li>
    <li><Link to='/log-in'>LogIn</Link></li>

    </>
    return (
        <div className="navbar header-bg px-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} className="h-12" alt="Header Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/appointment' className="btn text-lg headerBtn-color">Appointment</Link>
            </div>
        </div>
    );
};

export default Header;