import React, { useContext, useState } from 'react'
import DataContext from '../context/Datacontext'
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {IoIosImage} from 'react-icons/io';
import Paypal from '../pages/Paypal';
const Bakat = ({addd}) => {
  const axiosPrivate = useAxiosPrivate();
  const {isAdmin,getAdminBaka} = useContext(DataContext);
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
      image ? await axiosPrivate.patch(`/user/by-image/`,{
            "Money_transfer_image": image,
            "phone": JSON.parse(localStorage.getItem('auth'))?.phone,
            "plan": addd.pk
    }) : alert('ارفق صورة الحوالة');
      image && alert('تم ارسال صورة الحوالة بنجاح')
    }
    catch(err){
      console.log(err);
    }
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
        {addd?.image && <img width={150} src={addd.image} alt={addd.name}/>}
        <div className='Image' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        {isAdmin&&<button className='btn' 
                        onClick={deleteAdminBaka}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                          
                        }}>الغاء الباقة</button>}
        </div>
        {JSON.parse(localStorage.getItem('auth'))?.country === 'اليمن' && addd?.price && !isAdmin && <div className='Image' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
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
        {JSON.parse(localStorage.getItem('auth'))?.country !== 'اليمن' && addd?.price && !isAdmin && <div className='Image' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'15px'}}> 
          $ {addd?.price}
          <Paypal
            price={addd?.price}
          />    
        </div>}
       </div>
    </div>
  )
}

export default Bakat