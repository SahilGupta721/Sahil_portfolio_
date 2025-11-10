import { Link } from 'react-router-dom';
import '../css/footer.css'; // make sure to import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-inner">
          {/* Logo */}
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="footer-logo-text">SophoTravel</h2>
          </Link>

          {/* Footer Links */}
          <div className="footer-links-section">
            <p className="footer-copy">&copy; {new Date().getFullYear()} SophoTravel. All Rights Reserved.</p>
            <div className="footer-links">
              <Link to="/terms" className="footer-link">Terms of Service</Link>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
