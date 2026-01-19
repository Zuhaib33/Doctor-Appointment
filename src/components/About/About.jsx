import React from 'react'

const About = () => {
  return (
    <div >
          <p className='text-4xl items-center text-gray-600 w-full my-10 font-semibold md:ml-50 '>ABOUT <span className='font-bold text-black'> US</span></p>
      <div className='flex flex-wrap md:flex-nowrap mt-10'>

        <img className='md:w-1/2 mb-10 h-100' src="\about_image.png" alt="" />
        <div className='flex flex-wrap  p-5'>
      
          <p className='text-gray-600 p-3' >
            Welcome to Prescripto, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At Prescripto, we understand the challenges individuals
            face when it comes to scheduling doctor appointments and managing their health records
          </p>
          <p className='text-gray-600 p-3'>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to
            enhance our platform, integrating the latest advancements to improve user experience and deliver
            superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto
            is here to support you every step of the way.
          </p>
          <p className='font-semibold p-3'>Our Vision</p>
          <p className='text-gray-600 p-3'>
            Our vision at Prescripto is to create a seamless healthcare experience for
            every user. We aim to bridge the gap between patients and healthcare providers,
            making it easier for you to access the care you need, when you need it.
          </p>
        </div>
          </div>
        <div>
          <p className='text-2xl   w-full text-black my-10 '>WHY <span className='text-gray-600 font-semibold'>CHOOSE US</span></p>
          <div className='flex flex-wrap '>
            <div className='itmes-center  border border-gray-200 items-center md:w-1/3 p-15 text-gray-600 hover:bg-blue-700 hover:text-white'>
              <p className='font-bold '>EFFICIENCY:</p>
              <p >Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>
            <div className='itmes-center  border border-gray-200 items-center md:w-1/3 p-15 text-gray-600 hover:bg-blue-700 hover:text-white '>
              <p className='font-bold '>CONVENIENCE:</p>
              <p >Access to a network of trusted healthcare professionals in your area.</p>
            </div>
            <div className='itmes-center  border border-gray-200 items-center md:w-1/3 p-15 text-gray-600 hover:bg-blue-700 hover:text-white'>
              <p className='font-bold   '>PERSONALIZATION:</p>
              <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default About
