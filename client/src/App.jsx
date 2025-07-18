import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recommendation from './components/Recommendation';

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme,setTheme] = useState(current_theme ? current_theme : 'light');
  
  useEffect(()=>{
    localStorage.setItem('current_theme', theme)
  },[theme])

  const location = useLocation();
  const hideNavbarRoutes=['/home-login','/login','/email-verify','/reset-password'];
  const shouldHideNavbar= hideNavbarRoutes.includes(location.pathname);

  return (
    <div className={`container ${theme}`}>
      {!shouldHideNavbar && <Navbar theme={theme} setTheme={setTheme}/>}

      <ToastContainer/>

      <Routes>
        <Route path='/home-login' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
    </div>
  )
}

export default App
