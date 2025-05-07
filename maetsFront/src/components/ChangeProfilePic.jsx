import React from 'react'

const ChangeProfilePic = (props) => {
  return (
    <div className=' d-flex flex-column align-items-center'>

      <div>
        <img 
          className="rounded-3 rounded-bottom-0 img-fluid" 
          width="129.60px"
          src={props.foto} 
          alt="Profile"
        />
      </div>

      <div className='w-100 text-center'>
        <button className="btnCor text-light border-0 py-2 px-4 rounded-2 rounded-top-0 w-100 w-md-auto">
          Edit Profile
        </button>
      </div>

    </div>
  )
}

export default ChangeProfilePic
