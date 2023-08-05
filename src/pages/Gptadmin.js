import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/Datacontext';
import Bakat from '../Components/Bakat';

const Gptadmin = () => {
  const {nameBaka , setNameBaka ,daysOfBaka , setDaysOfBaka ,priceOfBaka, setPriceOfBaka , gptAdminBakas  , sendAdminBaka} = useContext(DataContext);
  return (
    <div className='container' style={{flexDirection:"column"}}>
        <div className='loginbox' style={{border:`solid 1px rgb(74,153,233)`}}>
        <p style={{color:'rgb(74,153,233)',marginBottom:'4px'}}>اضافة باقات واتساب</p>
           <form className='newclassform' onSubmit={sendAdminBaka} >
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={nameBaka}
                        onChange={(e) => setNameBaka(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      اسم الباقة
                    </label>
                </div>
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="phone"
                        type="text"
                        required
                        value={daysOfBaka}
                        onChange={(e) => setDaysOfBaka(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      عدد الايام
                    </label>
                </div>
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={priceOfBaka}
                        onChange={(e) => setPriceOfBaka(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      سعر الباقة
                    </label>
                </div>
                <div className='addInput' style={{alignItems:'center',marginTop:'30px',fontSize:'12px',width:'100%'}}>                    
                    <button 
                        id='loginbtn' 
                        type='submit' 
                        className='btn' 
                        style={{
                          border:`solid 1px rgb(74,153,233)`,
                          marginTop:'10px'
                        }}>
                    ارسال
                    </button>
                </div>           
           </form>
      </div>
      <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}> باقات الواتساب </p>
      <div className='admin_advertises'>
          {gptAdminBakas?.map(addd => (
                <Bakat 
                  className=''
                  key={addd.pk} 
                  addd={addd}
                />
            ))}
            {!gptAdminBakas?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>لا يوجد اي باقات</p>}
      </div>
    </div>
    )
}

export default Gptadmin