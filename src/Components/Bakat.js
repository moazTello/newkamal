import React, { useContext, useState } from 'react'
import DataContext from '../context/Datacontext'
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {IoIosImage} from 'react-icons/io';
import Paypal from '../pages/Paypal';
import axios from '../api/DataTrans';
const Bakat = ({addd}) => {
  const axiosPrivate = useAxiosPrivate();
  const {isAdmin,getAdminBaka,getUserAwaitBakas} = useContext(DataContext);
  const [payway, setPayway ] = useState('0');
  const [phoneBaka ,setPhoneBaka] = useState('');
  const deleteAdminBaka = async () => {
    try{
      await axiosPrivate.delete(`/dashboard/plan/${addd.pk}/`)
      alert('تم حذف الباقة بنجاح');
      getAdminBaka();
    }
    catch(err){
      console.log(err);
    }
  };
  const activeUserBaka = async () => {
    try{
      await axiosPrivate.patch(`/dashboard/active-user/${addd.pk}/`,
      {
        "number_of_day": addd.number_of_day,
        "use":true
       }
    )
      alert('تم تفعيل الباقة بنجاح');
      getUserAwaitBakas();
    }
    catch(err){
      console.log(err);
    }
  }
  const [image,setImage] = useState('');
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const sendImageYamen = async () => {
    try{
      phoneBaka?.length >=13 && phoneBaka.includes('+967') && image ? await axios.patch(`/user/by-image/`,{
            "Money_transfer_image": image,
            "phone": phoneBaka,
            "plan": addd.pk
    }) : alert('ارفق صورة الحوالة و رقم الجوال الصحيح');
    phoneBaka?.length >=13 && phoneBaka.includes('+967') && image && alert('تم ارسال صورة الحوالة بنجاح')
    }
    catch(err){
      alert('اعد المحاولة')
      console.log(err);
    }
  }
  const setElectric = () => {
    phoneBaka?.length >= 13 && !phoneBaka.includes('+967') && setPayway('2');
    phoneBaka?.length >= 13 && phoneBaka.includes('+967') && alert('ارسال حوالة مفعلة فقط في اليمن');
    phoneBaka?.length < 13 && alert('ادخل رقم الجوال بشكل صحيح');
  }
  const setHawala = () => {
    phoneBaka?.length >= 13 && phoneBaka.includes('+967') && setPayway('1');
    phoneBaka?.length >= 13 && !phoneBaka.includes('+967') && alert('ارسال حوالة مفعلة فقط في اليمن');
    phoneBaka?.length < 13 && alert('ادخل رقم الجوال بشكل صحيح');
  }
  return (
    <div className='advertise'>
       <div>
        <div className='addsmale'><p>{addd.pk}</p> : <p>الرقم </p></div>
        {addd?.name && <div className='addsmale'><p>{addd.name} </p> : <p>اسم الباقة</p></div>}
        {addd?.number_of_day && <div className='addsmale'><p>{addd.number_of_day} </p> : <p>عدد الأيام</p></div>}
        {addd?.price && <div className='addsmale'><p>$ {addd.price} </p> : <p>السعر</p></div>}
       </div>
       <div>
        {addd?.Money_transfer_image && <img width={150} src={addd.Money_transfer_image} alt={addd.name}/>}
        <div className='Image' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        {!addd?.Money_transfer_image && isAdmin && <button className='btn' 
                        onClick={deleteAdminBaka}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                          
                        }}>الغاء الباقة</button>}
        {addd?.Money_transfer_image && isAdmin && <button className='btn' 
                        onClick={activeUserBaka}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}>تفعيل الباقة</button>}
        {!isAdmin && <div className='addInput' > 
                <p className='addsmale' style={{color:'red',fontSize:'10px',marginTop:'2px',textAlign:'right'}}>+967######### الرقم الخاص بالبلد و الرقم دون صفر</p>
                <input 
                        style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)',minWidth:'200px',marginBottom:'10px'}}
                        className='inputs' 
                        id="phone"
                        type="text"
                        required
                        placeholder='+963999999999'
                        value={phoneBaka}
                        onChange={(e) => setPhoneBaka(e.target.value)}
                />
                <label htmlFor='username' className='labellog'>
                  رقم الجوال
                </label>
        </div> }
        {payway !== '2' && !isAdmin && <button className='btn' 
                        onClick={setElectric}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}>دفع الكتروني</button>}
        {payway !== '1' && !isAdmin && <button className='btn' 
                        onClick={setHawala}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}> صورة حوالة</button>}
        </div>
        {payway === '1' && addd?.price && !isAdmin && <div className='Image' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <p className='addsmale' style={{color:'red',fontSize:'14px',marginTop:'2px',textAlign:'right'}}>+967 254091331 للايداع عبر العمقي حساب رقم</p>
        <p className='addsmale' style={{color:'red',fontSize:'14px',marginTop:'2px',textAlign:'right'}}>او تحويل بإسم : فهد عبدالله حيمد حمدان</p>
          
          {
              image?.image ? 
              <img  src={image.image} style={{width:'100px'}} alt=''/>:
         <label htmlFor='choose'>
              <IoIosImage/>
              <span>ادخل الصورة</span>
          </label> 
          }
          <label htmlFor='choose' style={{fontSize:'12px'}}>تبديل الصورة</label>
          <input title='ادخل صورة' onChange={handleImageUpload} type='file' id='choose'/>  
          <button onClick={sendImageYamen} className='btn' style={{
                marginTop:'10px',
                marginBottom:'10px',
                width:'120px',
                border:`solid 1px rgb(74,153,233)`,
              }}>
                ارسال صورة الحوالة
              </button>     
        </div>}
        {payway === '2' && addd?.price && !isAdmin && <div className='Image' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'15px'}}> 
          <Paypal
            price={addd?.price}
            phoneBaka={phoneBaka}
            number_of_day={addd.number_of_day}
          />    
        </div>}
       </div>
    </div>
  )
}

export default Bakat