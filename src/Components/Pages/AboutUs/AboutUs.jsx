import './AboutUs.css';
import logo from '../../../assets/Images/ideal logo.jpg';
import { useEffect, useRef } from 'react';
import aboutUsLogo from '../../../assets/Images/About us new copy.jpg'

const values = [
    {
        icon: '🤝',
        title: 'Trust',
        desc: 'Every deal we make is built on honesty and transparency. We believe trust is the foundation of a lasting relationship.',
    },
    {
        icon: '⭐',
        title: 'Quality',
        desc: 'Every vehicle in our collection is carefully inspected and verified to ensure it meets our high standards.',
    },
    {
        icon: '💡',
        title: 'Transparency',
        desc: 'No hidden charges, no confusing terms. We make sure you understand every detail before making a decision.',
    },
    {
        icon: '❤️',
        title: 'Customer First',
        desc: 'Your satisfaction is our priority. We go above and beyond to ensure every customer drives away happy.',
    },
    {
        icon: '🔄',
        title: 'Consistency',
        desc: 'From the first visit to after-sale support, we maintain the same level of service and dedication every time.',
    },
    {
        icon: '🚀',
        title: 'Innovation',
        desc: 'We continuously improve our process, services and options to give you a better car buying experience.',
    },
];

const milestones = [
    {
        year: '2009',
        title: 'Our Beginning',
        desc: 'Ideal Auto World was founded with a single showroom and a big dream — to make car buying honest and simple.',
    },
    {
        year: '2011',
        title: 'Finance Services Added',
        desc: 'We partnered with leading banks and NBFCs to offer easy car loan options to our growing customer base.',
    },
    {
        year: '2011',
        title: 'Insurance Division Launched',
        desc: 'We expanded our services to include complete insurance guidance, making us a one-stop car destination.',
    },
    {
        year: '2016',
        title: '300+ Happy Customers',
        desc: 'A proud milestone — over 500 families trusted us with their car buying journey across the region.',
    },
    {
        year: '2024',
        title: 'Digital Expansion',
        desc: 'We launched our digital presence to reach more customers and make the car buying process even more accessible.',
    },
    {
        year: '2025',
        title: 'Growing Stronger',
        desc: 'Today we continue to grow with 1000+ cars sold, 8+ finance partners and a team dedicated to excellence.',
    },
];

const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '300+', label: 'Cars Sold' },
    { number: '300+', label: 'Happy Customers' },
    { number: '8+', label: 'Finance Partners' },
];

const team = [
    {
        name: 'Rajesh Kumar',
        role: 'Founder & CEO',
        emoji: '👨‍💼',
        desc: 'With 20+ years in the automobile industry, Rajesh founded Ideal Auto World with a vision to make car buying honest, simple and stress-free for everyone.',
    },
    {
        name: 'Priya Sharma',
        role: 'Head of Finance',
        emoji: '👩‍💼',
        desc: 'Priya leads our finance division, working with top banks and NBFCs to secure the best loan deals for every customer regardless of their profile.',
    },
    {
        name: 'Arjun Mehta',
        role: 'Insurance Advisor',
        emoji: '👨‍💼',
        desc: 'Arjun ensures every car that leaves our showroom is properly protected, guiding customers through the best insurance options available.',
    },
    {
        name: 'Sneha Patel',
        role: 'Customer Relations',
        emoji: '👩‍💼',
        desc: 'Sneha is the heart of our customer service team, making sure every interaction with Ideal Auto World feels warm, helpful and trustworthy.',
    },
];

const AboutUs = () => {

    const formContainerRef = useRef(null);

    useEffect(() => {
        const el = formContainerRef?.current;

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

        requestAnimationFrame(() => setTimeout(doScroll, 50));
    }, []);

    return (
        <div className="aboutus_page" ref={formContainerRef}>

            {/* ── Hero Section ── */}
            <section className="about_hero">

                {/* Background Image — same pattern as UsedCars */}
                <img
                    src={aboutUsLogo}
                    alt="About Us"
                    className="about_hero_img"
                />

                {/* Overlay with content — same pattern as UsedCars */}
                <div className="about_hero_overlay">
                    <span className="about_hero_badge">About Us</span>
                    <h1>We Are More Than<br />Just a Car Dealership.</h1>
                    <p>
                        We are your trusted partner through every step of your
                        car buying journey — from choosing the right car to
                        finance, insurance and beyond.
                    </p>
                    <div className="about_hero_stats">
                        {stats.map((stat, index) => (
                            <div className="about_stat_item" key={index}>
                                <h3>{stat.number}</h3>
                                <span>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* ── Our Story Section ── */}
            <section className="about_story_section">
                <div className="about_story_inner">
                    <div className="about_story_left">
                        <div className="about_logo_wrap">
                            <img src={logo} alt="Ideal Auto World" />
                            <div className="about_logo_ring"></div>
                        </div>
                        <div className="about_story_card">
                            <span>🏆</span>
                            <div>
                                <h4>Est. 2009</h4>
                                <p>Trusted for over 17 years</p>
                            </div>
                        </div>
                        <div className="about_story_card">
                            <span>📍</span>
                            <div>
                                <h4>Local & Reliable</h4>
                                <p>Proudly serving our community</p>
                            </div>
                        </div>
                        <div className="about_story_card">
                            <span>🔒</span>
                            <div>
                                <h4>100% Transparent</h4>
                                <p>No hidden charges ever</p>
                            </div>
                        </div>
                    </div>
                    <div className="about_story_right">
                        <span className="section_tag">Our Story</span>
                        <h2>From a Small Showroom to a Trusted Name</h2>
                        <p>
                            Ideal Auto World was born in 2005 with a simple but powerful
                            belief — that every person deserves to own a quality car without
                            being misled or overcharged. Starting from a small showroom with
                            a handful of vehicles, we have grown into one of the most
                            trusted pre-owned car dealerships in the region.
                        </p>
                        <p>
                            Over the years, we expanded our services beyond just selling
                            cars. We added finance support, insurance guidance and complete
                            documentation assistance — becoming a true one-stop destination
                            for every car buyer. Our growth has always been driven by one
                            thing — the trust our customers place in us.
                        </p>
                        <p>
                            Today, with 1000+ cars sold and 500+ happy families, we continue
                            to work with the same passion and commitment we had on day one.
                            Every car we sell carries our promise of quality, transparency
                            and complete after-sale support.
                        </p>
                        <div className="about_story_quote">
                            <span className="quote_mark">"</span>
                            <p>We don't just sell cars — we build relationships that last long after the deal is done.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission & Vision ── */}
            <section className="about_mv_section">
                <div className="about_mv_grid">
                    <div className="about_mv_card mission_card">
                        <div className="mv_icon">🎯</div>
                        <h3>Our Mission</h3>
                        <p>
                            To provide every customer with a reliable, well-inspected
                            pre-owned vehicle at a fair price — backed by honest advice,
                            flexible finance and complete support from start to finish.
                        </p>
                        <ul className="mv_list">
                            <li><span>✦</span> Make car buying simple and stress-free</li>
                            <li><span>✦</span> Offer transparent pricing with no hidden costs</li>
                            <li><span>✦</span> Support customers beyond the sale</li>
                        </ul>
                    </div>
                    <div className="about_mv_card vision_card">
                        <div className="mv_icon">🔭</div>
                        <h3>Our Vision</h3>
                        <p>
                            To be the most trusted and customer-friendly pre-owned car
                            dealership — where every person walks in as a visitor and
                            walks out as a satisfied car owner with complete confidence.
                        </p>
                        <ul className="mv_list">
                            <li><span>✦</span> Set the standard for honest car dealerships</li>
                            <li><span>✦</span> Expand our reach to serve more communities</li>
                            <li><span>✦</span> Continuously improve the car buying experience</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── Our Values ── */}
            <section className="about_values_section">
                <div className="section_header">
                    <span className="section_tag">What We Stand For</span>
                    <h2>Our Core Values</h2>
                    <p>
                        These values are not just words on a wall — they guide every
                        decision we make and every interaction we have.
                    </p>
                </div>
                <div className="about_values_grid">
                    {values.map((value, index) => (
                        <div className="about_value_card" key={index}>
                            <div className="about_value_icon">{value.icon}</div>
                            <h4>{value.title}</h4>
                            <p>{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Milestones / Timeline ── */}
            <section className="about_timeline_section">
                <div className="section_header">
                    <span className="section_tag">Our Journey</span>
                    <h2>20 Years of Trust & Growth</h2>
                    <p>Every milestone is a reflection of the trust our customers have placed in us.</p>
                </div>
                <div className="about_timeline">
                    {milestones.map((item, index) => (
                        <div
                            className={`timeline_item ${index % 2 === 0 ? 'left' : 'right'}`}
                            key={index}
                        >
                            <div className="timeline_content">
                                <span className="timeline_year">{item.year}</span>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                            <div className="timeline_dot"></div>
                        </div>
                    ))}
                    <div className="timeline_line"></div>
                </div>
            </section>

            {/* ── Why Choose Us ── */}
            <section className="about_why_section">
                <div className="about_why_inner">
                    <div className="about_why_left">
                        <span className="section_tag">Why Choose Us</span>
                        <h2>What Makes Ideal Auto World Different</h2>
                        <p>
                            In a market full of options, we stand out because of our
                            commitment to honesty, quality and complete customer support.
                            We are not just trying to sell you a car — we are trying to
                            earn your trust for life.
                        </p>
                        <div className="about_why_list">
                            {[
                                'Every car thoroughly inspected before sale',
                                'Transparent pricing with no hidden charges',
                                'Finance support from 8+ trusted partners',
                                'Insurance guidance from top companies',
                                'Complete documentation handled by our team',
                                'After-sale support and renewal reminders',
                            ].map((point, index) => (
                                <div className="about_why_point" key={index}>
                                    <span className="why_tick">✓</span>
                                    <p>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about_why_right">
                        <div className="about_dark_box">
                            <div className="dark_box_top">
                                <h3>Our Promise to You</h3>
                                <div className="dark_box_line"></div>
                            </div>
                            <div className="promise_list">
                                {[
                                    { icon: '🚗', text: 'Quality pre-owned cars you can trust' },
                                    { icon: '💰', text: 'Best price without any compromise' },
                                    { icon: '📋', text: 'Complete paperwork handled for you' },
                                    { icon: '🛡️', text: 'Insurance and finance made easy' },
                                    { icon: '📞', text: 'Support available even after the sale' },
                                ].map((item, index) => (
                                    <div className="promise_item" key={index}>
                                        <span className="promise_icon">{item.icon}</span>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="dark_box_quote">
                                <p>"A good deal becomes a great experience when backed by trust."</p>
                                <span>— Ideal Auto World</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="about_cta_section">
                <div className="about_cta_inner">
                    <span className="section_tag">Come Visit Us</span>
                    <h2>Your Perfect Car is Waiting at Ideal Auto World.</h2>
                    <p>
                        Whether you are buying your first car or upgrading to something
                        better, we are here to make it the best experience of your life.
                    </p>
                    <div className="about_cta_buttons">
                        <button className="about_cta_secondary">📞 Contact Us</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;