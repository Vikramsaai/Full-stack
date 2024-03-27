// Home.jsx

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../assets/Home.css'; // Import CSS file here
import { FiArrowRight } from "react-icons/fi";
import imghome from '../../assets/lmages/imghome.jpg';
import imghome2 from '../../assets/lmages/imghome2.jpg';

const Home = () => {
  return (
    <div className='top'>
      <Navbar />
      <div className='box'>
        {/* Your banner content */}
        <div className='home-banner'>
          
        </div>
        <div className='home-text'>
          <h1>Start Your Journey With Us</h1>
          <p>
            We will Make You Play Chess Like a Grandmaster and a complete dedicated centre for chess and chess related activities.
          </p>
          <button className='secondary-button'>
            Enroll Now <FiArrowRight />
          </button>
        </div>
      </div>
      <div className='b'> 
        <div className='text-container'>
          <h1 className='jour'>Our Journey</h1>
          <p>
            Champions Chess Academy was started in May 2009.
            The main target audience was children in the age group of 5 to 15 years of age.
            Soon, there was demand from a number of schools to conduct Chess.
            Workshops for students as well as teachers.
            Based on popular demand, the activities were expanded to the world of business.
            A number of neighbourhood centres wanted to offer Chess training for children in their respective neighborhoods.
            CCA has trained several of them.
          </p>
          <p>
            International Students include Students of USA, CANADA, Bahrin, Australia, Japan Malaysia, Ruwanda, Japan, United Kingdom, Singapore, and Germany.
            More than 5000+ Kids are our students.
          </p>
          <p>
            All the major newspapers cover our events. Indian express has written an article on our Founder. Samaya TV, TV 9 and News 9 have covered our events. Discovery channel sponsored one of our events. Our brand is quite famous and that will give you a better launch.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
