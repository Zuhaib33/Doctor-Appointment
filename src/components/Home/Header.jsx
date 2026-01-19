import React from 'react'


const home = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row flex-wrap items-center bg-[#5f6FFF] rounded-lg px-6 md:px-10 md:mx-8'>
      {/* left side */}
      <div className='flex  flex-col  md:w-1/2 items-start justify-start gap-4 m-auto py-10'>
        <h2 className='text-3xl md:text-4xl text-white font-bold leading-tight'>Book Appointment <br />
          With Trusted Doctors</h2>
          <div className='flex flex-col md:flex-row items-center gap-3 text-white '>
            <img className='' src="\group_profiles.png" alt="" />
            <p>
              Simply browse through our extensive list of trusted doctors,<br />
              schedule your appointment hassle-free.
            </p>
          </div>
          <a href='#speciality' className='flex bg-white p-2 rounded-full w-fit mt-2  transition-all duration-500'>
            
            <button className=' text-gray-600 hover:text-black'>
            Book Appointmment
          </button>
           <img className='pl-3 ' src="\arrow_icon.svg" alt="" />
            </a>
          
      </div>
      {/* right side */}
      <div className='md:w-1/2 relative md:mt-25'>
        <img className='w-full md:relative bottom-0 top-0 h-auto rounded-lg' src="\header_img.png" alt="" />
       
      </div>
    </div>
    </>
  )
}

export default home
