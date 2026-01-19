import React from 'react'
import { doctors } from '../../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const TopDoctor = () => {
    let navigate=useNavigate();
   
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <p className='text-3xl font-semibold tracking-tight mb-4 '>Top Doctors to Book</p>
            <p className='text-gray-700 mb-5'>Simply browse through our extensive list of trusted doctors.</p>
            
            
               <div className='flex flex-wrap md:ml-8 justify-around'>
                 {
                    doctors.slice(0,8).map((items) => (
                        <div onClick={()=>navigate(`/${items.speciality}/${items._id}`)} key={items._id} className=' border border-gray-200   mx-2 my-2 rounded-2xl hover:translate-y-2 transition-all duration-300'>
                            <img className='md:w-60 w-80 lg bg-blue-100 rounded-t-2xl' src={items.image} alt={items.name} />
                            <div className='bg-white mx-4 my-3 '>
                                <p className=' text-green-500 '>● Available</p>
                            <p className='text-lg font-semibold text-gray-900 '>{items.name}</p>
                            <p className=' text-gray-400'>{items.speciality}</p>
                            </div>
                        </div>
                    ))
                }

               
               </div>
                <div className='flex items-center justify-center mt-10'>
                    <button onClick={()=>{navigate("/doctor"),scrollTo(0,0)}} className='bg-blue-100 rounded-full px-10 py-3
                      hover:bg-blue-200 transition-all duration-300 mb-5'>more</button>
                </div>
           
        </div>
    )
}

export default TopDoctor
