import React from 'react';
import Sidebar from '../components/sideBar';
import SummaryComponent from '../components/SummaryComponent';

const Summary = () => {
  return (
    <div className='flex lg:flex-row lg:ml-[14rem] sm:flex-col'>
        <Sidebar />
     <SummaryComponent />
    </div>
  )
}

export default Summary
