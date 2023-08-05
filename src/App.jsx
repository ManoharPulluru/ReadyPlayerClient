import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage.jsx';
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import WelcomePage from './pages/WelcomePage.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/welcome' element={<WelcomePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
