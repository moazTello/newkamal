import React, { useContext } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import DataContext from '../../context/Datacontext';
import Footer2 from './Footer2';
const Layout = () => {
  const { isAdmin } = useContext(DataContext);
  return (
    <div className='App'>
        <Navbar/>
        <Outlet/>
        {!isAdmin && 
          <Footer/>}
        {!isAdmin && 
          <Footer2/>}
        
        
    </div>
  )
}

export default Layout