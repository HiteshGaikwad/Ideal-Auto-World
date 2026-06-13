import './Finance.css';
import financeHero from '../../../assets/Images/ideal finance.jpg';
import { useEffect, useRef } from 'react';

const financeFeatures = [
    {
        icon: '📉',
        title: 'Low Interest Rates',
        desc: 'Get the most competitive interest rates in the market with our trusted finance partners.',
    },
    {
        icon: '💳',
        title: 'Low Down Payment',
        desc: 'Start with a minimal down payment and drive home your chosen car without financial stress.',
    },
    {
        icon: '📅',
        title: 'Flexible EMI Plans',
        desc: 'Choose from a wide range of EMI options that perfectly match your monthly budget.',
    },
    {
        icon: '⚡',
        title: 'Quick Approval',
        desc: 'Fast and simple process designed to get you approved without unnecessary delays.',
    },
    {
        icon: '🤝',
        title: 'Multiple Finance Partners',
        desc: 'We work with multiple banks and NBFCs to give you the best loan options available.',
    },
    {
        icon: '📋',
        title: 'Transparent Terms',
        desc: 'No hidden charges, no surprises. Everything is explained clearly before you sign.',
    },
];

const loanSteps = [
    {
        number: '01',
        title: 'Choose Your Car',
        desc: 'Pick the car you love from our wide collection of quality pre-owned vehicles.',
        icon: '🚗',
    },
    {
        number: '02',
        title: 'Submit Documents',
        desc: 'Provide basic documents — ID proof, income proof and address proof.',
        icon: '📄',
    },
    {
        number: '03',
        title: 'Loan Gets Approved',
        desc: 'Our finance team works quickly to get your loan approved at the best rate.',
        icon: '✅',
    },
    {
        number: '04',
        title: 'Drive Home Happy',
        desc: 'Complete the formalities and drive away in your new car the same day.',
        icon: '🏠',
    },
];

const emiPlans = [
    {
        tenure: '12 Months',
        label: 'Short Term',
        desc: 'Pay off quickly with higher EMIs and save on total interest.',
        color: 'plan_green',
    },
    {
        tenure: '24 Months',
        label: 'Balanced',
        desc: 'A perfect balance between EMI amount and loan duration.',
        color: 'plan_gold',
        popular: true,
    },
    {
        tenure: '36 Months',
        label: 'Comfortable',
        desc: 'Lower EMIs spread over a longer period for easy repayment.',
        color: 'plan_blue',
    },
    {
        tenure: '48 Months',
        label: 'Long Term',
        desc: 'Minimum EMI burden for maximum financial flexibility.',
        color: 'plan_purple',
    },
];

const partners = [
    'HDFC Bank', 'SBI', 'ICICI Bank',
    'Axis Bank', 'Bajaj Finance', 'Mahindra Finance',
    'Shriram Finance', 'Muthoot Capital',
];

const stats = [
    { number: '₹50Cr+', label: 'Loans Disbursed' },
    { number: '1000+', label: 'Cars Financed' },
    { number: '8+', label: 'Finance Partners' },
    { number: '98%', label: 'Approval Rate' },
];


const Finance = () => {

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
        <div className="finance_page" ref={formContainerRef}>

            {/* ── Hero Section ── */}
            <section className="fin_hero">
                <img src={financeHero} alt="Car Finance" className="fin_hero_img" />
                <div className="fin_hero_overlay">
                    <span className="fin_hero_badge">Car Finance</span>
                    <h1>Used Car Loans at the<br />Speed of Your Dreams.</h1>
                    <p>
                        Why compromise on quality when a used car loan can help you
                        afford a well-maintained car?
                    </p>
                    <div className="fin_hero_pills">
                        <span>✅ Low Interest Rates</span>
                        <span>✅ Flexible EMIs</span>
                        <span>✅ Quick Approval</span>
                        <span>✅ No Hidden Charges</span>
                    </div>
                </div>

                {/* Floating Stats Bar */}
                <div className="fin_stats_bar">
                    {stats.map((stat, index) => (
                        <div className="fin_stat_item" key={index}>
                            <h3>{stat.number}</h3>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Intro Section ── */}
            <section className="fin_intro_section">
                <div className="fin_intro_inner">
                    <div className="fin_intro_left">
                        <span className="section_tag">Why Finance?</span>
                        <h2>Bridge the Gap Between Your Need & Your Budget</h2>
                        <p>
                            Not everyone can pay the full amount upfront — a used car loan
                            fills the gap between your need and your budget. Buying a car
                            should feel easy, not heavy on your pocket.
                        </p>
                        <p>
                            That's why we offer car loans with <strong>low interest rates</strong> and
                            <strong> flexible plans</strong>. You can start with a low down payment
                            and still drive home your chosen car without financial stress.
                        </p>
                        <p>
                            We work with multiple finance partners to give you options that
                            fit <strong>your budget</strong>, not the other way around. The process
                            is simple, quick, and designed to get you approved without
                            unnecessary delays.
                        </p>
                        <div className="fin_intro_quote">
                            <span className="fin_quote_mark">"</span>
                            <p>With the right loan support, your pre-owned car becomes not
                                just affordable, but comfortably yours.</p>
                        </div>
                    </div>

                    <div className="fin_intro_right">
                        <div className="fin_highlight_box">
                            <div className="fin_highlight_top">
                                <span>🎯</span>
                                <h4>Our Goal</h4>
                            </div>
                            <p>
                                To make car ownership smooth from day one, with
                                transparent terms and no hidden surprises.
                            </p>
                            <div className="fin_highlight_divider"></div>
                            <ul className="fin_highlight_list">
                                <li>
                                    <span className="check">✦</span>
                                    Even if your profile is different, we try to find a
                                    solution that works for you.
                                </li>
                                <li>
                                    <span className="check">✦</span>
                                    Whether you prefer shorter tenure or smaller EMIs,
                                    we help you choose what suits your lifestyle best.
                                </li>
                                <li>
                                    <span className="check">✦</span>
                                    Transparent terms with no hidden surprises — ever.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Features Section ── */}
            <section className="fin_features_section">
                <div className="section_header">
                    <span className="section_tag">What We Offer</span>
                    <h2>Everything You Need in a Car Loan</h2>
                    <p>
                        Simple, quick, and designed to get you approved
                        with the best terms available.
                    </p>
                </div>
                <div className="fin_features_grid">
                    {financeFeatures.map((feature, index) => (
                        <div className="fin_feature_card" key={index}>
                            <div className="fin_feature_icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── EMI Plans ── */}
            <section className="fin_emi_section">
                <div className="section_header">
                    <span className="section_tag">Tenure Options</span>
                    <h2>Choose a Plan That Fits Your Lifestyle</h2>
                    <p>
                        Whether you prefer shorter tenure or smaller EMIs,
                        we have a plan designed just for you.
                    </p>
                </div>
                <div className="fin_emi_grid">
                    {emiPlans.map((plan, index) => (
                        <div
                            className={`fin_emi_card ${plan.color} ${plan.popular ? 'popular' : ''}`}
                            key={index}
                        >
                            {plan.popular && (
                                <span className="popular_badge">⭐ Most Popular</span>
                            )}
                            <div className="emi_tenure">{plan.tenure}</div>
                            <div className="emi_label">{plan.label}</div>
                            <p>{plan.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="fin_steps_section">
                <div className="section_header">
                    <span className="section_tag">How It Works</span>
                    <h2>4 Simple Steps to Drive Your Dream Car</h2>
                    <p>Fast, simple and designed to get you on the road quickly.</p>
                </div>
                <div className="fin_steps_grid">
                    {loanSteps.map((step, index) => (
                        <div className="fin_step_card" key={index}>
                            <div className="fin_step_icon_wrap">
                                <span className="fin_step_emoji">{step.icon}</span>
                                <span className="fin_step_number">{step.number}</span>
                            </div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                            {index < loanSteps.length - 1 && (
                                <div className="fin_step_arrow">→</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Finance Partners ── */}
            <section className="fin_partners_section">
                <div className="section_header">
                    <span className="section_tag">Finance Partners</span>
                    <h2>We Work With India's Top Banks & NBFCs</h2>
                    <p>Multiple partners mean more options and better rates for you.</p>
                </div>
                <div className="fin_partners_grid">
                    {partners.map((partner, index) => (
                        <div className="fin_partner_pill" key={index}>
                            🏦 {partner}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="fin_cta_section">
                <div className="fin_cta_inner">
                    <span className="section_tag">Get Started Today</span>
                    <h2>Your Dream Car is One Loan Away.</h2>
                    <p>
                        Talk to our finance experts and get the best loan deal
                        tailored to your needs and budget — quickly and transparently.
                    </p>
                    <div className="fin_cta_buttons">
                        <button className="fin_cta_primary">📞 Talk to Finance Expert</button>
                        {/* <button className="fin_cta_secondary">📊 Check Eligibility</button> */}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Finance;