import React, { useState } from 'react'
import PayCard from '../components/PayCard'
import PurchaseSummary from '../components/PurchaseSummary'
import RegisterCard from '../components/RegisterCard'
import RegisteredCards from '../components/RegisteredCards'

const Payment = () => {

  
  return (
    <>
      <RegisterCard />
      <PurchaseSummary />
    </>
  )
}

export default Payment