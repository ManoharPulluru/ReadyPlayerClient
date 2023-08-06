import React, { useState, useRef } from 'react';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const loginButtonRef = useRef(null);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setMessage('');

      const response = await axios.post('http://localhost:3001/user/login', {
        email,
        password,
      });

      const data = response.data;
      setMessage(data.message);

      if (data.success) {
        localStorage.setItem('token', data.token);
        navigate('/welcome');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Something went wrong during login.');
    } finally {
      setLoading(false);
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
                Enter Ready Player Me Hub
              </div>
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
                <Button
                  ref={loginButtonRef}
                  variant="info"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
                <Button onClick={() => { navigate('/signup') }} variant="dark">
                  Sign up
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

export default Login;
