import React, { useContext } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import DataContext from '../../context/Datacontext';

const Layout = () => {
  const { isAdmin } = useContext(DataContext);
  return (
    <div className='App'>
        <Navbar/>
        <Outlet/>
        {!isAdmin && <Footer/>}
    </div>
  )
}

export default Layout