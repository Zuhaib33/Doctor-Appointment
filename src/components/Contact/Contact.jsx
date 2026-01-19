import React from 'react'

const Contact = () => {
  return (
    <div>
      <p className='text-4xl items-center text-gray-600 w-full my-10 font-semibold md:ml-50 '>Contact  <span className='font-bold text-black'> US</span></p>
      <div className='flex flex-wrap md:flex-nowrap mt-10'>

        <img className='md:w-1/2 mb-10 ' src="\contact_image.png" alt="" />
        <div className='flex flex-col gap-7 p-2 md:pl-20'>
           <p className='text-xl text-gray-600 font-semibold mb-3'>OUR OFFICE</p>
           <p className='text-gray-600'>00000 Willms Station <br />
               Suite 000, Washington, USA</p>
               <p className='text-gray-600'>Tel: 000-000-0000 <br />
                  Email: greatstackdev@gmail.com</p>
                  <p className='text-xl text-gray-600 font-semibold mb-2'>CAREERS AT PRESCRIPTO</p>
                  <p className='text-gray-600'>Learn more about our teams and job openings</p>
                  <button className=' w-40 py-3 border border-gray-500 px-2 hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
