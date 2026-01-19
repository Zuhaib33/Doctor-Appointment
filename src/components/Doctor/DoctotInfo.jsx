import React from 'react'
import { doctors } from '../../assets/assets_frontend/assets'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AppointmentSchedule from './AppointmentSchedule'

const DoctotInfo = () => {
    let navigate = useNavigate();
    let [filter, setFilter] = useState([])
    let [relativDoc ,setRelativeDoc]=useState([])
    let { id,speciality } = useParams();
    console.log(id)
    console.log(speciality)

    let filterArray = () => {
        if (id) {
            setFilter(doctors.filter(itm => itm._id === id))
        }

        else (
            setFilter(doctors)
        )
    }

    // for relative doctor
     let relativDocArray = () => {
        if (speciality) {
            setRelativeDoc(doctors.filter(itm => itm.speciality === speciality && itm._id != id))
        }
        
        else(
            setFilter(doctors)
        )
    }

    


    useEffect(() => {
        filterArray()
        relativDocArray()
    }

        , [id, doctors,speciality])
    return (
        <div>
            {
                filter.map((items,index) => (
                    <div className='flex flex-wrap md:flex-nowrap ' key={index}>
                        <img className='md:w-70 bg-blue-500 rounded-2xl md:m-5 mr-5 mb-2' src={items.image} alt="" />
                        <div className=' tracking-tight  md:m-5 border border-gray-300 p-5 rounded-2xl '>
                            <p className='text-3xl font-bold text-gray-700'>{items.name}</p>
                            <div className='flex flex-wrap text-gray-600 mt-2'>
                            <p className='text-gray-600'>{items.degree}</p>- <p>{items.speciality}</p>
                            <span className='border border-gray-200 px-2 rounded-full ml-2'>{items.experience}</span>
                            </div>
                            <div className='mt-3'>
                                <p className='font-semibold'>About</p>
                                <p className='text-gray-600'>{items.about}</p>
                            </div>
                            <div className='flex mt-2'>
                                <p className='font-semibold text-gray-700'>Appointment fee:</p>
                                <span className='font-semibold ml-2'>${items.fees}</span>

                            </div>

                        </div>
                        
                    </div>
                    

                ))
            }
            
          <AppointmentSchedule/>

          <div>
            <div className='flex flex-col  w-full  items-center mt-10 '>
                <p className='text-3xl font-bold mb-2 text-gray-700'>Related Doctors</p>
                <p className='text-gray-600'>Simply browse through our extensive list of trusted doctors.</p>
            </div>
             <div className='flex flex-wrap md:ml-8 justify-around md:justify-start mt-5'>
                    {
                        relativDoc.map((items) => (
                            <div onClick={()=>navigate(`/${items.speciality}/${items._id}`)} key={items._id} className=' border border-gray-200   mx-2 my-2 rounded-2xl hover:translate-y-2 transition-all duration-300'>
                                <img className=' md:w-70 lg bg-blue-100 rounded-t-2xl' src={items.image} alt={items.name} />
                                <div className='bg-white mx-4 my-3 '>
                                    <p className=' text-green-500 '>● Available</p>
                                    <p className='text-lg font-semibold text-gray-900 '>{items.name}</p>
                                    <p className=' text-gray-400'>{items.speciality}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
          </div>
        </div>
    )
}

export default DoctotInfo
