import React, { useContext } from 'react';
import LoginPerson from '../images/LoginPerson.svg';
import DataContext from '../context/Datacontext';

const Register = () => {
  const {userName,setUserName,password,setPassword,handleSubmitRegister} = useContext(DataContext);
    return (
    <div className='container' >
        <div className='loginbox' style={{border:`solid 1px rgb(74,153,233)`}}>
           <img src={LoginPerson} alt='' className='LoginPerson'/>
           <form className='newclassform' onSubmit={handleSubmitRegister} >
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
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
                    <button
                        id='loginbtn' 
                        type='submit' 
                        className='btn' 
                        style={{
                          border:`solid 1px rgb(74,153,233)`,
                        }}>
                    إنشاء حساب
                    </button>
                </div>           
           </form>
        </div>
    </div>
  )
}
export default Register;