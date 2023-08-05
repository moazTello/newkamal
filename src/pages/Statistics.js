import React, { useContext } from 'react'
import DataContext from '../context/Datacontext'

const Statistics = () => {
  const {statistics} = useContext(DataContext);
  return (
    <div className='container' style={{flexDirection:'column'}}>
      <p style={{color:'rgb(74,153,233)',marginBottom:'4px',backgroundColor:'white',padding:'10px',borderRadius:'5px'}}>احصائيات</p>
      
      <div className='loginbox' style={{flexDirection:'row',border:`solid 1px rgb(74,153,233`,width:'90%',float:'left',justifyContent:'center',alignItems:'flex-end'}}>        
        {statistics?.length && statistics?.map(addd => (
            <div 
              className=''
              key={addd.country} 
              style={{display:'flex',width:'40px',flexDirection:'column',justifyContent:'flex-end',alignItems:'center',float:'left'}}
            >
              <p style={{color:'rgb(74,153,233)',height:'10px',margin:'10px'}}>{addd.count}</p>
              <div className='' style={{width:"20px",height:`${addd.count*1000/100}px`,maxHeight:'400px',backgroundColor:'rgb(74,153,233)',color:'white',display:'flex',justifyContent:'center',alignItems:'center'}}></div>
              <p style={{color:'rgb(74,153,233)',height:'40px',margin:'10px'}}>{addd.country}</p>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Statistics