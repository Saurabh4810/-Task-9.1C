import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import './homepage.css';

function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially set to false
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user); // Update state based on user authentication status
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false); // Reset to false on sign-out
      navigate('/'); // Stay on homepage after signing out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <h1>DEV@DEAKIN</h1>
        </div>
        <div className="navbar-right">
          <button className="nav-button">Post</button>
          {isLoggedIn ? (
            <button onClick={handleSignOut} className="nav-button">Sign Out</button>
          ) : (
            <Link to="/login">
              <button className="nav-button">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Homepage;