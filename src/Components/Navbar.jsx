import React from 'react'
import "./navbar.css"
import logo from "../assets/images/logo.png"
const Navbar = () => { return (
    <div>
      

<nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
  <div className=" flex flex-wrap items-center justify-between mx-1 p-4">
  
      <img src={logo} className="w-[144px] h-[56px]" alt="Flowbite Logo"/>
     
 <div >
  <ul className='flex justify-evenly  items-center px-10 gap-24 font-[600]'>
    <li className=' relative underline-offset-hover'>Home</li>
    <li className=' relative underline-offset-hover'>Buy</li>
    <li className=' relative underline-offset-hover'>Rent</li>
    <li className=' relative underline-offset-hover'>Sell</li>
    <li className=' relative underline-offset-hover'>Find Agents</li>
    <li className=' relative underline-offset-hover'>News</li>
    <li className=' relative underline-offset-hover'>Commersial</li>
  </ul>
 </div>
 <div className='flex gap-5 font-[600]'><button className="relative underline-offset-hover">Log in</button><button className=' bg-[#33691E] text-white font-[600] px-6 py-3 rounded-[8px]'>Sign Up</button></div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
