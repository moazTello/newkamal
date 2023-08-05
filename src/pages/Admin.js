import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/Datacontext';
import AdminOpenions from '../Components/AdminOpenions';

const Admin = () => {
  const {adminOpenions} = useContext(DataContext);
  return (
    <div className='container' style={{flexDirection:"column"}}> 
      {<p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}> آراء العملاء </p>}
      <div className='admin_advertises'>
          {adminOpenions?.map(oppp => (
                <AdminOpenions 
                  className=''
                  key={oppp.pk} 
                  oppp={oppp}
                />
            ))}
            {!adminOpenions?.length && <p style={{width:'100%',textAlign:'center',marginTop:'20px',color:'rgb(74,153,233)',paddingTop:'10px',paddingBottom:'10px',backgroundColor:"white"}}>لا يوجد اي رأي لعرضه</p>}
      </div>
    </div>
  )
}

export default Admin