import React,{ useContext, useState } from 'react'
import './Navstyle.css';
import {AiFillTwitterCircle , AiFillInstagram ,AiFillLinkedin,AiOutlineMail,AiOutlinePhone, AiOutlineClose} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
// import Nav_photo from '../../images/Nav_photo.svg';
import test from '../../images/test.svg';

import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import DataContext from '../../context/Datacontext';

const Navbar = () => {
    const {logedInUser,logout,isAdmin} = useContext(DataContext);
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
                <a href="https://www.facebook.com/photo?fbid=900680114680665&set=a.167878474627503">
                    <BsFacebook size={22} style={{color:"white"}}/>
                </a>
                <a href="https://moaztello.github.io/junior">
                    <AiFillTwitterCircle size={26} style={{color:"white"}}/>
                </a>
                <a href="https://www.instagram.com/p/Cn4df45KfAirdAYW7VB_VJi5eLKTb4SHqXjRmU0/">
                    <AiFillInstagram size={26} style={{color:"white"}}/>
                </a>
                <a href="https://moaztello.github.io/junior">
                    <AiFillLinkedin size={26} style={{color:"white"}}/>
                </a> 
        </div>
        <div className='facebook_container' style={{}}>
            <p style={{margin:'10px'}}>+967 777 511 122</p>
            <AiOutlinePhone/> 
            <p style={{margin:'10px'}}>Medhat@gmail.com</p>
            <AiOutlineMail/>
        </div>
       </nav>
       <div className='nav_photo_container'>
        <img className='nav_photo' src={test} alt=''/>
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
            <Link to='/openion' className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>آراء العملاء</p> 
            </Link>
            <Link to='/contactus' className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>تواصل معنا</p> 
            </Link>
            <Link to='/problems' className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>التواصل و البلاغات</p> 
            </Link>
            <Link to='/addadv' className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>إنشر إعلانك</p> 
            </Link>
            <Link to='/adminaddadv' className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>إضافة إعلان</p> 
            </Link>
            <Link to='/about'  className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>من نحن</p>
            </Link>
            <Link to='/statistics'  className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>احصائيات</p>
            </Link>
            <Link to='/gpt'className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'none' : 'block'}}>
                <p>GPT-3.5 Turbo باقات</p> 
            </Link>
            <Link to='/gptadmin'className='nav-links' onClick={handleClick} style={{display:isAdmin ? 'block' : 'none'}}>
                <p>GPT-3.5 Turbo باقات</p> 
            </Link>
            <Link to='/login'  className='nav-links' onClick={handleClick} 
                  style={{display:logedInUser ? 'none' : 'block'}}
            >
                <p>تسجيل الدخول</p> 
            </Link>
            <Link to='/'  className='nav-links' onClick={logout} style={{display:logedInUser ? 'block' : 'none'}}>
                <p>تسجيل الخروج</p> 
            </Link>
            <Link to='/'  className='nav-links' onClick={handleClick}>
                <p>الرئيسية</p> 
            </Link>
        </ul>
       </nav> 
    </div>
  )
}

export default Navbar