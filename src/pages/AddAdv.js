import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/Datacontext';
import { Link } from 'react-router-dom';
import Adrivtisment from '../Components/Adrivtisment';
const AddAdv = () => {
  const yaman = JSON.parse(localStorage.getItem('auth'))?.country === 'اليمن' ? true : false;
  const {advName,setAdvName,advDescription,setAdvDescription,advUrl,setAdvUrl,
    setAdvCountry,advStartDate,setAdvStartDate,advEndDate,setAdvEndDate,sendUserAdv,logedInUser,singleUserAddv} = useContext(DataContext);
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
        {!logedInUser && <p style={{color:'red',fontSize:"10px",marginTop:'2px'}}>يرجى تسجيل الدخول أولآ</p>}
           <form className='newclassform' onSubmit={sendUserAdv} >
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
                <div className='addInput' style={{alignItems:'center',marginTop:'30px',fontSize:'12px',width:'100%'}}>                    
                    {logedInUser && <button 
                        id='loginbtn' 
                        type='submit' 
                        className='btn' 
                        style={{
                          border:`solid 1px rgb(74,153,233)`,
                          marginTop:'10px'
                        }}>
                    ارسال
                    </button>}
                    {!logedInUser && <Link to='/login' className='btn' style={{
                          border:`solid 1px rgb(74,153,233)`,
                          marginTop:'10px',
                          textDecoration:'none'
                        }}>
                             تسجيل الدخول
                          </Link>}
                </div>           
           </form>
      </div>
      {<p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}> الاعلانات التي قدمتها مسبقاً </p>}

      {<div className='admin_advertises'>
          {singleUserAddv?.map(addd => (
                <Adrivtisment 
                  className=''
                  key={addd.pk} 
                  addd={addd}
                  yaman={yaman}
                />
            ))}
            {!singleUserAddv?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>لا يوجد اي اعلانات</p>}
      </div>}
    </div>
    )
}

export default AddAdv
