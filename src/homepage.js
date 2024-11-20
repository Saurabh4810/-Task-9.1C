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
    </div>

  <div className="homewrite">
         <h1><b>Welcome to my Website...!</b></h1>
  </div>
  );
}

export default Homepage;
