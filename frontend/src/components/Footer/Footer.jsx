import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <div className="footer-logo">
            <img src={assets.transparentLogo} alt="Logo" />
          </div>
          <p className="footer-description">
            Re-imagining Africa and beyond through innovation, creativity, and transformative solutions.
          </p>
          <div className="social-links">
            <a href="https://nutripulse.softnetkenya.com" aria-label="NutrPulse">
            <img src={assets.nutripulse} alt="Nutripulse" className="nutripulse-logo" />
            </a>
            <a href="https://mailings.netoracloud.com" aria-label="MannaMails">
            <img src={assets.mannaMails} alt="NetoraCloud" className="netoracloud-logo" />
            </a>
            <a href="https://netoracloud.com" aria-label="NetoraCloud">
                <img src={assets.netoracloud} alt="netoracloud" />
            </a>
            <a href="https://photon.softnetkenya.com" aria-label="Photon">
            <img src={assets.photon} alt="Photon" className="photon-logo" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section links">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><Mail size={18} /> support@netoracloud.com</p>
          <p><Phone size={18} /> +254 7382 08799</p>
          <p><MapPin size={18} /> Nairobi, Kenya</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The SoftNet Umbrella. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
