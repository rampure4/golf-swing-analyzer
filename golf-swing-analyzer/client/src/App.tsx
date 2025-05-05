import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import ImageUploader from './components/imageUploader';
import VideoGallery from './VideoGallery';
import Login from './components/login';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        {isLoggedIn && <NavBar onLogout={() => setIsLoggedIn(false)} />}

        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/videos" /> : <Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/videos" element={isLoggedIn ? <VideoGallery /> : <Navigate to="/" />} />
          <Route path="/upload" element={isLoggedIn ? <ImageUploader /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
