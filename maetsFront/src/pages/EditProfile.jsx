import React from 'react'
import ChangeProfilePic from '../components/ChangeProfilePic'
import perfito from "../assets/Profile.png"
import ChangeInfoUser from '../components/ChangeInfoUser'
import Header from '../components/Header'
import Footer from '../components/Footer'

const EditProfile = () => {
  return (
    <>
      <Header />
    <div className="d-flex flex-column min-vh-100">

      <div className="container d-flex flex-column align-items-center justify-content-center flex-fill">
        <div className='mb-4 d-flex justify-content-center'>
          <ChangeProfilePic foto={perfito} />
        </div>
        <ChangeInfoUser />
      </div>
      
    </div>
      <Footer />
    </>
  )
}

export default EditProfile
