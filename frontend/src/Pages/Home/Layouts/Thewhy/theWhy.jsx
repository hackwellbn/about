import React from 'react'
import './theWhy.css'
import { assets } from '../../../../assets/assets'
const theWhy = () => {
  return (
    <div className="container_thewhy">
      <div className="show_case">
        <img src={assets.abedi} alt="" />
      </div>
      <div className='theWhy'>
        <h1>But what is this that SoftNet sees?</h1>
        <p>
            the bright light behind this motivation is to  see our human conditions improved, 
            to see a community where technology can lead to development rather than destruction,
            to see a world where access to information is not a privilege but a right, to see a future 
            where innovation is harnessed for the greater good of all humanity.
        </p>
    </div>
    </div>
  )
}

export default theWhy