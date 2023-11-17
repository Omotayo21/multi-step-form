import React from 'react';
import SideBar from '../components/sideBar';
//import { Link } from 'react-router-dom';
import HomeComponent from '../components/Home-component';

const Home = () => {
    
  return (
    <div className='flex flex-row ml-36' >
        <SideBar />
        <HomeComponent />

       
    </div>
  )
}

export default Home
