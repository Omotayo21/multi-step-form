import React from 'react';
import Sidebar from '../components/sideBar';
import AddonsComponent from '../components/AddonsComponent';

const Addons = () => {
  return (
    <div className='flex lg:flex-row lg:ml-44 sm:flex-col '>
        <Sidebar />
        <AddonsComponent />
      
    </div>
  )
}

export default Addons
