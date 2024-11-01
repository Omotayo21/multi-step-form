import React from 'react';
import { Link } from 'react-router-dom';

import {useSelector} from 'react-redux'

const SummaryComponent = () => {
  const isYearlie = useSelector((state) => state.form.isYearlySubscription)
 const displayPlan = useSelector((state) => state.form.selectedPlan);
 const displayAddon = useSelector((state) => state.form.selectedAddon);
 const totalAmount = useSelector((state) => state.form.total)
if(displayPlan.name && displayPlan.price) {
  //const priceWithPrefix  
  const priceWithSuffix =  `$${displayPlan.price}` + (isYearlie ? '/yr' : '/mo')
  return (
    <>
      <div className="lg:ml-12 sm:-mt-20 flex flex-col items-center justify-center ">
        <div className=" lg:mt-24 sm:rounded-md sm:bg-white sm:max-w-screen-sm sm:px-4">
          <div>
            <h2 className="lg:text-2xl text-blue-700 font-bold sm:text-[2.4]">
              Finishing up
            </h2>
            <p className="text-gray-800 sm:overflow-auto sm:max-w-screen-sm">
              Double check everything looks okay before confirming
            </p>
          </div>
          <div className="bg-gray-200  border border-blue-200 lg:w-96 sm:w-[18rem] hover:border-blue-700 rounded-[0.8rem]  lg:mt-[3.2rem] sm:mt-[2.4rem] py-2 flex flex-col lg:space-x-4 ">
            <div>
              <h2 className=" text-blue-700 font-bold sm:text-[2.4] lg:pl-4">
                {displayPlan.name}
              </h2>
              <Link
                className="underline text-gray-700 text-sm pl-4"
                to="/Plans"
              >
                Change
              </Link>
              <p className="font-bold lg:pl-64 sm:pl-[13rem] -mt-12 text-blue-700">
                {priceWithSuffix}
              </p>
              <br />
            </div>

            <hr className="bg-red-400 lg:w-80 mx-auto  my-4 h-0.5 border-0 " />
            <div className="flex flex-row">
              <ul className="flex flex-col space-y-2">
                {displayAddon.map((addon, index) => (
                  <li key={index} className="flex  justify-between">
                    <p className="text-gray-700 text-sm">{addon.name}</p>
                    <p className=" text-blue-700 text-sm font-bold lg:pl-[9.5rem] sm:pl-24">
                      ${addon.price}
                      {isYearlie ? "/yr" : "/mo"}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h2 className="text-gray-700 text-sm ml-4 mt-2">Total Amount: </h2>
          <p className=" text-blue-700 text-lg font-bold lg:pl-64 sm:pl-48 -mt-6">
            ${totalAmount}
            {isYearlie ? "/yr" : "/mo"}
          </p>
        </div>

        <div className="flex flex-row lg:gap-64 sm:gap-36 sm:mt-28 lg:mt-48 sm:ml-12">
          <div className="self-end lg:mr-24">
            <button className="rounded  text-gray-400 py-3  w-16 lg:-mr-36">
              <Link to="/Addons">Go back</Link>
            </button>{" "}
          </div>
          <div className="self-end mr-24">
            <button className="rounded bg-blue-700 text-white py-3 px-2 w-20 ">
              <Link to="/Finished">Confirm</Link>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
}

export default SummaryComponent
