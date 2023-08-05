import './App.css';
import './pages/AllApp.css';
import Layout from './Components/Navbar/Layout';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import BuyGpt from './pages/BuyGpt';
import Login from './pages/Login';
import AddAdv from './pages/AddAdv';
import Missing from './pages/Missing';
import Register from './pages/Register';
import { DataProvider } from './context/Datacontext';
import Admin from './pages/Admin';
import Gptadmin from './pages/Gptadmin';
import Problems from './pages/Problems';
import Adminaddadv from './pages/Adminaddadv';
import Statistics from './pages/Statistics';
import Openion from './pages/Openion';
import Errors from './pages/Errors';
import RequireAuth from './pages/RequireAuth';
import Editimage from './pages/Editimage';
import Paypal from './pages/Paypal';
function App() {
  return (
    <DataProvider>
      <Routes>
          <Route path='/' element={<Layout/>}>
            {/* <Route index element={<HomePage/>}/> */}
            <Route path='/newkamal' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/gpt' element={<BuyGpt/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/addadv' element={<AddAdv/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/openion' element={<Openion/>}/>
            <Route path='/errors' element={<Errors/>}/>
            <Route path='/editimage' element={<Editimage/>}/>
            <Route path='/paypal' element={<Paypal/>}/>
            <Route element={<RequireAuth/>}>
              <Route path='/statistics' element={<Statistics/>}/>
              <Route path='/gptadmin' element={<Gptadmin/>}/>
              <Route path='/adminaddadv' element={<Adminaddadv/>}/>
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/problems' element={<Problems/>}/>
            </Route>
            <Route path='*' element={<Missing/>}/>
          </Route>
      </Routes>  
    </DataProvider>
  );
}

export default App;
