import './Footer.css';
// import logo from '../../../assets/Images/ideal logo.jpg';
import logo from '../../../assets/Images/ideal logo copy.png';
import instaLogo from '../../../assets/socialIcons/instagram.png';
import whatsAppLogo from '../../../assets/socialIcons/whatsapp.png';
import facebookLogo from '../../../assets/socialIcons/facebook.png';
import gmailLogo from '../../../assets/socialIcons/GmailLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer_container">
            {/* Column 1 */}
            <div className="footer_column first_container">
                <div className="logo_company_name">
                    <img src={logo} alt="Ideal Auto World logo" />
                    <div className="brand_text">
                        <h2>IDEAL AUTO WORLD</h2>
                        <span>Smart People Drive Pre-Owned</span>
                    </div>
                </div>

                <p>
                    Discover quality used cars, flexible finance options, and trusted
                    insurance services at Ideal Auto World. We make your car-buying
                    journey simple, reliable, and stress-free.
                </p>

                <div className="social_icons_container">
                    <a href={`https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=r5uml4c`} target='_blank' aria-label="Instagram">
                        <img src={instaLogo} alt="Instagram" />
                    </a>
                    <a href={`https://www.facebook.com/share/1B1377GLZN/`} target='_blank' aria-label="Facebook">
                        <img src={facebookLogo} alt="Facebook" />
                    </a>
                    <a href={`https://wa.me/message/Y2CLBUSFJUICD1`} target='_blank' aria-label="WhatsApp">
                        <img src={whatsAppLogo} alt="WhatsApp" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@idealautoworld.in&su=Enquiry%20for%20Ideal%20Auto%20World"
                        target="_blank"
                        rel="noreferrer" aria-label="Gmail">
                        <img src={gmailLogo} alt="Gmail" className="gmail_logo" />
                    </a>
                </div>
            </div>

            {/* Column 2 */}
            <div className="footer_column menu_list_container">
                <h3>Quick Links</h3>
                <ul className="menu_container">
                    {/* <li><a href="/">Home</a></li> */}
                    <li><Link to="/">Home</Link></li>
                    {/* <li><a href="/used-cars">Used Cars</a></li> */}
                    <li><Link to="/used-cars">Used Cars</Link></li>
                    <li><Link to="/insurance">Insurance</Link></li>
                    <li><Link to="/finance">Finance</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>

            {/* Column 3 */}
            <div className="footer_column">
                <h3>Legal</h3>
                <ul className="menu_container">
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms & Conditions</Link></li>
                </ul>
            </div>
            <div className="footer_copyright">
                <p>
                    © 2009–{new Date().getFullYear()} Ideal Auto World. All Rights Reserved.
                    Some visuals may be AI-assisted and customized for Ideal Auto World.

                </p>
            </div>
        </footer>
    );
};

export default Footer;