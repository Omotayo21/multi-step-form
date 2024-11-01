import React from 'react';
import image1 from '../assets/images/icon-thank-you.svg'

const FinishedComponent = () => {
  return (
    <div className=''>
       <div className='flex flex-col items-center justify-center  my-auto px-24'>
          <img src={image1} className='w-24' />
          <h2 className='text-blue-700 font-bold text-2xl '>Thank you!</h2>
          <p className='text-grey-200 text-[1.2rem] leading-8 text-center'> Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    </div>
  )
}

export default FinishedComponent
