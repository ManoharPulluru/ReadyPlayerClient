import React, { useState } from 'react';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://ready-player-manohar-server.onrender.com/user/signup', {
        username,
        email,
        password,
      });

      const data = response.data;
      setMessage(data.message); 
      if (data.success) {
        localStorage.setItem('token', data.token);
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('Something went wrong during signup.');
    }
  };

  return (
    <div className='login-main'>
      <div className='login-left'>
        <div className='login-logo'>
          <img height={'150px'} width={'150px'} src='https://assets-global.website-files.com/647798cf71ec2048ea89ab07/647817558bc1d570b250c81e_RPM-logo.svg' alt="Logo" />
        </div>
        <div className='login-card-div'>
          <div className='login-card'>
            <Form>
              <div className='title-login'>
                Signup To Player Me Hub
              </div>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className='login-btns-grp'>
                <Button variant="info" onClick={handleSignup}>
                  Sign up
                </Button>
                <Button onClick={() => { navigate('/login') }} variant="dark">
                  Login
                </Button>
              </div>
              <br />
              <div style={{ height: "20px" }}>{message}</div>
            </Form>

          </div>
        </div>
      </div>
      <div className='login-right'></div>

    </div>
  );
};

export default Signup;
