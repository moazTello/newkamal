import React from 'react';
import { useContext, useState } from 'react';
import DataContext from '../context/Datacontext';
import Adrivtisment from '../Components/Adrivtisment';

const Adminaddadv = () => {
  const {advName,setAdvName,advDescription,setAdvDescription,advUrl,setAdvUrl,setAdvCountry,advStartDate,setAdvStartDate,advEndDate,setAdvEndDate,
    sendAdv,adminAdvertises,usersadvertizeorder,userPayedAddv,activeAddv,getPayedAwaitAddv,getActiveAddv,getusersAdvertises,getAdminAdvertises
    ,setAdminAdvactive,adminAdvPrice, setAdminAdvPrice} = useContext(DataContext);
  const [useraddverts, setUseraddverts] = useState('2');
  const countries = [
    {
      id:1,
      country:"سوريا",
    },
    {
      id:2,
      country:"لبنان",
    },
    {
      id:3,
      country:"الاردن",
    },
    {
      id:4,
      country:"العراق",
    },
    {
      id:5,
      country:"فلسطين",
    },
    {
      id:6,
      country:"الامارات",
    },
    {
      id:7,
      country:"البحرين",
    },
    {
      id:8,
      country:"اليمن",
    },
    {
      id:9,
      country:"مصر",
    },
    {
      id:10,
      country:"الجزائر",
    },
    {
      id:11,
      country:"ليبيا",
    },
    {
      id:12,
      country:"المغرب",
    },
    {
      id:13,
      country:"السودان",
    },
    {
      id:14,
      country:"الصومال",
    },
    {
      id:15,
      country:"تونس",
    },
    {
      id:16,
      country:"تشاد",
    },
    {
      id:17,
      country:"السعودية",
    },
    {
      id:18,
      country:"عُمان",
    },
    {
      id:19,
      country:"الكويت",
    },
    {
      id:20,
      country:"قطر",
    },
  ]
  return (
    <div className='container' style={{flexDirection:"column"}}>
        <div className='loginbox' style={{border:`solid 1px rgb(74,153,233)`}}>
        <p style={{color:'rgb(74,153,233)',marginBottom:'4px'}}>انشر اعلانك</p>
           <form className='newclassform' onSubmit={sendAdv} >
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={advName}
                        onChange={(e) => setAdvName(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      الاسم
                    </label>
                </div>
                <div className='addInput'> 
                    <select className='inputs' 
                            style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                            onChange={(e) => setAdvCountry(e.target.value)}> 
                    {countries.map((country) => {
                        return <option 
                                        className='inputs' 
                                        key={country.id}>
                            {country.country}
                        </option>
                    })}
                </select>
                <label htmlFor='username' className='labellog'>
                      البلد
                </label>
                </div>
                <div className='addInput' > 
                    <p style={{color:'red',fontSize:"10px",marginTop:'2px',textAlign:'right'}}>لسنا مسؤلين عن اي غلط في الرابط </p>
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="phone"
                        type="text"
                        required
                        placeholder='http://#######.com'
                        value={advUrl}
                        onChange={(e) => setAdvUrl(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      رابط الاعلان
                    </label>
                </div> 
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="phone"
                        type="date"
                        required
                        value={advStartDate}
                        onChange={(e) => setAdvStartDate(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      بداية الاعلان
                    </label>
                </div> 
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="phone"
                        type="date"
                        required
                        value={advEndDate}
                        onChange={(e) => setAdvEndDate(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      انتهاء الاعلان
                    </label>
                </div> 
                <div className='addInput'> 
                    <textarea
                        style={{border:`solid 1px rgb(74,153,233)`,color:'rgb(74,153,233)'}} 
                        className='inputs' 
                        id="description"
                        type="text"
                        required
                        value={advDescription}
                        onChange={(e) => setAdvDescription(e.target.value)}
                    />
                    <label htmlFor='password' className='labellog'>
                      وصف الاعلان
                    </label>
                </div>
                <div className='addInput' > 
                    <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                        className='inputs' 
                        id="username"
                        type="text"
                        required
                        value={adminAdvPrice}
                        onChange={(e) => setAdminAdvPrice(e.target.value)}
                    />
                    <label htmlFor='username' className='labellog'>
                      السعر
                    </label>
                </div>
                <div className='addInput'> 
                    <select className='inputs' 
                            style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                            onChange={(e) => setAdminAdvactive(e.target.value)}> 
                      <option>مفعل</option>
                      <option>غير مفعل</option>
                </select>
                <label htmlFor='username' className='labellog'>
                      التفعيل
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
      <button className='btn' 
                        onClick={() => {setUseraddverts('1');getusersAdvertises();}}
                        style={{
                          marginTop:'10px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}>طلبات الاعلان التي تحتاج تسعير  </button>
      <button className='btn' 
                        onClick={() => {setUseraddverts('2');getPayedAwaitAddv();}}
                        style={{
                          marginTop:'10px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}>الاعلانات المدفوعة التي تحتاج تفعيل  </button>
      <button className='btn' 
                        onClick={() => {setUseraddverts('3');getActiveAddv();}}
                        style={{
                          marginTop:'10px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}>الاعلانات المفعلة  </button>
      <button className='btn' 
                        onClick={() => {setUseraddverts('4');getAdminAdvertises();}}
                        style={{
                          marginTop:'10px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}>الاعلانات التي أضافها الآدمن </button>
      {useraddverts === '1' &&<p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}> طلبات الاعلان التي تحتاج تسعير </p>}
      {useraddverts === '2' &&<p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}> الاعلانات المدفوعة التي تحتاج تفعيل </p>}
      {useraddverts === '3' &&<p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}> الاعلانات المفعلة </p>}
      {useraddverts === '4' &&<p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}> الاعلانات التي أضافها الآدمن </p>}

      {useraddverts ==='4' &&<div className='admin_advertises'>
          {adminAdvertises?.map(addd => (
                <Adrivtisment 
                  className=''
                  key={addd.pk} 
                  addd={addd}
                />
            ))}
            {!adminAdvertises?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>لا يوجد اي اعلانات</p>}
      </div>}
      {useraddverts ==='1' &&<div className='admin_advertises'>
          {usersadvertizeorder?.map(addd => (
                <Adrivtisment 
                  className=''
                  key={addd.pk} 
                  addd={addd}
                />
            ))}
            {!usersadvertizeorder?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>لا يوجد اي اعلانات</p>}
      </div>}
      {useraddverts ==='2' &&<div className='admin_advertises'>
          {userPayedAddv?.map(addd => (
                <Adrivtisment 
                  className=''
                  key={addd.pk} 
                  addd={addd}
                />
            ))}
            {!userPayedAddv?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>لا يوجد اي اعلانات</p>}
      </div>}
      {useraddverts ==='3' &&<div className='admin_advertises'>
          {activeAddv?.map(addd => (
                <Adrivtisment 
                  className=''
                  key={addd.pk} 
                  addd={addd}
                />
            ))}
            {!activeAddv?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>لا يوجد اي اعلانات</p>}
      </div>}
    </div>
    )
}

export default Adminaddadv