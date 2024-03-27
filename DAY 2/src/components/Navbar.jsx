import React from 'react';
import '../assets/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="title">Chess Academy</li> {/* Plain text */}
        
        <li><Link to="/ChessChampion/Home">Home</Link></li>
        <li><Link to="/ChessChampion/courses">Courses</Link></li>
        <li><Link to="/ChessChampion/academy">Academy</Link></li>
        <li><Link to="/ChessChampion/about">About</Link></li>
        
        <li className="logout"><Link to="/ChessChampion/Login">Logout</Link></li> {/* Add Logout link */}
      </ul>
    </nav>
  );
};

export default Navbar;
