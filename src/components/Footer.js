import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='socialMedia'>
        <a href="https://github.com/Bavyadharshini-Rajaganapathy" target="_blank" rel="noopener noreferrer" className="social-icon">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/bavyadharshini/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2025 Bavyadharshini R.</p>
    </footer>
  );
}

export default Footer;
