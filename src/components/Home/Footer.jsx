import React from 'react'

const Footer = () => {
    return (
        <>
        <div className='mt-30 mb-5 flex flex-col md:flex-row md:justify-between '>
            {/* left side */}
            <div className='md:w-1/3 '>
                <img className='w-44 cursor-pointer pl-1 mb-5'
                    src='/logo.svg' alt="Logo" />
                <p className='mt-2 text-gray-600 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestias deleniti quaerat
                    ratione praesentium molestiae mollitia
                    in? Doloribus mollitia, sunt voluptatum consequuntur maxime illum voluptatibus ducimus corrupti
                    earum asperiores molestias.</p>
            </div>

            {/* center */}
            <div className='my-5 md:my-0'>
                <p className='text-lg font-semibold'>COMPANY</p>
                <ul>
                    <li className='text-gray-600 tracking-tight hover:text-gray-800 my-2'>Home</li>
                    <li className='text-gray-600 tracking-tight hover:text-gray-800 my-2'>About us</li>
                    <li className='text-gray-600 tracking-tight hover:text-gray-800 my-2'>Delivery</li>
                    <li className='text-gray-600 tracking-tight hover:text-gray-800 my-2'>Privacy policy</li>
                </ul>
            </div>

            {/* right side */}
            <div>
                <p className='text-lg font-semibold'>GET IN TOUCH</p>
                <p className='text-gray-600 tracking-tight hover:text-gray-800 my-2'>+92301-33445303</p>
                <p className='text-gray-600 tracking-tight hover:text-gray-800 my-2'>simple@gmail.com</p>
            </div>
            
        </div>
        <div className='text-gray-300'>
                <hr />
                <p className='text-center py-5 text-gray-600 '>Visit my profile on Linkedin <a href="https://www.linkedin.com/in/muhammad-zuhaib-zulfiqar-39114336a/">
                <span  className=' text-blue-800 underline cursor-pointer'>Click me</span></a> </p>
            </div>
        </>
    )
    
}

export default Footer
