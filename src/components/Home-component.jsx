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
    <div className="flex flex-col lg:w-full lg:space-x-8 lg:ml-16  sm:px-2 sm:max-w-screen-sm sm:rounded-md sm:bg-white sm:-mt-28 ">
      <div className="lg:mt-20 mb-12 lg:ml-8">
        <h2 className="lg:text-2xl text-blue-700 font-bold sm:text-[2.4]">
          Personal info
        </h2>
        <p className="text-gray-300">
          Please provide your name, email address, and phone number
        </p>
      </div>
      <div className="mb-6">
        <div className="flex flex-row">
          <label htmlFor="id" className="text-blue-400 ">
            Name
          </label>
        </div>
        <input
          className={`lg:w-96 border-solid border border-gray-200 cursor-pointer hover:border-blue-700 py-[0.65rem] px-4 rounded-[0.8rem] placeholder:text-grey text-blue-600 focus:outline-none  ${
            nameError && "border-red-500"
          } `}
          placeholder="e.g rahman"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {nameError && <p className="text-red-500  text-sm">{nameError}</p>}
      </div>
      <div className="mb-6">
        <div className="flex flex-row">
          <label htmlFor="id" className="text-blue-400 ">
            Email adress
          </label>
        </div>
        <input
          className={`lg:w-96 border-solid border border-gray-200 cursor-pointer hover:border-blue-700 rounded-[0.8rem] py-[0.65rem] px-4  placeholder:text-grey text-blue-600 focus:outline-none ${
            emailError && "border-red-500"
          }`}
          placeholder="e.g rahman@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {emailError && <p className="text-red-500  text-sm">{emailError}</p>}
      </div>
      <div className="mb-6">
        <div className="flex flex-row">
          <label htmlFor="id" className="text-blue-400 ">
            Phone number
          </label>
        </div>
        <input
          className={`lg:w-96 border-solid border border-gray-200 cursor-pointer hover:border-blue-700 rounded-[0.8rem] py-[0.65rem] px-4  placeholder:text-grey text-blue-600 focus:outline-none  ${
            numberError && "border-red-500"
          }`}
          placeholder="e.g +234 574899"
          value={formData.number}
          name="number"
          onChange={handleInputChange}
        />
        {numberError && <p className="text-red-500 text-sm">{numberError}</p>}
      </div>
      <div className="sm:self-end ">
        <button
          className="rounded bg-blue-700 text-white py-5 px-2 w-16 lg:relative lg:-mr-64 "
          onClick={handleNext}
        >
          {" "}
          NEXT
        </button>{" "}
      </div>
    </div>
  );
}

export default HomeComponent
