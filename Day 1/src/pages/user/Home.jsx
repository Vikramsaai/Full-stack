import React from 'react';


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <h1>Welcome to Our Website</h1>
      <p>This is the home page.</p>
      <p>Feel free to explore!</p>
    </div>
  );
};

export default HomePage;
