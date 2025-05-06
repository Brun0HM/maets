import React from 'react'
import PurchaseSummary from '../components/PurchaseSummary'
import RegisterCard from '../components/RegisterCard'
import RegisteredCards from '../components/RegisteredCards'

const Payment = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <RegisteredCards />
        <RegisterCard />
        <PurchaseSummary />
      </div>
    </div>
  )
}

export default Payment
