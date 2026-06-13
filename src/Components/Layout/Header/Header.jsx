import './Header.css';
import logo from '../../../assets/Images/ideal logo.jpg';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: 'Home',       path: '/' },
        { name: 'Used Cars',  path: '/used-cars' },
        { name: 'Insurance',  path: '/insurance' },
        { name: 'Finance',    path: '/finance' },
        { name: 'About Us',   path: '/about-us' },
        { name: 'Contact Us', path: '/contact-us' },
    ];

    const handleNavigate = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    return (
        <header className="header_container">

            {/* Logo + Brand — clicking goes to Home */}
            <div
                className="logo_heading_div"
                onClick={() => handleNavigate('/')}
            >
                <img src={logo} className="header_logo" alt="Ideal Auto World Logo" />
                <div className="brand_text">
                    <h1>Ideal Auto World</h1>
                    <span>Your Trusted Car Partner</span>
                </div>
            </div>

            {/* Desktop Menu */}
            <nav className="menu_list">
                <ul>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={location.pathname === item.path ? 'active' : ''}
                            onClick={() => handleNavigate(item.path)}
                        >
                            {item.name}
                            <span className="underline_bar"></span>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hamburger */}
            <div
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile_menu ${menuOpen ? 'show' : ''}`}>
                <ul>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={location.pathname === item.path ? 'active' : ''}
                            onClick={() => handleNavigate(item.path)}
                        >
                            <span className="mobile_dot"></span>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>

        </header>
    );
};

export default Header;