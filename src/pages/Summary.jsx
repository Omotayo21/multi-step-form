import React from 'react';
import Sidebar from '../components/sideBar';
import SummaryComponent from '../components/SummaryComponent';

const Summary = () => {
  return (
    <div className='flex flex-row ml-48'>
        <Sidebar />
     <SummaryComponent />
    </div>
  )
}

export default Summary
