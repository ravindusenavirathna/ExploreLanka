import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import UploadImage from './pages/UploadImage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExploreForm from './components/ExploreForm';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';



function App() {
  return (
    <Router>
      <div>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload-image" element={<UploadImage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ExploreForm" element={<ExploreForm/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Wishlist" element={<Wishlist/>} />
        
        </Routes>
  
      </div>
    </Router>
  );
}

export default App;
