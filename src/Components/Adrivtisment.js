import React, { useContext, useState } from 'react'
import DataContext from '../context/Datacontext'
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {IoIosImage} from 'react-icons/io';
import Paypaladv from '../pages/Paypaladv';
const Adrivtisment = ({addd,yaman}) => {
  const axiosPrivate = useAxiosPrivate();
  const {isAdmin,getSingleUserAdv,getPayedAwaitAddv,getusersAdvertises} = useContext(DataContext);
  const [newPrice , setNewPrice ] = useState(0);
  const [refuse , setRefuse ] = useState('');
  const [permenantdelete,setPermenantdelete] = useState(false);
  const deleteUserAdv = async () => {
    try{
      await axiosPrivate.delete(`/advertiser/advertisement/${addd.pk}/`)
      alert('تم حذف الاعلان بنجاح');
      getSingleUserAdv();
    }
    catch(err){
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
  const adminActiveAdv = async () => {
    try{
      await axiosPrivate.patch(`/dashboard/yemen-pending-advertisement/${addd.pk}/`,{"active_to_see": true});
      alert('تم تفعيل الاعلان');
      getPayedAwaitAddv();
    }
    catch(err){
    }
  };
  
  const refuseAdv = async () => {
    try{
      await axiosPrivate.patch(`/dashboard/pending-advertisement/${addd.pk}/`,{"refuse_text":refuse,"cative":false});
      alert('تم رفض الاعلان');
      getusersAdvertises();
    }
    catch(err){
    }
  }
  const sendImageYamen = async () => {
    try{
      image ? await axiosPrivate.patch(`/advertiser/add-image/${addd.pk}/`,{image:image}) : alert('ارفق صورة الحوالة');
      image && alert('تم ارسال صورة الحوالة بنجاح');
      image && getSingleUserAdv();
    }
    catch(err){
    }
  }
  const setPriceAdv = async () => {
    if(newPrice !== ''){
      try{
        await axiosPrivate.patch(`/dashboard/pending-advertisement/${addd.pk}/`,{
          "cative":true,
          "price":newPrice
        })
        alert('تم تسعير الاعلان');
      getusersAdvertises();

      }
      catch(err){
      }
    }
    else{
      alert('ضع السعر أولآ')
    }
  };
  return (
    <div className='advertise'>
       <div>
        <div className='addsmale'><p>{addd.pk}</p> : <p>الرقم </p></div>
        {addd.username && <div className='addsmale'><p>{addd.username} </p> : <p>اسم المعلن </p></div>}
        <div className='addsmale'><p>{addd.name} </p> : <p>عنوان الاعلان </p></div>
        <div className='addsmale'><p>{addd.country} </p> : <p>البلد</p></div>
        {addd.phone && <div className='addsmale'><p>{addd.phone} </p> : <p> رقم الجوال </p></div>}
        <div className='addsmale'><p>{addd.date_of_start} </p> : <p>البدء </p></div>
        <div className='addsmale'><p>{addd.date_of_end} </p> : <p>الانتهاء </p></div>
        {addd.cative && <div className='addsmale'><p>{addd.cative ? "مقبول": "غير مقبول"}</p> : <p>حالة التفعيل </p></div>}
        {addd.active_to_see && <div className='addsmale'><p>{addd.active_to_see ? "مفعل": "غير مغعل"}</p> : <p>حالة التفعيل </p></div>}
        <div className='addsmale'><p>{addd.description} </p> : <p> الوصف</p></div>
        <div className='addsmale'><p>{addd.URL} </p> : <p> رابط الاعلان</p></div>
       {addd?.price && <div className='addsmale'><p>{addd.price} </p> : <p>السعر</p></div>}
       {addd?.refuse_text && <div className='addsmale'><p>{addd.refuse_text} </p> : <p>سبب الرفص</p></div>}
       {isAdmin && addd?.price !== '' && addd?.image &&<button className='btn' 
                        onClick={adminActiveAdv}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                          
                        }}>تفعيل الاعلان</button>}
       </div>
       <div>
        {addd?.image && <img width={150} src={addd.image} alt={addd.name}/>}
        <div className='Image' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        {!isAdmin&&<button className='btn' 
                        onClick={deleteUserAdv}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                          
                        }}>الغاء الاعلان</button>}
        
        {isAdmin && !addd?.price && <>
        <div className='addInput' > 
            <input 
                style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                className='inputs' 
                id="price"
                type="text"
                required
                placeholder='12.00 مثلاً'
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
            />
            <label htmlFor='price' className='labellog'>
              السعر
            </label>
        </div>
        <button className='btn' 
                        onClick={setPriceAdv}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                          
                        }}>تسعير الاعلان</button></>}
        {isAdmin && !addd?.price && <>
        <div className='addInput' > 
            <input 
                style={{border:'solid 1px rgb(74,153,233)',color:'rgb(74,153,233)'}}
                className='inputs' 
                id="refuse"
                type="text"
                required
                value={refuse}
                onChange={(e) => setRefuse(e.target.value)}
            />
            <label htmlFor='price' className='labellog'>
              سبب الرفض
            </label>
        </div>
        <button className='btn' 
                        onClick={refuseAdv}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                          
                        }}>رفض الاعلان</button></>}
        </div>
        {yaman && addd?.price && !isAdmin && <div className='Image' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
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
        {!yaman && !permenantdelete && addd?.price && !isAdmin && !addd?.active_to_see && <div className='Image' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'15px'}}> 
          <Paypaladv
            price={addd?.price}
            pk={addd?.pk}
            setPermenantdelete={setPermenantdelete}
          />    
        </div>}
       </div>
    </div>
  )
}

export default Adrivtisment