import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSubscription } from '../store/form-slice';
import {selectPlan} from '../store/form-slice';
import { useNavigate } from 'react-router-dom';

const PlansComponent = () => {
    const dispatch = useDispatch();
    const navigate= useNavigate();
     const [isYearly, setIsYearly] = useState(false);
     const [errorVisible, setErrorVisible] = useState(false);
     const isYearlie = useSelector((state) => state.form.isYearlySubscription)
      const selectedPlan = useSelector((state) => state.form.selectedPlan);
useEffect(() => {
setIsYearly(isYearlie)
}, [])
  const toggleSwitch = () => {
    setIsYearly(!isYearly);
    dispatch(toggleSubscription());

  };
  const handlePlanSelection = (planName, planPrice) => {
    dispatch(selectPlan({ name: planName, price: planPrice }));
  };
   const isPlanSelected = selectedPlan.name && selectedPlan.price;
 // const planSelectionError = !isPlanSelected && <p className="text-red-500">Please pick a plan</p>;
   const showError = !isPlanSelected && errorVisible;
  //const toggleErrorVisibility = () => setErrorVisible(!errorVisible);
  return (
    <div className="lg:ml-12 sm:flex sm:flex-col  sm:items-center sm:justify-center sm:z-20  ">
      <div className="sm:rounded-md sm:bg-white sm:space-y-8   sm:-mt-28 ">
        <div className="lg:mt-12 lg:mb-12 ">
          <h2 className="lg:text-2xl text-blue-700 font-bold sm:text-[2.4]">
            Select your plan
          </h2>
          <p className="text-gray-200">
            You have the option of monthly or yearly billing
          </p>
        </div>
        <div className="flex lg:flex-row sm:flex-col lg:space-x-6 sm:space-y-6">
          <div
            className={`rounded border border-gray-300 hover:border-blue-600 lg:mt-6  lg:h-[11rem] sm:h-[5rem] sm:w-64 lg:w-36 lg:pt-24 pl-2 cursor-pointer transition-colors ${
              selectedPlan.name ===
              (isYearlie ? "Arcade(yearly)" : "Arcade(monthly)")
                ? "bg-gray-200 border-4 border-blue-700"
                : "bg-white"
            }`}
            onClick={() =>
              handlePlanSelection(
                isYearlie ? "Arcade(yearly)" : "Arcade(monthly)",
                isYearlie ? 90 : 9
              )
            }
          >
            <h3 className="text-blue-600 font-bold">Arcade</h3>
            {isYearlie ? (
              <div>
                {" "}
                <p className="text-gray-400">$90/year</p>
                <p className="text-xs">2 months free!</p>
              </div>
            ) : (
              <p className="text-gray-400">$9/mo</p>
            )}
          </div>
          <div
            className={`rounded border  border-gray-300 hover:border-blue-600 lg:h-[11rem] sm:h-[5rem] sm:w-64 lg:w-36 lg:pt-24 pl-2 cursor-pointer transition-colors ${
              selectedPlan.name ===
              (isYearlie ? "Advanced(yearly)" : "Advanced(monthly)")
                ? "bg-gray-200 border-4 border-blue-700"
                : "bg-white"
            }`}
            onClick={() =>
              handlePlanSelection(
                isYearlie ? "Advanced(yearly)" : "Advanced(monthly)",
                isYearlie ? 120 : 12
              )
            }
          >
            <h3 className="text-blue-600 font-bold ">Advanced</h3>
            {isYearlie ? (
              <div>
                {" "}
                <p className="text-gray-400">$120/year</p>
                <p className="text-xs">2 months free!</p>
              </div>
            ) : (
              <p className="text-gray-400">$12/mo</p>
            )}
          </div>
          <div
            className={`rounded border  border-gray-300 hover:border-blue-600 lg:h-[11rem] sm:h-[5rem] sm:w-64 lg:w-36 lg:pt-24 pl-2 cursor-pointer transition-colors ${
              selectedPlan.name === (isYearlie ? "Pro(yearly)" : "Pro(monthly)")
                ? "bg-gray-200 border-4 border-blue-700"
                : "bg-white"
            }`}
            onClick={() =>
              handlePlanSelection(
                isYearlie ? "Pro(yearly)" : "Pro(monthly)",
                isYearlie ? 150 : 15
              )
            }
          >
            <h3 className="text-blue-600 font-bold">Pro</h3>
            {isYearlie ? (
              <div>
                {" "}
                <p className="text-gray-400">$150/year</p>
                <p className="text-xs">2 months free!</p>
              </div>
            ) : (
              <p className="text-gray-400">$15/mo</p>
            )}
          </div>
          <br />
        </div>{" "}
        {showError && <p className="text-red-500">Please pick a plan</p>}
        <div className="bg-gray-200 rounded-[0.8rem]  mt-[3.2rem] sma:mt-[2.4rem] py-5 flex justify-center items-center gap-[2.4rem]">
          <div className="flex items-center space-x-2">
            <span
              className={`text-xl font-bold ${
                isYearly ? "text-gray-400" : "text-blue-800"
              } transition-colors duration-300`}
            >
              Monthly
            </span>
            <div
              onClick={toggleSwitch}
              className="relative rounded-full w-14 h-7 bg-blue-700"
            >
              <div
                className={`w-7 h-7 absolute bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out transform ${
                  isYearly ? "translate-x-7" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span
              className={`text-xl font-bold ${
                isYearly ? "text-blue-800" : "text-gray-500"
              } transition-colors duration-300`}
            >
              Yearly
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row lg:gap-80 sm:gap-36 mt-24 sm:ml-6">
        <div className="self-end mr-24">
          <button className="rounded  text-gray-400 py-3 w-16 -mr-40">
            <Link to="/">Go back</Link>
          </button>{" "}
        </div>
        <div className="self-end mr-16">
          <button
            className="rounded bg-blue-700 text-white py-3 px-2 w-16 -mr-48"
            onClick={() => {
              if (!isPlanSelected) {
                setErrorVisible(true); // Show the error if a plan is not selected
              } else {
                navigate("/Addons"); // Navigate to the next page only if a plan is selected
              }
            }}
          >
            NEXT
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default PlansComponent;
