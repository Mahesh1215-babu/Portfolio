import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link with form data
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:chintalamaheshbabu1005@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card glass-card">
                            <div className="info-icon">📧</div>
                            <h3>Email</h3>
                            <a href="mailto:chintalamaheshbabu1005@gmail.com">
                                chintalamaheshbabu1005@gmail.com
                            </a>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">📱</div>
                            <h3>Phone</h3>
                            <a href="tel:+919959608446">+91 99596 08446</a>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">📍</div>
                            <h3>Location</h3>
                            <p>Hyderabad, India</p>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">🔗</div>
                            <h3>Connect</h3>
                            <div className="contact-links">
                                <a href="https://www.linkedin.com/in/chintala-mahesh-babu-5424a32b" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                                <a href="https://github.com/balaga1234-babu" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <h3>Send Me a Message</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Your message..."
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Send Message
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 2.5L8.75 11.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M17.5 2.5L12.5 17.5L8.75 11.25L2.5 7.5L17.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
