import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/Datacontext';
const Errors = () => {
  const {contactMessage,setContactMessage,email,setEmail,handleSubmitError,phoneContact,setPhoneContact} = useContext(DataContext);
  return (
    <div className='container'>
        <div className='loginbox' style={{border:`solid 1px rgb(74,153,233)`}}>
          <p style={{color:'rgb(74,153,233)',marginBottom:'4px'}}>الشكاوى</p>
           <form className='newclassform' onSubmit={handleSubmitError} >
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={phoneContact}
                        onChange={(e) => setPhoneContact(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      الجوال
                    </label>
                </div> 
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      البريد الالكتروني
                    </label>
                </div> 
                <div className='addInput'> 
                    <textarea
                        style={{border:`solid 1px rgb(74,153,233)`,color:'rgb(74,153,233)'}} 
                        className='inputs' 
                        id="password"
                        type="text"
                        required
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                    />
                    <label htmlFor='password' className='labellog'>
                      الشكوى او البلاغ
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
                    ارسال
                    </button>
                </div>           
           </form>
      </div>
    </div>
  )
}

export default Errors