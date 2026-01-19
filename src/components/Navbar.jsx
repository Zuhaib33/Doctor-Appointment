import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'


const Navbar = () => {

    const navigate=useNavigate();
    let [login, setLogin]=useState(true);
    let [showMenu,setShowMenu]=useState(false)


  return (
    <div className='flex items-center justify-between py-4 mb-5 mx-5 text-sm border-b border-b-gray-400 tracking-wide'>
      <Link to='/'>
      <img className='w-44 cursor-pointer pl-1'
      src='/logo.svg' alt="Logo" />
      </Link>
      <ul className='hidden md:flex items-start  font-medium gap-5'>
        <NavLink to="/">
            <li className='py-1' >Home</li>
            <hr className='hidden outline-none h-0.5 bg-[#5f6FFF] m-auto'/>
        </NavLink>

        <NavLink to="/doctor">
            <li className='py-1'>All Doctor</li>
            <hr className='hidden outline-none h-0.5 bg-[#5f6FFF] m-auto'/>
        </NavLink>

        <NavLink to="/about">
            <li className='py-1'>About</li>
            <hr className='hidden outline-none h-0.5 bg-[#5f6FFF] m-auto'/>
        </NavLink>

        <NavLink to="/contact">
            <li className='py-1'>Contact</li>
            <hr className='hidden outline-none h-0.5 bg-[#5f6FFF] m-auto'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            login
            ? <div className='flex items-center gap-2 cursor-pointer group relative:'>
                <img className='w-8 rounded-full' src="/profile_pic.png" alt=""  />
                <img className='w-2.5' src="/dropdown_icon.svg" alt="" />
                <div   className={`   absolute hidden top-0 right-20  pt-14  text-base font-medium text-gray-600 z-20 group-hover:block  `}>
                    <div className='bg-stone-100 rounded flex flex-col gap-4 p-4 min-w-48 '>

                        <p onClick={()=>{navigate('/my-profile')}}
                        className='hover:text-black cursor-pointer'>My Profile
                        </p>

                        <p onClick={()=>{navigate('/my-appointments')}}
                        className='hover:text-black cursor-pointer'>My Appointments
                        </p>

                        <p onClick={(prev)=>{setLogin(!prev)}}
                        className='hover:text-black cursor-pointer'>Logout
                        </p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')} className='bg-[#5f6FFF] px-8 py-3 rounded-full text-white hidden md:block font-light'>
        Create Account
      </button>
        }
        <img src="/menu_icon.svg" className='w-6 md:hidden' onClick={()=>setShowMenu(!showMenu)}/>
        {/* For mobile menu */}
        <div className={`${showMenu?'fixed w-full block':'w-0 h-0 hidden'} md:hidden right-0 top-0 bottom-0 z-20 bg-white transition-all`}>
          <div className='flex flex-row justify-between py-6 px-5'>
            <img  className='w-36' src="/logo.svg" alt="" />
            <img className='w-7' src="/cross_icon.png" onClick={()=>setShowMenu(!showMenu)} />
          </div>
          <ul className='flex flex-col gap items-center mt-5 px-5 text-2xl font-semibold'>
            <NavLink  onClick={()=>setShowMenu(false)} to="/"><p className='px-4 py-2  '>Home</p></NavLink>
             <NavLink  onClick={()=>setShowMenu(false)} to="/doctor"><p className='px-4 py-2  '>All Doctors</p></NavLink>
              <NavLink  onClick={()=>setShowMenu(false)} to="/about"><p className='px-4 py-2  '>About</p></NavLink>
               <NavLink  onClick={()=>setShowMenu(false)} to="/contact"><p className='px-4 py-2  '>Contact</p></NavLink>
          </ul>
        </div>
        
      </div>
     
    </div>
  )
}

export default Navbar
