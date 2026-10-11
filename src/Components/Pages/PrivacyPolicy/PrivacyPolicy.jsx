import React, { useEffect, useRef } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
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
        <div className="privacy-wrapper">
            <div className="privacy-container">

                {/* Header */}
                <div className="privacy-header">
                    <span className="privacy-badge">Legal Document</span>
                    <h1 className="privacy-title">Privacy Policy</h1>
                    <p className="privacy-subtitle">
                        IDEAL AUTO WORLD • Last Updated: September 2026
                    </p>
                </div>

                {/* Content */}
                <div className="privacy-content">

                    {/* Section 1 */}
                    <section className="privacy-section">
                        <h2 className="section-heading">
                            <span className="section-number">1</span>
                            Introduction
                        </h2>
                        <div className="section-body">
                            <p>
                                At <strong>IDEAL AUTO WORLD</strong> ("we", "us", "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, visit our showroom, or use our services related to used cars, insurance, and vehicle finance facilitation.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="privacy-section">
                        <h2 className="section-heading">
                            <span className="section-number">2</span>
                            Information We Collect
                        </h2>
                        <div className="section-body">
                            <div className="info-grid">
                                <div className="info-card">
                                    <h3>2.1 Personal Information</h3>
                                    <ul>
                                        <li>Full name</li>
                                        <li>Phone number & Email</li>
                                        <li>ID Proof (PAN, Aadhaar - masked)</li>
                                        <li>Address proof</li>
                                        <li>Photograph for KYC</li>
                                    </ul>
                                </div>

                                <div className="info-card">
                                    <h3>2.2 Vehicle Information</h3>
                                    <ul>
                                        <li>Registration number</li>
                                        <li>Chassis & Engine number</li>
                                        <li>RC details & Insurance history</li>
                                        <li>Images & Inspection reports</li>
                                        <li>Loan NOC details</li>
                                    </ul>
                                </div>

                                <div className="info-card">
                                    <h3>2.3 Technical Information</h3>
                                    <ul>
                                        <li>IP address</li>
                                        <li>Browser type</li>
                                        <li>Cookies</li>
                                        <li>Enquiry logs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="privacy-section">
                        <h2 className="section-heading">
                            <span className="section-number">3</span>
                            How We Use Your Information
                        </h2>
                        <div className="section-body">
                            <ul className="styled-list">
                                <li>To facilitate the buying and selling of used cars.</li>
                                <li>To connect you with prospective buyers and sellers.</li>
                                <li>To process insurance policies through <strong>IRDAI-registered partners</strong>.</li>
                                <li>To forward vehicle loan applications to authorized <strong>Bank / NBFC partners</strong>.</li>
                                <li>To send promotional offers via Call, SMS, and WhatsApp in compliance with <strong>TRAI regulations</strong>.</li>
                                <li>To analyze and enhance our website performance using <strong>Google Analytics</strong>.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="privacy-section">
                        <h2 className="section-heading">
                            <span className="section-number">4</span>
                            Sharing of Information
                        </h2>
                        <div className="section-body">
                            <div className="alert-box">
                                <p>🛡️ We do NOT sell your personal data under any circumstances.</p>
                            </div>
                            <p>We share data strictly on a need-to-know basis with:</p>
                            <ul className="styled-list">
                                <li>Partner Banks & NBFCs for finance facilitation</li>
                                <li>Authorized Insurance Companies</li>
                                <li>Regional Transport Office (RTO) agents for transfer documentation</li>
                                <li>Google & Meta for targeted advertising services</li>
                                <li>Government & Legal authorities when mandated by law</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="privacy-section">
                        <h2 className="section-heading">
                            <span className="section-number">5</span>
                            Cookies
                        </h2>
                        <div className="section-body">
                            <p>
                                We use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. You can choose to disable cookies through your personal browser settings at any time.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="privacy-section">
                        <h2 className="section-heading">
                            <span className="section-number">6</span>
                            Data Security & Retention
                        </h2>
                        <div className="section-body">
                            <p>
                                We adhere to standard security measures compliant with the <strong>Information Technology (IT) Act, 2000</strong> to protect your data from unauthorized access.
                            </p>
                            <ul className="styled-list">
                                <li><strong>Enquiry Data:</strong> Retained for a maximum period of <strong>24 months</strong>.</li>
                                <li><strong>KYC Documents:</strong> Handled securely and are <strong>not stored permanently</strong> on our web servers.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="privacy-section">
                        <h2 className="section-heading">
                            <span className="section-number">7</span>
                            Your Rights
                        </h2>
                        <div className="section-body">
                            <p>
                                You have the right to access, correct, update, or request the deletion of your personal data stored with us. To exercise any of these rights, please email us directly at{' '}
                                <a href="mailto:info@idealautoworld.in" className="link">
                                    info@idealautoworld.in
                                </a>.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 - Contact */}
                    <section className="privacy-section contact-section">
                        <h2 className="section-heading">
                            <span className="section-number">8</span>
                            Contact Us
                        </h2>
                        <div className="section-body">
                            <div className="contact-card">
                                <h3>IDEAL AUTO WORLD</h3>
                                <div className="contact-grid">
                                    <div className="contact-item">
                                        <span className="contact-label">Email</span>
                                        <a href="mailto:info@idealautoworld.in" className="link">
                                            info@idealautoworld.in
                                        </a>
                                    </div>
                                    <div className="contact-item">
                                        <span className="contact-label">Phone</span>
                                        <a href="tel:9764199974" className="link">
                                            +91 9764199974
                                        </a>
                                    </div>
                                    <div className="contact-item">
                                        <span className="contact-label">Location</span>
                                        <span className="contact-value">
                                            Palghar, Maharashtra 401 404
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;