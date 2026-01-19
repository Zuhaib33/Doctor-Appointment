
import { doctors } from '../../assets/assets_frontend/assets'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const AllDoctors = () => {
    let navigate=useNavigate();
    let [showMenu,setShowMenu]=useState(false)
    let [filter, setFilter] = useState([])
    let { speciality } = useParams();
    console.log(speciality)

    let filterArray = () => {
        if (speciality) {
            setFilter(doctors.filter(itm => itm.speciality === speciality))
        }
        
        else(
            setFilter(doctors)
        )
    }

    useEffect(() => {
        filterArray()
    }

        , [speciality,doctors])


    return (
        <div>
            <p className='text-gray-700  font-semibold'>Browse through the doctors specialist.</p>
            <button onClick={()=>setShowMenu(prev=>!prev)} className={`px-6 py-2 border border-zinc-400 rounded-4xl my-4 md:hidden ${showMenu?"bg-blue-600 text-white":""}`}>Filter</button>
            <div className='flex flex-col md:flex-row  justify-start '>
                
                {/* right side  */}
                <div className={` md:block ${showMenu?'block':"hidden"}`}>
                    <p onClick={()=>{setShowMenu(prev=>!prev),navigate('/doctor')}} className=' border-gray-400 border text-gray-600 my-2 py-2 pr-12 rounded-lg  hover:text-gray-800 cursor-pointer pl-4 text-sm hover:bg-zinc-100  '>
                        All Doctors</p>
                    <p onClick={()=>{setShowMenu(prev=>!prev),navigate('/General%20physician')}} className=' border-gray-400 border text-gray-600 my-2 py-2 pr-12 rounded-lg hover:text-gray-800 cursor-pointer pl-4 text-sm hover:bg-zinc-100  '>
                        General physician</p>
                    <p onClick={()=>{setShowMenu(prev=>!prev),navigate('/Gynecologist')}} className=' border-gray-400 border text-gray-600 my-2 py-2 pr-12 rounded-lg hover:text-gray-800 cursor-pointer pl-4 text-sm hover:bg-zinc-100  '>
                        Gynecologist</p>
                    <p onClick={()=>{setShowMenu(prev=>!prev),navigate('/Dermatologist')}} className=' border-gray-400 border text-gray-600 my-2 py-2 pr-12 rounded-lg hover:text-gray-800 cursor-pointer pl-4 text-sm hover:bg-zinc-100  '>
                        Dermatologist</p>
                    <p onClick={()=>{setShowMenu(prev=>!prev),navigate('/Pediatricians')}} className=' border-gray-400 border text-gray-600 my-2 py-2 pr-12 rounded-lg hover:text-gray-800 cursor-pointer pl-4 text-sm hover:bg-zinc-100  '>
                        Pediatricians</p>
                    <p onClick={()=>{setShowMenu(prev=>!prev),navigate('/Neurologist')}} className=' border-gray-400 border text-gray-600 my-2 py-2 pr-12 rounded-lg hover:text-gray-800 cursor-pointer pl-4 text-sm hover:bg-zinc-100  '>
                        Neurologist</p>
                    <p onClick={()=>{setShowMenu(prev=>!prev),navigate('/Gastroenterologist')}} className=' border-gray-400 border text-gray-600 my-2 py-2 pr-12 rounded-lg hover:text-gray-800 cursor-pointer pl-4 text-sm hover:bg-zinc-100  '>
                        Gastroenterologist</p>
                </div>
                {/* doctor */}
                <div className='flex flex-wrap md:ml-8 justify-around'>
                    {
                        filter.map((items) => (
                            <div onClick={()=>navigate(`/${items.speciality}/${items._id}`)} key={items._id} className=' border border-gray-200   mx-2 my-2 rounded-2xl hover:translate-y-2 transition-all duration-300'>
                                <img className='md:w-50  bg-blue-100 rounded-t-2xl' src={items.image} alt={items.name} />
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

export default AllDoctors
