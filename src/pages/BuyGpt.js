import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/Datacontext';
import Bakat from '../Components/Bakat';
const BuyGpt = () => {
  const { userBakas,logedInUser } = useContext(DataContext);
  return (
    <div className='container' style={{flexDirection:"column"}}>
      <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}> باقات الواتساب </p>
      <div className='admin_advertises'>
          {userBakas?.map(addd => (
                <Bakat 
                  className=''
                  key={addd.pk} 
                  addd={addd}
                />
            ))}
            {!userBakas?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>لا يوجد اي باقات</p>}
            {!logedInUser && !userBakas?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>قم بتسجيل الدخول اولاً</p>}

      </div>
    </div>
    )
}

export default BuyGpt