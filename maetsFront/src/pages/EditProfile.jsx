import React from 'react'
import ChangeInfoUser from '../components/ChangeInfoUser'
import Header from '../components/Header'
import Footer from '../components/Footer'
import logo from '../assets/Logo.png'

const EditProfile = () => {
  return (
    <>
      <Header Logo={logo} />
    <div className="d-flex flex-column min-vh-100">

      <div className="container d-flex flex-column align-items-center justify-content-center flex-fill">
        
        <ChangeInfoUser />
      </div>
      
    </div>
      <Footer />
    </>
  )
}

export default EditProfile
