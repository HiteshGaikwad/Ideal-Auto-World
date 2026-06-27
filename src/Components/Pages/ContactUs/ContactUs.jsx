import './ContactUs.css';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import contactLogo from '../../../assets/Images/Contact us new copy.jpg'

const ContactUs = () => {
    const formRef = useRef();
    const formContainerRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
    });

    const [errors, setErrors] = useState({});

    const subjects = [
        'Used Cars Enquiry',
        'Car Insurance',
        'Car Finance / Loan',
        'Exchange / Trade-in',
        'Documentation Help',
        'General Enquiry',
    ];

    const contactInfo = [
        {
            icon: '📞',
            title: 'Call Us',
            lines: ['+91 97641 99974'],
            sub: 'Mon - Sat, 10:00 AM to 7:00 PM',
        },
        {
            icon: '✉️',
            title: 'Email Us',
            lines: ['idealautoworldinfo@gmail.com'],
            sub: 'We reply within 24 hours',
        },
        {
            icon: '📍',
            title: 'Visit Us',
            lines: ['123, Auto World Road,', 'Near City Mall, Mumbai - 400001'],
            sub: 'Open Monday to Saturday',
        },
        {
            icon: '🕐',
            title: 'Working Hours',
            lines: ['Mon - Sat: 10:00 AM – 7:00 PM'],
            sub: 'We are here to help you',
        },
    ];

    const faqs = [
        {
            q: 'How do I book a test drive?',
            a: 'Simply call us, WhatsApp us or fill the contact form and our team will schedule a test drive at your convenience.',
        },
        {
            q: 'Can I get a loan for a pre-owned car?',
            a: 'Yes! We work with 8+ banks and NBFCs to offer easy car loans with low interest rates and flexible EMI options.',
        },
        {
            q: 'Do you help with insurance for used cars?',
            a: 'Absolutely. We guide you through the best insurance plans from trusted companies to protect your investment.',
        },
        {
            q: 'How long does the documentation process take?',
            a: 'Our team handles all paperwork efficiently. Typically the entire process is completed within 2-3 working days.',
        },
    ];

    // ── Validation ──
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
        }
        if (!formData.subject) newErrors.subject = 'Please select a subject';
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 20) {
            newErrors.message = 'Message must be at least 20 characters';
        }
        return newErrors;
    };

    // ── Handle Input Change ──
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    // ── Handle Submit ──
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setStatus({ loading: true, success: false, error: false });

        try {
            await emailjs.sendForm(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                formRef.current,
                'YOUR_PUBLIC_KEY'
            );

            setStatus({ loading: false, success: true, error: false });
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });

            setTimeout(() => {
                setStatus({ loading: false, success: false, error: false });
            }, 5000);

        } catch (error) {
            setStatus({ loading: false, success: false, error: true });
            setTimeout(() => {
                setStatus({ loading: false, success: false, error: false });
            }, 5000);
        }
    };

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
        <div className="contactus_page" ref={formContainerRef}>

            {/* ── Hero Section ── */}
            <section className="contact_hero">

                {/* Background Image — same pattern as UsedCars */}
                <img
                    src={contactLogo}
                    alt="Contact Us"
                    className="contact_hero_img"
                />

                {/* Overlay with content — same pattern as UsedCars */}
                <div className="contact_hero_overlay">
                    <span className="contact_hero_badge">Contact Us</span>
                    <h1>We Are Here to<br />Help You.</h1>
                    <p>
                        Have a question about a car, loan, insurance or anything else?
                        Reach out to us and our team will get back to you quickly.
                    </p>
                    <div className="contact_hero_pills">
                        <span>📞 Quick Response</span>
                        <span>✉️ Email Support</span>
                        <span>💬 WhatsApp Available</span>
                    </div>
                </div>

            </section>

            {/* ── Contact Info Cards ── */}
            <section className="contact_info_section">
                <div className="contact_info_grid">
                    {contactInfo.map((item, index) => (
                        <div className="contact_info_card" key={index}>
                            <div className="contact_info_icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            {item.lines.map((line, i) => (
                                <p key={i} className="info_line">{line}</p>
                            ))}
                            <span className="info_sub">{item.sub}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Main Contact Section ── */}
            <section className="contact_main_section">
                <div className="contact_main_inner">

                    {/* Left — Form */}
                    <div className="contact_form_side">
                        <div className="contact_form_header">
                            <span className="section_tag">Send a Message</span>
                            <h2>Tell Us How We Can Help</h2>
                            <p>Fill the form below and our team will get back to you within 24 hours.</p>
                        </div>

                        {/* Success Message */}
                        {status.success && (
                            <div className="form_alert success_alert">
                                <span>✅</span>
                                <div>
                                    <h4>Message Sent Successfully!</h4>
                                    <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                                </div>
                            </div>
                        )}

                        {/* Error Message */}
                        {status.error && (
                            <div className="form_alert error_alert">
                                <span>❌</span>
                                <div>
                                    <h4>Something went wrong!</h4>
                                    <p>Please try again or contact us directly via phone or WhatsApp.</p>
                                </div>
                            </div>
                        )}

                        <form
                            ref={formRef}
                            className="contact_form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            {/* Name + Phone */}
                            <div className="form_row">
                                <div className="form_group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'input_error' : ''}
                                    />
                                    {errors.name && (
                                        <span className="error_text">⚠ {errors.name}</span>
                                    )}
                                </div>
                                <div className="form_group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter 10-digit number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={errors.phone ? 'input_error' : ''}
                                        maxLength={10}
                                    />
                                    {errors.phone && (
                                        <span className="error_text">⚠ {errors.phone}</span>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="form_group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'input_error' : ''}
                                />
                                {errors.email && (
                                    <span className="error_text">⚠ {errors.email}</span>
                                )}
                            </div>

                            {/* Subject */}
                            <div className="form_group">
                                <label htmlFor="subject">Subject *</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={errors.subject ? 'input_error' : ''}
                                >
                                    <option value="">Select a subject</option>
                                    {subjects.map((sub, i) => (
                                        <option key={i} value={sub}>{sub}</option>
                                    ))}
                                </select>
                                {errors.subject && (
                                    <span className="error_text">⚠ {errors.subject}</span>
                                )}
                            </div>

                            {/* Message */}
                            <div className="form_group">
                                <label htmlFor="message">Your Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Describe your query in detail..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? 'input_error' : ''}
                                ></textarea>
                                <div className="char_count">
                                    {formData.message.length} characters
                                </div>
                                {errors.message && (
                                    <span className="error_text">⚠ {errors.message}</span>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="contact_submit_btn"
                                disabled={status.loading}
                            >
                                {status.loading ? (
                                    <>
                                        <span className="btn_spinner"></span>
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        📨 Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right — Info */}
                    <div className="contact_info_side">

                        {/* WhatsApp Card */}
                        <div className="whatsapp_card">
                            <div className="whatsapp_top">
                                <span className="whatsapp_icon">💬</span>
                                <div>
                                    <h4>Chat on WhatsApp</h4>
                                    <p>Get instant replies from our team</p>
                                </div>
                            </div>
                            <p className="whatsapp_desc">
                                Prefer a quick chat? Message us on WhatsApp and get
                                answers to all your queries instantly.
                            </p>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noreferrer"
                                className="whatsapp_btn"
                            >
                                💬 Open WhatsApp Chat
                            </a>
                        </div>

                        {/* Map Card */}
                        <div className="map_card">
                            <div className="map_header">
                                <span>📍</span>
                                <div>
                                    <h4>Find Us on the Map</h4>
                                    <p>123, Auto World Road, Mumbai</p>
                                </div>
                            </div>
                            <div className="map_embed">
                                <iframe
                                    title="Ideal Auto World Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.910!2d72.877!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzcuMiJF!5e0!3m2!1sen!2sin!4v1"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noreferrer"
                                className="directions_btn"
                            >
                                🗺️ Get Directions
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="social_contact_card">
                            <h4>Follow & Connect</h4>
                            <div className="social_contact_grid">
                                <a href="#" className="social_contact_item instagram">
                                    <span>📸</span>
                                    <p>Instagram</p>
                                </a>
                                <a href="#" className="social_contact_item facebook">
                                    <span>👍</span>
                                    <p>Facebook</p>
                                </a>
                                <a href="#" className="social_contact_item whatsapp">
                                    <span>💬</span>
                                    <p>WhatsApp</p>
                                </a>
                                <a
                                    href="mailto:info@idealautoworld.com"
                                    className="social_contact_item gmail"
                                >
                                    <span>✉️</span>
                                    <p>Gmail</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ Section ── */}
            <section className="contact_faq_section">
                <div className="section_header">
                    <span className="section_tag">FAQ</span>
                    <h2>Frequently Asked Questions</h2>
                    <p>Quick answers to the most common questions we receive.</p>
                </div>
                <div className="contact_faq_grid">
                    {faqs.map((faq, index) => (
                        <div className="faq_card" key={index}>
                            <div className="faq_q">
                                <span className="faq_icon">❓</span>
                                <h4>{faq.q}</h4>
                            </div>
                            <p>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="contact_cta_section">
                <div className="contact_cta_inner">
                    <span className="section_tag">Still Have Questions?</span>
                    <h2>Don't Wait — Reach Out to Us Today.</h2>
                    <p>
                        Our team is ready to help you find the perfect car,
                        loan plan or insurance option. We are just one call away.
                    </p>
                    <div className="contact_cta_buttons">
                        <a href="tel:+919876543210" className="contact_cta_primary">
                            📞 Call Us Now
                        </a>
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noreferrer"
                            className="contact_cta_secondary"
                        >
                            💬 WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;