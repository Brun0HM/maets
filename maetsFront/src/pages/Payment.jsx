import React, { useState } from 'react'
import PayCard from '../components/PayCard'
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/Logo.png";
import perfito from "../assets/profile.png";
import PurchaseSummary from '../components/PurchaseSummary'
import RegisterCard from '../components/RegisterCard'
import RegisteredCards from '../components/RegisteredCards'

const Payment = () => {
  return (
    <>
      <Header Logo={logo} Profile={perfito}/>
      <div className="container my-5">
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <RegisteredCards />
        <RegisterCard />
        <PurchaseSummary />
      </div>
    </div>
    <Footer Logo={logo}/>
    </>
  )
}

export default Payment
