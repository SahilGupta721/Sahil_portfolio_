import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
  const navLinks = [
    { path: '#projects', label: 'Projects' },
    { path: '#about', label: 'About' },
    { path: '/support', label: 'Contact' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Rounded translucent bar */}
        <div className="navbar-inner">
          
          {/* Logo */}
          <Link className="navbar-logo" to="/">
            <svg className="logo-icon" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M24 4H42V30.6667H24V44H6V17.3333H24V4Z"></path>
            </svg>
            <span className="logo-text">Sahil Gupta</span>
          </Link>

          {/* Center navigation links */}
          <nav className="navbar-links">
  <div className="links-inner">
    {navLinks.map((link) => (
      <a key={link.path} className="nav-link" href={link.path}>
        {link.label}
      </a>
    ))}
  </div>
</nav>

          {/* Right auth buttons (uncomment to enable) */}
          {/*
          <div className="navbar-auth">
            <Link className="btn-signin" to="/login">Sign In</Link>
            <Link className="btn-signup" to="/signup">Sign Up</Link>
          </div>
          */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
