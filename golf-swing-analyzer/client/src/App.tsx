import React, { useState } from 'react';
import ImageUploader from './components/imageUploader';
import VideoList from './components/videoList';
import VideoGallery from './VideoGallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';

function App() {

  return (
    <Router>
      <div style={{ padding:'2rem'}}>
          <NavBar/>
         <Routes>
          <Route path="/" element={<VideoGallery />} />
          <Route path="/upload" element={<ImageUploader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
