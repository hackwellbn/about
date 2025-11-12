import React from 'react'
import Titles from '../../../../../components/Titles/Titles'
import './Mission.css'

const Mission = () => {
  return (
    <div className='mission'>
        <h1>
            <Titles title="Our Mission" />
        </h1>
        <Titles description='At SoftNet, Our Mission is to create, design and deliver innovative technology solutions that leverage intelligence, science and engineering to 
        solve real-world problems, empower communities, and drive digital transformations for businesses'/>

    </div>
  )
}

export default Mission