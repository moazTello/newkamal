import React, { useContext, useState } from 'react'
import DataContext from '../context/Datacontext'
import AdminContact from '../Components/AdminContact';

const Problems = () => {
  const {adminContacts,adminErrors} = useContext(DataContext);
  const [conorerror,setConorerror] = useState('1');
  return (
    <div className='container' style={{flexDirection:"column"}}>
        <div className='loginbox' style={{border:`solid 1px rgb(74,153,233)`}}>
        <p style={{color:'rgb(74,153,233)',marginBottom:'4px'}}>طلبات التواصل و الشكاوى</p>
      </div>
      <button className='btn' 
                        onClick={() => setConorerror('1')}
                        style={{
                          marginTop:'10px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}>طلبات التواصل </button>
      <button className='btn' 
                        onClick={() => setConorerror('2')}
                        style={{
                          marginTop:'10px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}>الشكاوى</button>
      {conorerror === '1' &&<p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}> طلبات التواصل</p>}
      {conorerror === '2' &&<p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}> الشكاوى</p>}
      {conorerror ==='1' && <div className='admin_advertises'>
          {adminContacts?.map(addd => (
                <AdminContact 
                  key={addd.pk} 
                  addd={addd}
                  conorerror={conorerror}
                />
            ))}
            {!adminContacts?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>لا يوجد اي طلب</p>}
      </div>}
      {conorerror ==='2' && <div className='admin_advertises'>
          {adminErrors?.map(addd => (
                <AdminContact 
                  key={addd.pk} 
                  addd={addd}
                  conorerror={conorerror}
                />
            ))}
            {!adminErrors?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>لا يوجد اي شكوى</p>}
      </div>}
    </div>
    )
}

export default Problems