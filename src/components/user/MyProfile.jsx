import React, { useState } from 'react'

const MyProfail = () => {

  let [userdata, setuserdata] = useState({
    name: 'Muhammad Zuhaib',
    email: 'zuhaib@gamil.com',
    phone: "000000000000",
    image: '/profile_pic.png',
    address: 'City Lahore Punjab Pakistan',
    gender: "Male",
    dob: '2003-11-05'
  })
  let [state, setState] = useState(false)
  return (
    <div>
      {
        state ?
          <>
            <img className='w-45 mb-5 mt-8' src={userdata.image} alt="" />
            <div className='flex '>
              <p className='text-gray-700 mr-8'>Image-Url</p>
              <input className='bg-blue-100 px-2 rounded-lg ' type="url" value={userdata.image} onChange={(e) => setuserdata((prev) => ({ ...prev, image: e.target.value }))} />

            </div> </>
          : <img className=' mb-5 mt-10' src={userdata.image} alt="" />
      }


      {
        state ?
          <input className='bg-blue-100 px-2 rounded-lg my-2 ' type="text" value={userdata.name} onChange={(e) => setuserdata((prev) => ({ ...prev, name: e.target.value }))} />
          : <p className='block text-2xl mt-3 mb-2 font-semibold '>{userdata.name}</p>
      }

      <hr className='  text-gray-500 w-1/2' />
      <p className='mt-5 underline text-gray-700'>CONTACT INFORMATION</p>

      <div className='flex flex-wrap mt-5 g-5' >
        <p className='font-semibold text-gray-600 mr-10'>Email id:</p>
        {
          state ?
            <input className='bg-blue-100 px-2 rounded-lg ' type="email" value={userdata.email} onChange={(e) => setuserdata((prev) => ({ ...prev, email: e.target.value }))} />
            : <p>{userdata.email}</p>
        }
      </div>

      <div className='flex flex-wrap mt-5 g-5'>
        <p className='font-semibold text-gray-600 mr-12'>Phone:</p>
        {
          state ?
            <input className='bg-blue-100 px-2 rounded-lg ' type="number" value={userdata.phone} onChange={(e) => setuserdata((prev) => ({ ...prev, phone: e.target.value }))} />
            : <p>{userdata.phone}</p>
        }
      </div>

      <div className='flex flex-wrap mt-5 g-5'>
        <p className='font-semibold text-gray-600 mr-8'>Address:</p>
        {
          state ?
            <input className='bg-blue-100 px-2 rounded-lg ' type="text" value={userdata.address} onChange={(e) => setuserdata((prev) => ({ ...prev, address: e.target.value }))} />
            : <p>{userdata.address}</p>
        }
      </div>

      <p className='font-semibold text-gray-600 mr-10 mt-10'>BASIC INFORMATION</p>
      <div className='flex flex-wrap mt-5 g-5'>
        <p className='font-semibold text-gray-600 mr-8'>Gender:</p>
        {
          state ?
            <select value={userdata.gender}
              onChange={(e) =>
                setuserdata(prev => ({ ...prev, gender: e.target.value }))
              }>
              <option value="Male">Male</option>
              <option value="female">Female</option>
            </select>
            : <p> {userdata.gender}</p>
        }
      </div>

      <div className='flex flex-wrap mt-5 g-5'>
        <p className='font-semibold text-gray-600 mr-6'>Birthday:</p>
        {
          state ?
            <input className='bg-blue-100 px-2 rounded-lg ' type="date" value={userdata.dob}
              onChange={(e) =>
                setuserdata(prev => ({ ...prev, dob: e.target.value }))
              } />
            : <p>{userdata.dob}</p>

        }

      </div>



      {
        state ?
          <button className='border border-blue-500 py-2 px-4 mt-7 rounded-l-4xl rounded-r-4xl' onClick={() => setState(false)}>Save information</button>
          : <button className='border border-blue-500 py-2 px-6 mt-7 rounded-l-4xl rounded-r-4xl' onClick={() => setState(true)}>Edit</button>
      }



    </div>

  )
}

export default MyProfail
