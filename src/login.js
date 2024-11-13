import React, { useState } from 'react';
import { auth, db } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './shared.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        navigate('/'); // Redirect to homepage after login
      } else {
        setError('User not found. Please sign up.');
      }
    } catch (err) {
      setError('Incorrect email or password.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <button onClick={() => navigate('/signup')} className="right-top1">Sign Up</button>
      <button onClick={() => navigate('/')} className="right-top2">Home</button> {/* Redirects to homepage */}
    </div>
  );
}

export default Login;