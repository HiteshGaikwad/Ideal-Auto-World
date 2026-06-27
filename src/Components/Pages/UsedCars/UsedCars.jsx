import './UsedCars.css';
import usedCarHero from '../../../assets/Images/Used car.jpg';
import { useEffect, useRef } from 'react';

const carCategories = [
    {
        title: 'Hatchbacks',
        desc: 'Compact, fuel-efficient & perfect for city drives.',
        icon: '🚗',
    },
    {
        title: 'Sedans',
        desc: 'Elegant, comfortable & built for smooth journeys.',
        icon: '🚘',
    },
    {
        title: 'SUVs',
        desc: 'Spacious, powerful & ready for every adventure.',
        icon: '🚙',
    },
    // {
    //     title: 'Premium Cars',
    //     desc: 'Luxury, performance & style in every detail.',
    //     icon: '✨',
    // },
];

const whyChoose = [
    {
        icon: '🔍',
        title: 'Thoroughly Inspected',
        desc: 'Every vehicle undergoes a detailed multi-point inspection before it reaches you.',
    },
    {
        icon: '💰',
        title: 'Fair & Transparent Pricing',
        desc: 'No hidden charges. What you see is what you pay — honest and upfront.',
    },
    {
        icon: '📄',
        title: 'Complete Documentation',
        desc: 'All paperwork, ownership transfer & RC handled smoothly by our team.',
    },
    {
        icon: '🛡️',
        title: 'Insurance & Finance Support',
        desc: 'We help you with easy finance options and the best insurance plans.',
    },
    {
        icon: '🤝',
        title: 'Trusted by 300+ Customers',
        desc: 'Years of trust, quality service and happy customers across the region.',
    },
    {
        icon: '🔄',
        title: 'Exchange Available',
        desc: 'Want to upgrade? Exchange your old car and get the best value instantly.',
    },
];

const steps = [
    { number: '01', title: 'Choose Your Car', desc: 'Browse our wide collection and pick the one you love.' },
    { number: '02', title: 'Inspect & Test Drive', desc: 'Visit us, inspect the car and take it for a spin.' },
    { number: '03', title: 'Finance & Insurance', desc: 'We help you arrange easy finance and insurance.' },
    { number: '04', title: 'Drive Home Happy', desc: 'Complete the paperwork and drive away with confidence.' },
];

const UsedCars = () => {
    const formContainerRef = useRef(null);

    useEffect(() => {
        const el = formContainerRef?.current;

        // Find the nearest scrollable ancestor
        function findScrollableAncestor(node) {
            if (!node) return window;
            let parent = node;
            while (parent && parent !== document.body) {
                const style = window.getComputedStyle(parent);
                const overflowY = style.overflowY;
                const canScroll =
                    (overflowY === "auto" || overflowY === "scroll") &&
                    parent.scrollHeight > parent.clientHeight;
                if (canScroll) return parent;
                parent = parent.parentElement;
            }
            return window;
        }

        const scroller = findScrollableAncestor(el);

        const doScroll = () => {
            if (scroller === window) {
                window.scrollTo({ top: 0, behavior: "smooth" });
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            } else {
                scroller.scrollTo({ top: 0, behavior: "smooth" });
                scroller.scrollTop = 0;
            }
        };

        // delay slightly so DOM updates first
        requestAnimationFrame(() => setTimeout(doScroll, 50));
    }, []);

    return (
        <div className="usedcars_page" ref={formContainerRef}>

            {/* ── Hero Section ── */}
            <section className="uc_hero">
                <img src={usedCarHero} alt="Pre-owned cars" className="uc_hero_img" />
                <div className="uc_hero_overlay">
                    <span className="uc_hero_badge">Pre-Owned Cars</span>
                    <h1>Your Journey to the Perfect Car Starts with Trust.</h1>
                    <p>Quality you can trust, variety you can choose, and service you can depend on.</p>
                    <div className="uc_hero_stats">
                        <div className="stat_item">
                            <h3>300+</h3>
                            <span>Happy Customers</span>
                        </div>
                        <div className="stat_divider"></div>
                        <div className="stat_item">
                            <h3>300+</h3>
                            <span>Cars Sold</span>
                        </div>
                        <div className="stat_divider"></div>
                        <div className="stat_item">
                            <h3>17+</h3>
                            <span>Years of Trust</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission Section ── */}
            <section className="uc_mission">
                <div className="uc_mission_inner">
                    <div className="uc_mission_label">
                        <span className="section_tag">Our Mission</span>
                    </div>
                    <h2>Reliable Vehicles That Match Your Needs & Budget</h2>
                    <p>
                        At <strong>Ideal Auto World</strong>, every pre-owned vehicle is carefully selected,
                        thoroughly inspected, and ready to deliver comfort, performance, and peace of mind.
                        We proudly offer a wide range of pre-owned cars to suit every lifestyle.
                    </p>
                    <p>
                        From stylish <strong>hatchbacks</strong> to spacious <strong>SUVs</strong> and
                        premium <strong>sedans</strong>, we have the right car for every customer.
                    </p>
                    <div className="mission_quote">
                        <span className="quote_icon">"</span>
                        <p>Buying a car should feel exciting, not uncertain. That's why we focus on
                            transparency, fair pricing, and complete support — from choosing the right car
                            to finance, insurance, and documentation — so you can drive away with confidence.</p>
                    </div>
                </div>
            </section>

            {/* ── Car Categories ── */}
            <section className="uc_categories">
                <div className="section_header">
                    <span className="section_tag">Our Collection</span>
                    <h2>Find the Right Car for Every Lifestyle</h2>
                    <p>We understand that every journey is different, which is why we offer many types of
                        pre-owned cars under one roof.</p>
                </div>
                <div className="uc_categories_grid">
                    {carCategories.map((cat, index) => (
                        <div className="category_card" key={index}>
                            <div className="category_icon">{cat.icon}</div>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                            {/* <span className="category_link">View Cars →</span> */}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Why Choose Us ── */}
            <section className="uc_why">
                <div className="section_header">
                    <span className="section_tag">Why Ideal Auto World?</span>
                    <h2>What Makes Us Different</h2>
                    <p>We don't just sell cars — we build relationships on trust and quality.</p>
                </div>
                <div className="uc_why_grid">
                    {whyChoose.map((item, index) => (
                        <div className="why_card" key={index}>
                            <div className="why_icon">{item.icon}</div>
                            <div className="why_content">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="uc_steps">
                <div className="section_header">
                    <span className="section_tag">How It Works</span>
                    <h2>4 Simple Steps to Your Dream Car</h2>
                    <p>We make car buying simple, smooth, and stress-free.</p>
                </div>
                <div className="uc_steps_grid">
                    {steps.map((step, index) => (
                        <div className="step_card" key={index}>
                            <span className="step_number">{step.number}</span>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                            {index < steps.length - 1 && <div className="step_connector"></div>}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="uc_cta">
                <div className="uc_cta_inner">
                    <h2>Your Perfect Car is Waiting for You</h2>
                    <p>Visit <strong>Ideal Auto World</strong> today and find the car that fits your
                        lifestyle, needs, and budget perfectly.</p>
                    <div className="uc_cta_buttons">
                        <button className="cta_primary">📞 Call Us Now</button>
                        {/* <button className="cta_secondary">📍 Visit Showroom</button> */}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default UsedCars;