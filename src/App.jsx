import Navbar from './components/Navbar'
import AllDoctors from './components/Doctor/AllDoctors'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import { Route, Routes } from 'react-router'
import DoctotInfo from './components/Doctor/DoctotInfo'
import Footer from './components/Home/Footer'
import Login from './components/login/Login'
import MyProfile from './components/user/MyProfile'
import MyAppointments from './components/user/MyAppointments'
import './App.css'

function App(){

  return (
    <div className='mx-4 sm:mx-[10%]  '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/:speciality" element={<AllDoctors />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/doctor" element={<AllDoctors />} />
        <Route path="/:speciality/:id" element={<DoctotInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments/>}/>


      </Routes>
      <Footer/>

    </div>
  )

}

export default App
