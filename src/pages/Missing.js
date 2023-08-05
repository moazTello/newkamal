import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div className='container'>
      <div className='loginbox'>
          هذه الصفحة غير موجودة 
      </div>
      <Link to='/newkamal'>عودة</Link>
    </div>

  )
}

export default Missing