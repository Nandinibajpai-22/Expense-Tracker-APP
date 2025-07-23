
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div>
            <h1 className='text-4xl text-center mb-4 '>404 </h1>
           <p className='text-center text-2xl mb-4'>Page Not Found</p>
<Link to="/" className='text-blue-500 hover:underline text-center block'>Go back to Home</Link>
        </div>
      
    </div>
  )
}

export default NotFound
