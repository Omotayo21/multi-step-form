import React from 'react';
import SidebarList from './SidebarList';

const Sidebar = () => {
  return (
    <>
      <div className='lg:flex lg:flex-col gap-12 lg:pb-72  lg:px-14 lg:pr-28  lg:-ml-48  lg:-mt-24 lg:justify-center bg-no-repeat lg:bg-[url(./assets/images/bg-sidebar-desktop.svg)] lg:h-[56.8rem]  sm:h-[15.2rem] sm:bg-[url(./assets/images/bg-sidebar-mobile.svg)]  sm:flex sm:flex-row sm:mt-8 sm:py-12 sm:px-14 sm:bg-center sm:bg-no-repeat sm:bg-  '>
       <SidebarList num={1} text="your info" path="/" />
       <SidebarList num={2} text="select-plans" path="/Plans" />
       <SidebarList num={3} text="add-ons" path="/Addons"/>
       <SidebarList  num={4} text="Summary" path="/Summary"/>
      </div>
    </>
  )
}

export default Sidebar
