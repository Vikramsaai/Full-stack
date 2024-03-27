// courses.jsx

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../assets/courses.css'; // Import CSS file here

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className='content'>

      <div className="search-container">
        <input type="text" placeholder="Search courses..." />
        <button>Search</button>
      </div>
      <div className="course-container">
        <div className="card">
          <h2>Course 1</h2>
          <p>Duration: 6 weeks</p>
          <p>Available timing: Mon-Fri, 9am-11am</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>No. of students: 50</p>
          <button>Enroll</button>
        </div>
        <div className="card">
          <h2>Course 2</h2>
          <p>Duration: 7 weeks</p>
          <p>Available timing: Mon-Fri, 10am-11am</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>No. of students: 30</p>
          <button>Enroll</button>
        </div>
        {/* Add more course cards here */}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
