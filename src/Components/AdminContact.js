import React, { useContext } from 'react'
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import DataContext from '../context/Datacontext';
const AdminContact = ({addd,conorerror}) => {
  const axiosPrivate = useAxiosPrivate();
  const {getAdminContactsErrors} = useContext(DataContext);
  const deleteUserContact = async () => {
    try{
      await axiosPrivate.delete(`/dashboard/connect/${addd.pk}/`)
      alert('تم الغاء طلب التواصل بنجاح');
      getAdminContactsErrors();
    }
    catch(err){
    }
  }
  const deleteUserError = async () => {
    try{
      await axiosPrivate.delete(`/dashboard/complaints/${addd.pk}/`)
      alert('تم الغاء الشكوى بنجاح')
      getAdminContactsErrors();

    }
    catch(err){
    }
  }
  return (
    <div className='advertise'>
       <div>
        <div className='addsmale'><p>{addd.pk}</p> : <p>الرقم </p></div>
        <div className='addsmale'><p>{addd.email} </p> : <p>البريد </p></div>
        <div className='addsmale'><p>{addd.phone} </p> : <p> الجوال</p></div>
        <div className='addsmale'><p>{addd.description} </p> : <p> الوصف</p></div>
       {conorerror === '1' && <button className='btn' 
                        onClick={deleteUserContact}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                          
                        }}>إلغاء</button>}
        {conorerror === '2' &&<button className='btn' 
                        onClick={deleteUserError}
                        style={{
                          marginTop:'10px',
                          marginBottom:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                          
                        }}>إلغاء</button>}
       </div>
    </div>
  )
}

export default AdminContact