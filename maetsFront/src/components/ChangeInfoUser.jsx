import React from 'react'

const ChangeInfoUser = () => {
  return (
    <div className="w-100 d-flex flex-column align-items-center">

      <div className='w-100 d-flex flex-column flex-md-row justify-content-center mb-4 gap-3'>
        <input
          className="border-0 rounded-3 inputCredit text-light p-3 flex-fill"
          placeholder="Name"
          type="text"
        />
        <input
          className="border-0 rounded-3 inputCredit text-light p-3 flex-fill"
          placeholder="Email"
          type="text"
        />
      </div>

      <div className='w-100 d-flex flex-column flex-md-row justify-content-center gap-3'>
        <input
          className="border-0 rounded-3 inputCredit text-light p-3 flex-fill"
          placeholder="Password"
          type="password"
        />
        <button className='btnCor rounded-3 text-light border-0 p-3 flex-fill'>
          Save
        </button>
      </div>

    </div>
  )
}

export default ChangeInfoUser
