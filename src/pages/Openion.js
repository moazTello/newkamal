import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/Datacontext';
const Openion = () => {
    const {userOpenion, setUserOpenion ,handleSubmitOpenion} = useContext(DataContext);

  return (
    <div className='container'>
        <div className='loginbox' style={{border:`solid 1px rgb(74,153,233)`}}>
          <p style={{color:'rgb(74,153,233)',marginBottom:'4px'}}>أضف رئياً</p>
           <form className='newclassform' onSubmit={handleSubmitOpenion} >
                <div className='addInput'> 
                    <textarea
                        style={{border:`solid 1px rgb(74,153,233)`,color:'rgb(74,153,233)'}} 
                        className='inputs' 
                        id="password"
                        type="text"
                        required
                        value={userOpenion}
                        onChange={(e) => setUserOpenion(e.target.value)}
                    />
                    <label htmlFor='password' className='labellog'>
                      رأي العميل
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
                     ارسال الرأي
                    </button>
                </div>           
           </form>
      </div>
    </div>
  )
}

export default Openion