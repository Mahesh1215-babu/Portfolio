import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-text">MB</span>
            <span className="logo-dot">.</span>
          </div>

          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('certifications')}>Certifications</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="btn btn-primary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
