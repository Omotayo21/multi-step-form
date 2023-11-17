import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const HomeComponent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setNameError && setEmailError && setNumberError('')
  };

 const handleNext = () =>{
 

  // Reset error messages
  setNameError('');
  setEmailError('');
  setNumberError('');

  let hasErrors = false;

  if (formData.name.trim() === '') {
    setNameError('Please fill in your name.');
    hasErrors = true;
  }

  if (!formData.email.includes('@gmail.com')) {
    setEmailError('Email must be a valid Gmail address.');
    hasErrors = true;
  }

  if (formData.number.length < 7) {
    setNumberError('Please fill in your phone number.');
    hasErrors = true;
  }

  if (!hasErrors) {
    // Proceed to the next step in your form
    navigate("/Plans");
  
};

 }


  return (
    <div>
       <div className='flex flex-col space-x-8 ml-24  '>
      
      <div className='mt-36 mb-12 ml-8'>
       <h2 className='lg:text-2xl text-blue-700 font-bold sm:text-[2.4]'>Personal info</h2>
       <p className='text-gray-300'>Please provide your name, email address, and phone number</p>
       
       </div>
         <div className='flex flex-row'><label htmlFor='id' className='text-blue-400 '>Name</label>{nameError && <p className="text-red-500 pl-48 text-sm">{nameError}</p>}</div>
        <input className={`w-96 border-solid border border-gray-200 cursor-pointer hover:border-blue-700 py-[0.65rem] px-4 mb-8 rounded-[0.8rem] placeholder:text-grey text-blue-600 focus:outline-none  ${nameError && 'border-red-500'} `}
        placeholder='e.g rahman'
        name="name"
        value={formData.name}
        onChange={handleInputChange}/>  
         <div className='flex flex-row'><label htmlFor='id' className='text-blue-400 '>Email adress</label>{emailError && <p className="text-red-500 pl-20 text-sm">{emailError}</p>}</div>
        <input className={`w-96 border-solid border border-gray-200 cursor-pointer hover:border-blue-700 rounded-[0.8rem] py-[0.65rem] px-4  mb-8 placeholder:text-grey text-blue-600 focus:outline-none ${emailError && 'border-red-500'}`}
        placeholder='e.g rahman@gmail.com'
       name='email'
        value={formData.email}
        onChange={handleInputChange}/>  
           <div className='flex flex-row'><label htmlFor='id' className='text-blue-400 '>Phone number</label>{numberError && <p className="text-red-500 pl-20 text-sm">{numberError}</p>}</div>
        <input className={`w-96 border-solid border border-gray-200 cursor-pointer hover:border-blue-700 rounded-[0.8rem] py-[0.65rem] px-4 mb-8 placeholder:text-grey text-blue-600 focus:outline-none  ${numberError && 'border-red-500'}`}
        placeholder='e.g +234 574899'
         value={formData.number}
         name='number'
        onChange={handleInputChange}/>
        <div className='self-end mr-36'>  
       <button className='rounded bg-blue-700 text-white py-5 px-2 w-16 ' onClick={handleNext}> NEXT</button> </div>
    </div>
     
    </div>
  )
}

export default HomeComponent
