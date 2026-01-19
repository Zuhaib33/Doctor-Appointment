import React from 'react'
import { doctors } from '../../assets/assets_frontend/assets'

const MyAppointments = () => {
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b gap-5 text-2xl'>My Appointments</p>
      <div>
        {
          doctors.slice(0,2).map((items,index)=>(
               <div key={index} className='flex flex-col md:flex-row shadow my-5 '>
                <img className='w-35 bg-indigo-50 m-1' src={items.image} alt="" />
                <div className='flex md:justify-between  justify-start flex-wrap w-full'>
                <div className='ml-5'>
                  <p className='font-semibold'>{items.name}</p>
                  <p className='text-sm text-gray-700'>{items.speciality}</p>
                  <p className='font-semibold'>Address:</p>
                  <p className='text-sm text-gray-700'>{items.address.line1}</p>
                  <p className='text-sm text-gray-700'>{items.address.line2}</p>
                  <p className='text-sm text-gray-700'> <span  className='font-semibold text-black'>Date & Time:</span> 13,jan,2025 | 9:30pm</p>
                </div>
                
                <div className='flex md:flex-col gap-5 m-5' >
                  <button className='border border-gray-300 py-2 px-3 hover:bg-green-800 hover:text-white'>Pay Online</button>
                  <button className='border border-gray-300 py-2 px-3 hover:bg-red-800 hover:text-white'> Cancel appointments</button>
                </div>
               </div>
               </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default MyAppointments
