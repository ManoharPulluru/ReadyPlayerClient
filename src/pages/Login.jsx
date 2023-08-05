import React from 'react'
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='login-main'>
            <div className='login-left'>
                <div className='login-logo'>
                    <img height={'150px'} width={'150px'} src='https://assets-global.website-files.com/647798cf71ec2048ea89ab07/647817558bc1d570b250c81e_RPM-logo.svg' />
                </div>
                <div className='login-card-div'>
                    <div className='login-card'>
                        <Form>
                            <div className='title-login'>
                                Enter Ready Player Me Hub
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className='login-btns-grp'>
                            <Button onClick={()=> {navigate('/welcome')}} variant="info">
                                Login
                            </Button>
                            <Button onClick={()=>{navigate('/signup')}} variant="dark">
                                Sign up
                            </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <div className='login-right'></div>
        </div>
    )
}

export default Login
