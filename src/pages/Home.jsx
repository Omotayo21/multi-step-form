import React from 'react';
import SideBar from '../components/sideBar';
//import { Link } from 'react-router-dom';
import HomeComponent from '../components/Home-component';

const Home = () => {
    
  return (

      <div className="sm:flex lg:flex-row sm:flex-col  sm:items-center sm:justify-center">
        <SideBar />
        <div className='sm:flex sm:flex-col sm:items-center sm:justify-center'>
          <HomeComponent />
        </div>
      </div>
    
  );
}

export default Home
