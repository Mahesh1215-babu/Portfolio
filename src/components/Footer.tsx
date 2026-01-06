import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="logo-text">MB</span>
                            <span className="logo-dot">.</span>
                        </div>
                        <p>Building innovative web solutions with passion and dedication.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Connect</h4>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/chintala-mahesh-babu-5424a32b" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/balaga1234-babu" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:chintalamaheshbabu1005@gmail.com">
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Chintala Mahesh Babu. All rights reserved.</p>
                    <p>Made with ❤️ using React & TypeScript</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
