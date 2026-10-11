import React, { useEffect, useRef } from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
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
        <div className="terms-wrapper" ref={formContainerRef}>
            <div className="terms-container">

                {/* Header */}
                <div className="terms-header">
                    <span className="terms-badge">Legal Document</span>
                    <h1 className="terms-title">Terms and Conditions</h1>
                    <p className="terms-subtitle">
                        IDEAL AUTO WORLD • Last Updated: September 2026
                    </p>
                </div>

                {/* Content */}
                <div className="terms-content">

                    {/* Section 1 */}
                    <section className="terms-section">
                        <h2 className="section-heading">
                            <span className="section-number">1</span>
                            Acceptance of Terms
                        </h2>
                        <div className="section-body">
                            <p>
                                By accessing <strong>idealautoworld.in</strong>, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website or services.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="terms-section">
                        <h2 className="section-heading">
                            <span className="section-number">2</span>
                            Our Services
                        </h2>
                        <div className="section-body">
                            <div className="info-grid-two">
                                <div className="info-card">
                                    <h3>a) Used Car Trading</h3>
                                    <p>Facilitation for the buying & selling of certified used cars.</p>
                                </div>
                                <div className="info-card">
                                    <h3>b) Car Insurance</h3>
                                    <p>Serving as an authorized agent/partner for insurance providers.</p>
                                </div>
                                <div className="info-card">
                                    <h3>c) Car Loan Assistance</h3>
                                    <p>Facilitating finance applications with partner banks and NBFCs.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="terms-section">
                        <h2 className="section-heading">
                            <span className="section-number">3</span>
                            Nature of Business
                        </h2>
                        <div className="section-body">
                            <p>
                                <strong>IDEAL AUTO WORLD</strong> directly purchases non-accidental used cars. After necessary servicing and minor repairs, we resell these vehicles at our own determined price. All vehicles are sold on an <strong>'As Is Where Is'</strong> basis after a thorough test drive and inspection by the buyer.
                            </p>

                            <div className="sub-section">
                                <h4 className="sub-heading">3.2 Token Amount</h4>
                                <div className="alert-box warning">
                                    <p>⚠️ The Token / Booking amount is strictly <strong>non-refundable</strong> if the buyer cancels due to a change of mind, loan rejection, or failure to pay the balance amount in time.</p>
                                </div>
                            </div>

                            <div className="sub-section">
                                <h4 className="sub-heading">3.3 RC Transfer</h4>
                                <p>
                                    The seller warrants that he/she is the lawful owner of the vehicle. The RC transfer process is typically completed within <strong>30–45 days</strong> as per RTO norms. Any delay caused by the RTO authorities is beyond our control and is not our responsibility.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="terms-section">
                        <h2 className="section-heading">
                            <span className="section-number">4</span>
                            Insurance Disclaimer
                        </h2>
                        <div className="section-body">
                            <div className="alert-box">
                                <p>ℹ️ We are NOT an insurance company.</p>
                            </div>
                            <p>
                                We only connect you with <strong>IRDAI-registered partners</strong>. All policy terms, coverage conditions, premiums, and claim procedures are governed solely by the respective Insurance Company. We do not guarantee claim settlement or policy approval.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="terms-section">
                        <h2 className="section-heading">
                            <span className="section-number">5</span>
                            Loan Disclaimer
                        </h2>
                        <div className="section-body">
                            <div className="alert-box">
                                <p>ℹ️ We are NOT a Bank or NBFC.</p>
                            </div>
                            <p>
                                We only facilitate loan applications on your behalf. Loan approval, interest rates, tenure, processing fees, and other terms are at the sole discretion of the lending institution. We do not guarantee loan approval under any circumstances.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="terms-section">
                        <h2 className="section-heading">
                            <span className="section-number">6</span>
                            Intellectual Property
                        </h2>
                        <div className="section-body">
                            <p>
                                All content on this website — including text, graphics, logos, images, and software — is the property of <strong>Ideal Auto World</strong> and is protected under copyright law.
                            </p>
                            <div className="copyright-box">
                                <p>© 2009–2026 Ideal Auto World. All Rights Reserved.</p>
                                <small>Some visuals may be AI-assisted and customized for Ideal Auto World.</small>
                            </div>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="terms-section">
                        <h2 className="section-heading">
                            <span className="section-number">7</span>
                            Limitation of Liability
                        </h2>
                        <div className="section-body">
                            <p>
                                We are not liable for any indirect, incidental, or consequential losses arising from the use of our services. Our total liability for any claim shall not exceed the service fee earned in that specific transaction.
                            </p>
                            <p>
                                We are not responsible for actions, delays, or decisions made by Banks, NBFCs, Insurance Companies, or RTO authorities.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="terms-section">
                        <h2 className="section-heading">
                            <span className="section-number">8</span>
                            Governing Law
                        </h2>
                        <div className="section-body">
                            <p>
                                These Terms and Conditions are governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising shall be subject to the exclusive jurisdiction of the courts at <strong>Palghar, Maharashtra</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Section 9 - Contact */}
                    <section className="terms-section contact-section">
                        <h2 className="section-heading">
                            <span className="section-number">9</span>
                            Contact Information
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

export default TermsConditions;