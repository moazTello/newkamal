import React from 'react';
import { Link } from 'react-router-dom';
// import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle , AiFillInstagram } from 'react-icons/ai';
import Logo from '../../images/Logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_sector'>
        <img className='footer_logo' src={Logo} alt=''/>
      </div>
      <div className='footer_sector'>
        <p style={{color:'rgb(74,153,233'}}>تابعنا</p>
        <div className='facebook_container' style={{}}>
          {/* <a href="https://facebook.com">
              <BsFacebook size={22} style={{color:"rgb(74,153,233)"}}/>
          </a> */}
          <a href="https://twitter.com/Mufid_Ai?t=yOyA1lYzW12VlL4NBs7-tg&s=09">
              <AiFillTwitterCircle size={33} style={{color:"rgb(74,153,233)",marginRight:'5px'}}/>
          </a>
          <a href="https://instagram.com/mufid_ai?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
              <AiFillInstagram size={35} style={{color:"rgb(74,153,233)"}}/>
          </a>
          {/* <a href="https://facebook.com">
              <AiFillLinkedin size={26} style={{color:"rgb(74,153,233)"}}/>
          </a>  */}
        </div>
      </div>
      <div className='footer_sector'>
        <Link to='/contactus' className='footer-links'>
          <p>تواصل معنا</p> 
        </Link>
        <Link to='/addadv' className='footer-links'>
          <p>إضافة إعلان</p> 
        </Link>
        <Link to='/about'  className='footer-links'>
          <p>من نحن</p>
        </Link>
      </div>
      <div className='footer_sector'>
        <Link to='/newkamal'  className='footer-links'>
          <p>الرئيسية</p> 
        </Link>
        <Link to='/login'  className='footer-links'>
          <p>تسجيل الدخول</p> 
        </Link>
        <Link to='/gpt'className='footer-links'>
          <p>GPT-3.5 Turbo باقات</p> 
        </Link>
        
        
      </div>
      
    </div>
  )
}

export default Footer