import './Footer.css';
import logo from '../../../assets/Images/ideal logo.jpg';
import instaLogo from '../../../assets/socialIcons/instagram.png';
import whatsAppLogo from '../../../assets/socialIcons/whatsapp.png';
import facebookLogo from '../../../assets/socialIcons/facebook.png';
import gmailLogo from '../../../assets/socialIcons/GmailLogo.png';

const Footer = () => {
    return (
        <footer className="footer_container">
            {/* Column 1 */}
            <div className="footer_column first_container">
                <div className="logo_company_name">
                    <img src={logo} alt="Ideal Auto World logo" />
                    <h2>IDEAL AUTO WORLD</h2>
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
                    <a href="#" aria-label="Gmail">
                        <img src={gmailLogo} alt="Gmail" className="gmail_logo" />
                    </a>
                </div>
            </div>

            {/* Column 2 */}
            <div className="footer_column menu_list_container">
                <h3>Quick Links</h3>
                <ul className="menu_container">
                    <li><a href="/">Home</a></li>
                    <li><a href="/used-cars">Used Cars</a></li>
                    <li><a href="/insurance">Insurance</a></li>
                    <li><a href="/finance">Finance</a></li>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                </ul>
            </div>

            {/* Column 3 */}
            <div className="footer_column">
                <h3>Legal</h3>
                <ul className="menu_container">
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms & Conditions</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;