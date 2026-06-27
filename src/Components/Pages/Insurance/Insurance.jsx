import './Insurance.css';
import carInsurance from '../../../assets/Images/Ideal Auto INSURANCE.jpg';
import { useEffect, useRef } from 'react';

const insuranceTypes = [
    {
        icon: '🛡️',
        title: 'Third Party Insurance',
        desc: 'Legally required coverage that protects you against damage or injury caused to a third party.',
        tag: 'Basic',
    },
    {
        icon: '🚗',
        title: 'Comprehensive Insurance',
        desc: 'Complete protection for your car against accidents, theft, natural disasters and third-party damage.',
        tag: 'Recommended',
    },
    {
        icon: '⭐',
        title: 'Zero Depreciation',
        desc: 'Get full claim amount without any deduction for depreciation on car parts during repairs.',
        tag: 'Premium',
    },
    {
        icon: '🔧',
        title: 'Engine Protection',
        desc: 'Covers damage to your engine and gearbox due to water ingression or lubricant leakage.',
        tag: 'Add-on',
    },
    {
        icon: '🚨',
        title: 'Roadside Assistance',
        desc: '24/7 breakdown support, towing, emergency fuel and flat tyre assistance wherever you are.',
        tag: 'Add-on',
    },
    {
        icon: '📋',
        title: 'Return to Invoice',
        desc: 'In case of total loss or theft, get the full invoice value of your car — not just market value.',
        tag: 'Add-on',
    },
];

const whyInsure = [
    {
        icon: '💸',
        title: 'Financial Protection',
        desc: 'Avoid sudden heavy expenses from accidents, damages or theft with the right coverage.',
    },
    {
        icon: '⚖️',
        title: 'Legal Security',
        desc: 'Stay legally protected in case of third-party damage or injury on the road.',
    },
    {
        icon: '🛡️',
        title: 'Investment Protection',
        desc: 'For a pre-owned car, insurance protects your investment from unexpected uncertainties.',
    },
    {
        icon: '😌',
        title: 'Peace of Mind',
        desc: 'Drive every day without worry knowing you are fully covered against the unexpected.',
    },
];

const claimSteps = [
    {
        number: '01',
        title: 'Inform Us Immediately',
        desc: 'Call or message us right after an incident and we will guide you through the next steps.',
    },
    // {
    //     number: '02',
    //     title: 'Document the Damage',
    //     desc: 'Take clear photos of the damage and collect all relevant details at the spot.',
    // },
    // {
    //     number: '03',
    //     title: 'We File the Claim',
    //     desc: 'Our team handles all paperwork and coordinates directly with the insurance company for you.',
    // },
    // {
    //     number: '04',
    //     title: 'Get Your Car Fixed',
    //     desc: 'Your car gets repaired at a trusted garage and you drive back worry-free.',
    // },
];

const partners = ['HDFC Ergo', 'Bajaj Allianz', 'ICICI Lombard', 'New India', 'Tata AIG', 'Reliance General', 'Future Generali','IFFCO-TOKIO'];


const Insurance = () => {

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
        <div className="insurance_page" ref={formContainerRef}>

            {/* ── Hero Section ── */}
            <section className="ins_hero">
                <img src={carInsurance} alt="Car Insurance" className="ins_hero_img" />
                <div className="ins_hero_overlay">
                    <span className="ins_hero_badge">Car Insurance</span>
                    <h1>Buying the Car is Step One.<br />Protecting It is Step Two.</h1>
                    <p>Our job doesn't end with selling you the car — we want you to be safe after you drive it.</p>
                    <div className="ins_hero_pills">
                        <span>✅ Trusted Companies</span>
                        <span>✅ Easy Process</span>
                        <span>✅ Full Claim Support</span>
                    </div>
                </div>
            </section>

            {/* ── Why Insurance Section ── */}
            <section className="ins_why_section">
                <div className="ins_why_left">
                    <span className="section_tag">Why It Matters</span>
                    <h2>Insurance Is Not Just a Formality</h2>
                    <p>
                        Car insurance is your <strong>financial protection</strong> against the unexpected
                        on the road. From minor dents to major accidents, the right coverage saves you
                        from sudden heavy expenses.
                    </p>
                    <p>
                        It also keeps you <strong>legally secure</strong> in case of third-party damage,
                        so you can drive with confidence. For a pre-owned car, insurance becomes even
                        more important to handle uncertainties and protect your investment.
                    </p>
                    <div className="ins_highlight_quote">
                        <span className="quote_mark">"</span>
                        <p>It's not about spending more — it's about avoiding sudden losses.</p>
                    </div>
                </div>
                <div className="ins_why_right">
                    {whyInsure.map((item, index) => (
                        <div className="why_ins_card" key={index}>
                            <div className="why_ins_icon">{item.icon}</div>
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Insurance Types ── */}
            <section className="ins_types_section">
                <div className="section_header">
                    <span className="section_tag">What We Offer</span>
                    <h2>Insurance Options for Every Need & Budget</h2>
                    <p>
                        Whether you want basic coverage or complete protection, we guide you
                        with clear and honest advice.
                    </p>
                </div>
                <div className="ins_types_grid">
                    {insuranceTypes.map((type, index) => (
                        <div className="ins_type_card" key={index}>
                            <div className="ins_type_top">
                                <div className="ins_type_icon">{type.icon}</div>
                                <span className={`ins_type_tag tag_${type.tag.toLowerCase().replace(' ', '_')}`}>
                                    {type.tag}
                                </span>
                            </div>
                            <h3>{type.title}</h3>
                            <p>{type.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Our Process ── */}
            <section className="ins_process_section">
                <div className="section_header">
                    <span className="section_tag">Our Process</span>
                    <h2>Simple, Transparent & Honest</h2>
                    <p>
                        We offer multiple insurance options from trusted companies so you can
                        choose what suits your needs and budget.
                    </p>
                </div>
                <div className="ins_process_grid">
                    <div className="ins_process_left">
                        <div className="process_item">
                            <div className="process_dot"></div>
                            <div className="process_content">
                                <h4>Multiple Trusted Companies</h4>
                                <p>We work with India's top insurance providers to give you the best options at competitive prices.</p>
                            </div>
                        </div>
                        <div className="process_item">
                            <div className="process_dot"></div>
                            <div className="process_content">
                                <h4>Clear & Honest Advice</h4>
                                <p>No confusing terms. We explain every plan in simple language so you make the right decision.</p>
                            </div>
                        </div>
                        <div className="process_item">
                            <div className="process_dot"></div>
                            <div className="process_content">
                                <h4>Quick & Hassle-Free</h4>
                                <p>Get your car insured the same day — minimal paperwork, maximum convenience.</p>
                            </div>
                        </div>
                        <div className="process_item">
                            <div className="process_dot"></div>
                            <div className="process_content">
                                <h4>Renewal Reminders</h4>
                                <p>We keep track of your policy and remind you before it expires so you're never uncovered.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ins_process_right">
                        <div className="ins_quote_box">
                            <span className="big_quote">"</span>
                            <p>With the right insurance in place, you don't just own a car — you enjoy every drive without worry.</p>
                            <div className="ins_quote_line"></div>
                            <span className="ins_quote_author">— Ideal Auto World</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Claim Support ── */}
            <section className="ins_claim_section">
                <div className="section_header">
                    <span className="section_tag">Claim Support</span>
                    <h2>We'll Help You Through Every Step</h2>
                    <p>Claim process and support matter — and we'll be right there with you.</p>
                </div>
                <div className="ins_claim_grid">
                    {claimSteps.map((step, index) => (
                        <div className="claim_card" key={index}>
                            <span className="claim_number">{step.number}</span>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Trusted Partners ── */}
            <section className="ins_partners_section">
                <div className="section_header">
                    <span className="section_tag">Our Partners</span>
                    <h2>Insurance from India's Most Trusted Companies</h2>
                </div>
                <div className="ins_partners_grid">
                    {partners.map((partner, index) => (
                        <div className="partner_pill" key={index}>
                            🏢 {partner}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="ins_cta_section">
                <div className="ins_cta_inner">
                    <span className="section_tag">Get Protected Today</span>
                    <h2>A Good Deal Becomes a Great Deal When It's Protected.</h2>
                    <p>
                        Talk to our insurance experts today and get the best coverage
                        for your car at the right price.
                    </p>
                    <div className="ins_cta_buttons">
                        <button className="ins_cta_primary">📞 Talk to us</button>
                        {/* <button className="ins_cta_secondary">💬 WhatsApp Us</button> */}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Insurance;