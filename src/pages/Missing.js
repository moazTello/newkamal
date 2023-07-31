import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div>
      <p>
          هذه الصفحة غير موجودة 
      </p>
      <Link to='/'>عودة</Link>
    </div>

  )
}

export default Missing