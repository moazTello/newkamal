import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
// import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle , AiFillInstagram } from 'react-icons/ai';
// import Logo from '../../images/Logo.svg';
import Logo from '../../images/logo.svg';
import DataContext from '../../context/Datacontext';
const Footer = () => {
  const {logedInUser,logout,isAdmin,
    // getAdminAdvertises,getusersAdvertises,
    getAllAddv,getSingleUserAdv,getAdminContactsErrors,getAdminStatistic,getAdminBaka,getUserBaka,getUserAwaitBakas
} = useContext(DataContext);
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
      <Link to='/errors' className='footer-links' style={{display:isAdmin ? 'none' : 'block'}}>
                <p>الشكاوي</p> 
            </Link>
            <Link to='/admin'  className='footer-links' style={{display:isAdmin ? 'block' : 'none'}}>
                <p>اراء العملاء</p>
            </Link>
            <Link to='/openion' className='footer-links' style={{display:isAdmin ? 'none' : 'block'}}>
                <p>آراء العملاء</p> 
            </Link>
            <Link to='/contactus' className='footer-links' style={{display:isAdmin ? 'none' : 'block'}}>
                <p>تواصل معنا</p> 
            </Link>
            <Link to='/problems' className='footer-links' onClick={() => {getAdminContactsErrors();}} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>التواصل و البلاغات</p> 
            </Link>
            <Link to='/addadv' className='footer-links' onClick={() => {getSingleUserAdv();}} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>إنشر إعلانك</p> 
            </Link>
            <Link to='/adminaddadv' className='footer-links' onClick={() => {getAllAddv();}} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>إضافة إعلان</p> 
            </Link>
            
           

      </div>
      <div className='footer_sector'>
            <Link to='/'  className='footer-links'>
                <p>الرئيسية</p> 
            </Link>
            <Link to='/statistics'  className='footer-links' onClick={() => {getAdminStatistic();}} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>احصائيات</p>
            </Link>
            <Link to='/gpt'className='footer-links' onClick={() => {getUserBaka();}} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>GPT-3.5 Turbo باقات</p> 
            </Link>
            <Link to='/gptadmin'className='footer-links' onClick={() => {getAdminBaka();getUserAwaitBakas();}} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>GPT-3.5 Turbo باقات</p> 
            </Link>
            <Link to='/login'  className='footer-links' 
                  style={{display:logedInUser ? 'none' : 'block'}}
            >
                <p>تسجيل الدخول</p> 
            </Link>
            <Link to='/'  className='footer-links' onClick={() => {logout();}} style={{display:logedInUser ? 'block' : 'none'}}>
                <p>تسجيل الخروج</p> 
            </Link>
            <Link to='/about'  className='footer-links' style={{display:isAdmin ? 'none' : 'block'}}>
                <p>من نحن</p>
            </Link>
            
      </div>
      
    </div>
  )
}

export default Footer