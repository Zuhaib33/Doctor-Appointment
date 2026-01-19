import React from 'react'
import Header from './Header.jsx'
import SpecialityMenu from './SpecialityMenu.jsx'
import TopDoctor from '../Doctor/TopDoctor.jsx'
import BookAppointment from './BookAppointment.jsx'



const home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctor/>
      <BookAppointment/>
      
    </div>
  )
}

export default home
