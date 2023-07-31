import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle , AiFillInstagram ,AiFillLinkedin} from 'react-icons/ai';
import Logo from '../../images/Logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_sector'>
        <img className='footer_logo' src={Logo} alt=''/>
      </div>
      <div className='footer_sector'>
        <div className='facebook_container' style={{width:'110px'}}>
          <a href="https://www.facebook.com/photo?fbid=900680114680665&set=a.167878474627503">
              <BsFacebook size={22} style={{color:"rgb(74,153,233)"}}/>
          </a>
          <a href="https://moaztello.github.io/junior">
              <AiFillTwitterCircle size={26} style={{color:"rgb(74,153,233)"}}/>
          </a>
          <a href="https://www.instagram.com/p/Cn4df45KfAirdAYW7VB_VJi5eLKTb4SHqXjRmU0/">
              <AiFillInstagram size={26} style={{color:"rgb(74,153,233)"}}/>
          </a>
          <a href="https://moaztello.github.io/junior">
              <AiFillLinkedin size={26} style={{color:"rgb(74,153,233)"}}/>
          </a> 
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
        <Link to='/gpt'className='footer-links'>
          <p>GPT-3.5 Turbo باقات</p> 
        </Link>
        <Link to='/login'  className='footer-links'>
          <p>تسجيل الدخول</p> 
        </Link>
        <Link to='/'  className='footer-links'>
          <p>الرئيسية</p> 
        </Link>
      </div>
    </div>
  )
}

export default Footer