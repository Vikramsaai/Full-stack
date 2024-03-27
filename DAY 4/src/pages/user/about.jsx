import React from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../assets/about.css';
const about = () => {
  return (
    <div className='top'>
      <Navbar></Navbar>
      
      <div className='b'>

      
      <div className='about-section'>
        
        <h1 className='Primary-heading'>
        Achievements
        </h1>
        <p className='primary-text'>
        (a) Conducted summer camp every year for the last ten years.
         (b) Conducted monthly tournaments regularly for children from 2009 to date.
        </p>
        <p className='primary-text'>
        (c)Conducted summer camps for kids in 2009, 2010, 2011, 2012 and 2014, 2015, 2016, 2017 and 2018. (d)Conducted Oracle tournament thrice. We have conducted Grandmaster coaching by Sriram Jha.
        </p>
        <p>
(e)We have conducted Chess Camps for the 10th year consecutively. 13 We have now taught more than 2,000 students chess at different levels.(f). Karnataka two budding grandmasters, Raghunandan, and Ojas Kulkarni, have visited the Champions’ Chess Academy.
(g) Pooblesh Anand, IM, has played in one of our “Corporate Tournaments” of Champions’ Chess Academy.Grandmaster Tejas Bakre from Gujarat is one of our valued visitors.
        </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default about