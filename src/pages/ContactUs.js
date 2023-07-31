import React from 'react';
import { useContext } from 'react';
// import { Link } from 'react-router-dom';
import DataContext from '../context/Datacontext';
// import useWindowSize from '../hooks/useWindowSize';

const ContactUs = () => {
  const {contactMessage,setContactMessage,emailContact,setEmailContact,handleSubmitContact} = useContext(DataContext);
  // const { width } = useWindowSize();

  return (
    <div className='container'>
        <div className='loginbox' style={{border:`solid 1px rgb(74,153,233)`}}>
           <form className='newclassform' onSubmit={handleSubmitContact} >
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={emailContact}
                        onChange={(e) => setEmailContact(e.target.value)}
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
                      الرسالة
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

export default ContactUs;