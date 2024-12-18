import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import './homepage.css';

function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user); // Update login state
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1>DEV@DEAKIN</h1>
        </div>
        <div className="navbar-right">
          <Link to="/post">
            <button className="nav-button">Post</button>
          </Link>
          {isLoggedIn ? (
            <button onClick={handleSignOut} className="nav-button">Sign Out</button>
          ) : (
            <Link to="/login">
              <button className="nav-button">Login</button>
            </Link>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to DEV@DEAKIN</h2>
        <p>Your go-to platform for developers to collaborate, share, and grow.</p>
        <Link to="/about">
          <button className="hero-button">Learn More</button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>Collaborate</h3>
          <p>Work with like-minded developers and create amazing projects together.</p>
        </div>
        <div className="feature-card">
          <h3>Share Knowledge</h3>
          <p>Post blogs, tutorials, and guides to help the community grow.</p>
        </div>
        <div className="feature-card">
          <h3>Stay Updated</h3>
          <p>Explore the latest trends and technologies in the developer world.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 DEV@DEAKIN | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Homepage;
