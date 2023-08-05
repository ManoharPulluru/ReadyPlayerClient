import React from 'react';
import '../styles/homePage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div className='parent'>
    <div className='main-home'>
    <div className='home-page-main'>
      {/* <div className='home-page-main1'> */}
      <div className='nav-bar'>
        <div className='nav-left'>
          <img
            alt='logo'
            src='https://assets-global.website-files.com/647798cf71ec2048ea89ab07/647817558bc1d570b250c81e_RPM-logo.svg'
          />
        </div>
        <div className='nav-mid'>
          <div>Players</div>
          <div>
            <select className='sel-class'>
              <option>Developers</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 2</option>
              <option>Option 2</option>
            </select>
          </div>
          <div>Brands</div>
          <div>
          <select className='sel-class'>
              <option>Company</option>
              <option>Blogs</option>
              <option>Carrers</option>
              <option>Events</option>
            </select>
          </div>
        </div>
        <div className='nav-right'>
          <div className='login-btn'>
          <Button onClick={()=> navigate('/login')} variant="outline-info">Login</Button>{' '}
          </div>
          <div className='signup-btn'>
          <Button variant="outline-light" onClick={()=> navigate('/signup')}>Sign up</Button>{' '}
          </div>
        </div>
      </div>
      <div className='body-main'>
        <div className='big-line'>The world’s leading</div>
        <div className='big-line'>avatar platform</div>
        <div className='description'>
        Thousands of developers, brands, and creators are using Ready Player Me to
        <div>deliver amazing virtual experiences to millions of users</div> 
        </div>
        <div className='btn-home'>
        <Button onClick={()=> navigate('/login')} className='home-btn' variant="info" size='lg'>Login to create avatar</Button>{' '}
        </div>
      </div>
      {/* </div> */}
    </div>
    </div>
    </div>
  );
};

export default Homepage;
