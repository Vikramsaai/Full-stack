// Academy.jsx

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../assets/academy.css'; // Import CSS file here
import rating from '../../assets/lmages/rating.png'

const Academy = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className='card-container'>
        <div className='card'>
          <h3>AR chess academy</h3>
          <p>Place:Coimbatore</p>
          <button>Enroll here</button>
          <img className='star' src={rating} alt=''/>
        </div>
        <div className='card'>
          <h3>SS chess academy</h3>
          <p>place:Chennai</p>
          <button>Enroll here</button>
          <img className='star' src={rating} alt=''/>
        </div>
        <div className='card'>
          <h3>RK chess academy</h3>
          <p>place:Bangalore</p>
          <button>Enroll Here</button>
          <img className='star' src={rating} alt=''/>
        </div>
        {/* Add more cards as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default Academy;
