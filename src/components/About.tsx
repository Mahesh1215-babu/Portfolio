import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text glass-card">
                        <h3>Career Objective</h3>
                        <p>
                            Curious and eager to apply my skills and knowledge in a good work environment.
                            Looking for opportunities to improve my knowledge, face new challenges, and
                            continuously update myself while contributing to the growth of the organization.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-value">9.24</div>
                                <div className="stat-label">Current CGPA</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">15+</div>
                                <div className="stat-label">Certifications</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">8+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                        </div>
                    </div>

                    <div className="about-details">
                        <div className="detail-card glass-card">
                            <div className="detail-icon">👤</div>
                            <h4>Personal Info</h4>
                            <ul>
                                <li><strong>Date of Birth:</strong> 17 July 2004</li>
                                <li><strong>Nationality:</strong> Indian</li>
                                <li><strong>Languages:</strong> English, Hindi, Telugu</li>
                                <li><strong>Location:</strong> Hyderabad, India</li>
                            </ul>
                        </div>

                        <div className="detail-card glass-card">
                            <div className="detail-icon">⚡</div>
                            <h4>Personal Traits</h4>
                            <ul className="traits-list">
                                <li>Leadership Skills & Public Speaking</li>
                                <li>Communication Skills</li>
                                <li>Logical and Analytical Approach</li>
                                <li>Adaptability & Quick Learner</li>
                            </ul>
                        </div>

                        <div className="detail-card glass-card">
                            <div className="detail-icon">🎨</div>
                            <h4>Hobbies & Interests</h4>
                            <ul className="hobbies-list">
                                <li>🎨 Painting</li>
                                <li>📚 Reading Books</li>
                                <li>✈️ Travelling</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
