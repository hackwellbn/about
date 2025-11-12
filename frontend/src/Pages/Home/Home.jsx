import React from 'react'
import Hero from './Layouts/Hero/Hero'
import Mission from './Layouts/Hero/Mission/Mission'
import Leadership from './Layouts/Hero/Leadership/Leadership'
import Thewhy from './Layouts/Thewhy/theWhy'
import CoreValues from './Layouts/CoreValues/CoreValues'
import Vision from './Layouts/Vision/vision'
import Purpose from './Layouts/purpose/purpose'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Mission/>
        <Leadership/>
        <Thewhy/>
        <CoreValues/>
        <Vision/>
        <Purpose/>

    </div>
  )
}

export default Home