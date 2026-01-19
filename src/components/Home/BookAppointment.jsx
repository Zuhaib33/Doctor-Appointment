import React from 'react'

const BookAppointment = () => {
    return (
        <div className='flex  md:flex-row  items-center bg-[#5f6FFF] rounded-lg px-6 md:px-10 md:mx-8 mt-10'>
            {/* let side */}
            <div className='flex  flex-col  md:w-1/2 items-start justify-start gap-4 m-auto py-10'>
                <p className='text-2xl md:text-5xl text-white font-bold leading-tight'>
                    Book Appointment <br /> With 100+ <br />Trusted Doctors
                </p>
                <button className='flex  text-gray-600 bg-white p-2 rounded-full w-fit mt-2 hover:px-3 transition-all duration-200'>
                    Create Account
                </button>

            </div>

            {/* right side img */}

            <div className='md:w-1/2 relative md:mt-10'>
                <img className='w-full  md:relative bottom-0 top-0 h-60 md:h-90 rounded-lg' src="\appointment_img.png" alt="" />

            </div>

        </div>
    )
}

export default BookAppointment
