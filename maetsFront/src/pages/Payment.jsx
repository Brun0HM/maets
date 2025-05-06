import React from 'react'
import PayCard from '../components/PayCard'
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/Logo.png";
import perfito from "../assets/profile.png";

const Payment = () => {
  return (
    <>
      <Header Logo={logo} Profile={perfito}/>
    <PayCard />
    <Footer Logo={logo}/>
    </>
  )
}

export default Payment