import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, User, Menu } from "lucide-react";
import { destinations } from '../data/destinations';
import { products } from '../data/products';
import '../css/home.css'; // your separate CSS file
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  });

  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const featuredDestinations = destinations.filter(d => d.featured);
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  const toggleWishlist = (destinationId) => {
    setWishlist(prev =>
      prev.includes(destinationId)
        ? prev.filter(id => id !== destinationId)
        : [...prev, destinationId]
    );
  };

  return (
    <>
    
    <div className="landing-page">
        <Navbar/>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div
            className="hero-content"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1600")`
            }}
          >
            <div className="hero-text text-4xl">
              <h1>Discover the Soul of Your Destination</h1>
              <h2>Bring Home a Piece of Culture</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="destinations-section">
        <div className="section-container">
          <h2 className="section-title">Destinations to Inspire You</h2>
          <div className="destinations-scroll">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <Link to={`/discover?location=${destination.slug}`}>
                  <div
                    className="destination-image"
                    style={{ backgroundImage: `url("${destination.image}")` }}
                  />
                </Link>

                <button className="wishlist-btn">
                  <Heart
                    className={wishlist.includes(destination.id) ? 'active' : 'inactive'}
                  />
                </button>

                <div className="destination-info">
                  <p>{destination.name}</p>
                  <p>{destination.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Wishlist Display */}
          {wishlist.length > 0 && (
            <div className="wishlist-section">
              <h3>Your Wishlist</h3>
              <div className="wishlist-scroll">
                {wishlist.map(id => {
                  const item = featuredDestinations.find(d => d.id === id);
                  return (
                    <div key={id} className="wishlist-card">
                      <div
                        className="wishlist-image"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
              <button className="clear-wishlist-btn">Clear Wishlist</button>
            </div>
          )}
        </div>
      </section>
    </div>
    <Footer/>
    </>
    
  );
}

export default LandingPage;
