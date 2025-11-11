import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, User, Menu } from "lucide-react";
import { projects } from '../data/projects';
//import { products } from '../data/products-dub.js';
import '../css/home.css'; // your separate CSS file
import Navbar from '../components/navbar.jsx'

function Home() {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  });

  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const featuredprojects = projects.filter(d => d.featured);
  //const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  // const toggleWishlist = (destinationId) => {
  //   setWishlist(prev =>
  //     prev.includes(destinationId)
  //       ? prev.filter(id => id !== destinationId)
  //       : [...prev, destinationId]
  //   );
  // };

  return (
    <>
    
    <div className="home-page">
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

      {/* Featured projects Section */}
      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Selected Projects</h2>
          <div className="projects-scroll">
            {featuredprojects.map((projects) => (
              <div  className="project-card">
                <Link to={`/discover?location=${projects.slug}`}>
                  <div
                    className="project-image"
                    style={{ backgroundImage: `url("${projects.image}")` }}
                  />
                </Link>
              
                <div className="project-info">
                  <p>{projects.name}</p>
                  <p>{projects.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    
    </>
    
  );
}

export default Home;
