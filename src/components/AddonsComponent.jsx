import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddon } from '../store/form-slice';

const AddonsComponent = () => {
  const dispatch = useDispatch();
  const [selectedAddons, setSelectedAddons] = useState([]);
    const isYearlie = useSelector((state) => state.form.isYearlySubscription);
     const selectedAddon= useSelector((state) => state.form.selectedAddon);
   const handleAddonSelection = (planName, addonPrice) => {
    dispatch(selectAddon({ name: planName, price: addonPrice }));
  };
   
  const handleAddonClick = (addonName, addonPrice) => {
  // Check if the addon is already selected
 const isSelected = selectedAddons.some((addon) => addon.name === addonName);

  if (isSelected) {
    // If already selected, remove it from the selectedAddons
    setSelectedAddons((prevSelectedAddons) =>
      prevSelectedAddons.filter((addon) => addon.name !== addonName)
    );
  } else {
    // If not selected, add it to the selectedAddons
    setSelectedAddons((prevSelectedAddons) => [
      ...prevSelectedAddons,
      { name: addonName, price: addonPrice },
    ]);
  }
};

  return (
    <div className="lg:ml-28">
      <div className="lg:mt-24 sm:-mt-20 sm:px-2 mb-12 ml-2 sm:bg-white sm:rounded-md">
        <h2 className="lg:text-2xl text-blue-700 font-bold sm:text-[2.4]">
          Pick Add-ons
        </h2>
        <p className="text-gray-800">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      <div>
        <div
          className="bg-gray-200  border border-blue-200 h-16 lg:w-96 sm:w-[23rem] hover:border-blue-700 rounded-[0.8rem]  mt-[3.2rem] sma:mt-[2.4rem] py-2 flex space-x-4 "
          onClick={() =>
            handleAddonSelection("online services", isYearlie ? 10 : 1)
          }
        >
          <input type="checkbox" className="ml-8 cursor-pointer" />
          <div>
            <h2 className="lg:text-sm text-blue-700 font-bold sm:text-[2.4]">
              Online services
            </h2>
            <p className="text-gray-800 text-xs">
              Access to multi-players games
            </p>
          </div>
          {isYearlie ? (
            <div>
              {" "}
              <p className="text-xs lg:pl-24 sm:pl-12 ">+10$/yr</p>
            </div>
          ) : (
            <p className="text-xs lg:pl-28 sm:pl-12">+1$/mo</p>
          )}
        </div>
        <div className="bg-gray-200  border border-blue-200 h-16 lg:w-96 sm:w-[23rem] hover:border-blue-700 rounded-[0.8rem]  mt-[3.2rem] sma:mt-[2.4rem] py-2 flex space-x-4 ">
          <input
            type="checkbox"
            className="ml-8 cursor-pointer"
            onChange={() =>
              handleAddonSelection("Large storage", isYearlie ? 20 : 2)
            }
          />
          <div>
            <h2 className="lg:text-sm text-blue-700 font-bold sm:text-[2.4]">
              Large storage
            </h2>
            <p className="text-gray-800 text-xs">Extra 1TB of storage left</p>
          </div>
          {isYearlie ? (
            <div>
              {" "}
              <p className="text-xs lg:pl-32 sm:pl-12">+20$/yr</p>
            </div>
          ) : (
            <p className="text-xs lg:pl-28 sm:pl-12">+2$/mo</p>
          )}
        </div>
        <div
          className="bg-gray-200  border border-blue-200 sm:h-24 lg:h-20 lg:w-96 sm:w-[23rem] hover:border-blue-700 rounded-[0.8rem]  mt-[3.2rem] sm:mt-[2.4rem] py-2 flex space-x-4 "
          onClick={() =>
            handleAddonSelection("Customizable profile", isYearlie ? 20 : 2)
          }
        >
          <input type="checkbox" className="ml-8 cursor-pointer" />
          <div className="">
            <h2 className="lg:text-sm text-blue-700 font-bold sm:text-[2.4]">
              Customizable Profile
            </h2>
            <p className="text-gray-800 text-xs">
              Customize theme on your profile
            </p>
          </div>
          {isYearlie ? (
            <div>
              {" "}
              <p className="text-xs lg:pl-20 sm:pl-12">+20$/yr</p>
            </div>
          ) : (
            <p className="text-xs lg:pl-28 sm:pl-12">+2$/mo</p>
          )}
        </div>
      </div>
      <div className="flex flex-row lg:gap-[16.2rem] sm:gap-36 mt-24 sm:ml-6">
        <div className="self-end mr-24">
          <button className="rounded  text-gray-400 py-3  w-16 -mr-40">
            <Link to="/Plans">Go back</Link>
          </button>{" "}
        </div>
        <div className="self-end mr-24">
          <button className="rounded bg-blue-700 text-white py-3 px-2 w-16 -mr-40">
            <Link to="/Summary">NEXT</Link>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default AddonsComponent
