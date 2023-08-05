import React, { useContext } from 'react';
import LoginPerson from '../images/LoginPerson.svg';
import { Link } from 'react-router-dom';
import DataContext from '../context/Datacontext';
import Marquee from "react-fast-marquee";
const Login = () => {
    const {password,setPassword,handleSubmitlogin,openions,advPhone,setAdvPhone} = useContext(DataContext);
    return (
    <div className='container' style={{flexDirection:'column'}} >
        <div className='loginbox' style={{border:`solid 1px rgb(74,153,233)`}}>
           <img src={LoginPerson} alt='' className='LoginPerson'/>
           <form className='newclassform' onSubmit={handleSubmitlogin}>
                <p>admin : +963988140521 , pass : aa</p>
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={advPhone}
                        onChange={(e) => setAdvPhone(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      رقم الجوال
                    </label>
                </div> 
                <div className='addInput'> 
                    <input
                        style={{border:`solid 1px rgb(74,153,233)`,color:'rgb(74,153,233)'}} 
                        className='inputs' 
                        id="password"
                        type="text"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor='password' className='labellog'>
                      كلمة المرور 
                    </label>
                </div>
                <div className='addInput' style={{alignItems:'center',marginTop:'30px',fontSize:'12px',width:'100%'}}>                    
                    <Link to='/register' className='link' style={{marginRight:'10px'}}>انشاء حساب</Link>  
                    <p style={{color:'rgb(74,153,233)',marginTop:'25px',width:'100%',textAlign:'center'}}>اذا كنت لا تمتلك حسابآ
                    </p>
                    <button 
                        id='loginbtn' 
                        type='submit' 
                        className='btn' 
                        style={{
                          border:`solid 1px rgb(74,153,233)`,
                        }}>
                    تسجيل الدخول
                    </button>
                </div>           
           </form>
      </div>
      <div className='home_sector_marqee' style={{marginTop:'30px',backgroundColor:'white'}}>
            <p className='marqee_oppenien'>آراء العملاء</p>
            <Marquee style={{backgroundColor:'white'}} direction="right" pauseOnHover="true">
            {openions?.map(op => (
                <p 
                  className='marqee_text'
                  key={op.pk} 
                >
                    عميل : {op.description} 
                </p>
            ))}
            </Marquee>    
        </div>
    </div>
  )
}
export default Login;