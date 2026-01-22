import React from 'react'
import { specialityData } from '../../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col justify-center items-center py-16 text-gray-800 gap-4' id='speciality'>
      <p className='text-3xl font-medium'>Find by Speciality</p>

      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors,
        schedule your appointment hassle-free.
      </p>

      <div className='flex sm:justify-center gap-4 w-full overflow-x-auto md:m-6'>
        {specialityData.map((items, index) => (
          <Link
            key={index}
            to={`/${items.speciality}`}
           
            className='flex flex-col items-center text-xs cursor-pointer
                       hover:-translate-y-2 transition-all duration-500'
          >
            <img
               onClick={ ()=>scrollTo(0,0)}
              src={items.image}
              alt={items.speciality}
              className='w-16 sm:w-24 mb-2'
            />
            <p>{items.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
