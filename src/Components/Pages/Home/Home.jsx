import posterLogo from '../../../assets/Images/Ideal Auto contact us.jpg';
import './Home.css';
import usedCars from '../../../assets/Images/Used car.jpg';
import carInsurance from '../../../assets/Images/Ideal Auto INSURANCE.jpg';
import financeCars from '../../../assets/Images/ideal finance.jpg';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const formContainerRef = useRef(null);
    const navigate = useNavigate();

    // Cards data with routes
    const cards = [
        {
            image: usedCars,
            alt: 'used cars image',
            label: 'Used Cars',
            route: '/used-cars',
        },
        {
            image: carInsurance,
            alt: 'car insurance image',
            label: 'Car Insurance',
            route: '/insurance',
        },
        {
            image: financeCars,
            alt: 'finance image',
            label: 'Finance',
            route: '/finance',
        },
    ];

    useEffect(() => {
        const el = formContainerRef?.current;

        function findScrollableAncestor(node) {
            if (!node) return window;
            let parent = node;
            while (parent && parent !== document.body) {
                const style = window.getComputedStyle(parent);
                const overflowY = style.overflowY;
                const canScroll =
                    (overflowY === 'auto' || overflowY === 'scroll') &&
                    parent.scrollHeight > parent.clientHeight;
                if (canScroll) return parent;
                parent = parent.parentElement;
            }
            return window;
        }

        const scroller = findScrollableAncestor(el);

        const doScroll = () => {
            if (scroller === window) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            } else {
                scroller.scrollTo({ top: 0, behavior: 'smooth' });
                scroller.scrollTop = 0;
            }
        };

        requestAnimationFrame(() => setTimeout(doScroll, 50));
    }, []);

    return (
        <div className="home_container" ref={formContainerRef}>

            {/* Hero Banner */}
            <div className="hero_wrapper">
                <img src={posterLogo} alt="banner" className="hero_image" />
                <div className="hero_overlay">
                    <h2>Drive Your Dream</h2>
                    <p>Premium Used Cars · Insurance · Finance — All in One Place</p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="banner_container">
                {cards.map((card, index) => (
                    <div
                        className="banner_section"
                        key={index}
                        onClick={() => navigate(card.route)}
                    >
                        <div className="card_img_wrapper">
                            <img src={card.image} alt={card.alt} />
                            <div className="card_overlay">
                                <span>Explore →</span>
                            </div>
                        </div>
                        <p>{card.label}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;