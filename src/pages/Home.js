import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';
import profile from '../assets/profile.jpg';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <img 
          src={profile} 
          alt="Profile" 
          className="profile-picture"
        />
        <h2>Hi, I'm Bavyadharshini</h2>
        <p>Frontend Developer passionate about building user-friendly applications.</p>
        <div className='social-links'>
          <a href="https://www.linkedin.com/in/bavyadharshini/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:bavyadharshinir@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href="https://github.com/Bavyadharshini-Rajaganapathy" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <div className='skills-container'>
          <div className='card'>
            <h2>Frontend</h2>
            <p>HTML, CSS, JavaScript, React, Tailwindcss</p>
          </div>
          <div className='card'>
            <h2>Backend</h2>
            <p>NodeJs, ExpressJs</p>
          </div>
          <div className='card'>
            <h2>Languages</h2>
            <p>JavaScript, Java</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
