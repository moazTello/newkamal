import React, { useContext } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import DataContext from '../context/Datacontext';
const AdminOpenions = ({oppp}) => {
    const axiosPrivate = useAxiosPrivate();
    const {getOpen} = useContext(DataContext);
    const deleteOpen = async () => {
        try{
            await axiosPrivate.delete(`/dashboard/opinions/${oppp.pk}/`);
            alert('تم الحذف بنجاح')
            getOpen();
        }
        catch(err){
        }
    }
    const activateOpen = async () => {
        try{
            await axiosPrivate.patch(`/dashboard/opinions/${oppp.pk}/`
            ,{"active": true}
            );
            alert('تم التفعيل بنجاح')
            getOpen();
        }
        catch(err){
        }
    }
  return (
    <div className='advertise' style={{justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <div>
        <div className='addsmale'><p>{oppp.pk}</p> : <p>الرقم </p></div>
        <div className='addsmale'><p> {oppp.description} </p> : <p>الرأي </p></div>
    </div>
    <div>
        <button className='btn' 
                        onClick={deleteOpen}
                        style={{
                          marginTop:'10px',
                          marginRight:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}>حذف الرأي</button>
      {!oppp.active&&<button className='btn' 
                        onClick={activateOpen}
                        style={{
                          marginTop:'10px',
                          width:'80px',
                          border:`solid 1px rgb(74,153,233)`,
                        }}>تفعيل الرأي</button>}
    </div>
       
    </div>
  )
}

export default AdminOpenions