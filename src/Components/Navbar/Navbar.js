import React,{ useContext, useState } from 'react'
import './Navstyle.css';
import {AiFillTwitterCircle , AiFillInstagram ,AiOutlineMail,AiOutlinePhone, AiOutlineClose} from 'react-icons/ai';
// import {BsFacebook} from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
// import test from '../../images/test.svg';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import DataContext from '../../context/Datacontext';

const Navbar = () => {
    const {logedInUser,logout,isAdmin,
        // getAdminAdvertises,getusersAdvertises,
        getAllAddv,getSingleUserAdv,getAdminContactsErrors,getAdminStatistic,getAdminBaka,getUserBaka,getUserAwaitBakas
    } = useContext(DataContext);
    const { width } = useWindowSize();
    const [ clicked , setClicked ] = useState(false);
    const handleClick = () => {
        if(width<=900){
            setClicked(!clicked);
        }
    }

    
  return (
    <div className='nav_main'>
       <nav className='nav_1'>
        <div className='facebook_container' style={{}}>
                {/* <a href="https://facebook.com">
                    <BsFacebook size={22} style={{color:"white"}}/>
                </a> */}
                <a href="https://twitter.com/Mufid_Ai?t=yOyA1lYzW12VlL4NBs7-tg&s=09">
                    <AiFillTwitterCircle size={28} style={{color:"white",marginRight:'5px'}}/>
                </a>
                <a href="https://instagram.com/mufid_ai?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                    <AiFillInstagram size={30} style={{color:"white"}}/>
                </a>
                {/* <a href="https://facebook.com">
                    <AiFillLinkedin size={26} style={{color:"white"}}/>
                </a>  */}
        </div>
        <div className='facebook_container' style={{}}>
            <p style={{margin:'10px'}}>+967 735 086 916</p>
            <AiOutlinePhone/> 
            <a href="https://info@mufidai.com" style={{margin:'10px',textDecoration:'none', color:'white'}}>info@mufidai.com</a>
            <AiOutlineMail/>
        </div>
       </nav>
       <div className='nav_photo_container'>
        {/* <img className='nav_photo' src={test} alt=''/> */}
       </div>
       <nav className='nav_2'>
            <div className='menu-icon' onClick={handleClick}>
                    <i className='bar'>
                        {clicked ? <AiOutlineClose/> : <BiMenu/>}
                    </i>
            </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <Link to='/errors' className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>الشكاوي</p> 
            </Link>
            <Link to='/admin'  className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>اراء العملاء</p>
            </Link>
            <Link to='/openion' className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>آراء العملاء</p> 
            </Link>
            <Link to='/contactus' className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>تواصل معنا</p> 
            </Link>
            <Link to='/problems' className='nav-links' onClick={() => {handleClick();getAdminContactsErrors();}} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>التواصل و البلاغات</p> 
            </Link>
            <Link to='/addadv' className='nav-links' onClick={() => {handleClick();getSingleUserAdv();}} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>إنشر إعلانك</p> 
            </Link>
            <Link to='/adminaddadv' className='nav-links' onClick={() => {handleClick();getAllAddv();}} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>إضافة إعلان</p> 
            </Link>
            <Link to='/about'  className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>من نحن</p>
            </Link>
            <Link to='/statistics'  className='nav-links' onClick={() => {handleClick();getAdminStatistic();}} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>احصائيات</p>
            </Link>
            <Link to='/gpt'className='nav-links' onClick={() => {handleClick();getUserBaka();}} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>GPT-3.5 Turbo باقات</p> 
            </Link>
            <Link to='/gptadmin'className='nav-links' onClick={() => {handleClick();getAdminBaka();getUserAwaitBakas();}} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>GPT-3.5 Turbo باقات</p> 
            </Link>
            <Link to='/login'  className='nav-links' onClick={handleClick} 
                  style={{display:logedInUser ? 'none' : 'block'}}
            >
                <p>تسجيل الدخول</p> 
            </Link>
            <Link to='/newkamal'  className='nav-links' onClick={() => {logout();handleClick();}} style={{display:logedInUser ? 'block' : 'none'}}>
                <p>تسجيل الخروج</p> 
            </Link>
            <Link to='/newkamal'  className='nav-links' onClick={handleClick}>
                <p>الرئيسية</p> 
            </Link>
        </ul>
       </nav> 
    </div>
  )
}

export default Navbar