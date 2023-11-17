import React from 'react';
import Sidebar from '../components/sideBar';
import AddonsComponent from '../components/AddonsComponent';

const Addons = () => {
  return (
    <div className='flex flex-row ml-44 '>
        <Sidebar />
        <AddonsComponent />
      
    </div>
  )
}

export default Addons
