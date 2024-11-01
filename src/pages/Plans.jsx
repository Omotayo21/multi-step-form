    import React, {useState} from 'react';
import Sidebar from '../components/sideBar';
import PlansComponent from '../components/Plans-component';

const Plans = () => {
    

  return (
    <div className='flex lg:flex-row sm:flex-col  lg:ml-40'>
      
      <Sidebar />
      <PlansComponent />
      

      
    </div>
  )
}

export default Plans

{/*<span
        className={
            //`${type === "monthly" ? "text-denim" : "text-grey"} 
            'text-[1.4rem] font-bold'}
      >
        Monthly
      </span>
      <div className="relative inline-flex h-6 w-11 items-center rounded-full">
        <input
          type="checkbox"
          id="check"
          className="select__plan sr-only peer"
          //checked={type === "yearly"}
          //onChange={handleTogglePlan}
        />
        <span className='inline-block h-4 w-4 transform rounded-full bg-gray-200 transition' />
        <label
          htmlFor="check"
          className="block w-[3.8rem] h-8 bg-white rounded-3xl relative before:absolute before:content-['']  before:w-7 before:h-6 before:rounded-full before:m-[0.35rem] cursor-pointer hover:before:bg-light-violet"
        ></label>
      </div>
      <span
        className={//`${type === "yearly" ? "text-denim" : "text-grey"}
             'text-[1.4rem] font-bold'}
      >
        Yearly
      </span>
      <div className="relative inline-flex h-6 w-11 items-center rounded-full">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
      />
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-gray-200 transition`}
        style={{
          left: enabled ? '6px' : '1px',
          transform: enabled ? 'translateX(6px)' : 'translateX(1px)',
        }}
      />
    </div>*/}
