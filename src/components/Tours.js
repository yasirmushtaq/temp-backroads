import React from 'react'
import Title from './Title'
import { toursData } from './data'
import TourComponent from './TourComponent'

const Tours = () => {



const toursCards = toursData.map ((tour) => {
   const { id, image, date, title, info, location, duration, cost } = tour

    return (
        <TourComponent key={id} props={tour} />      
    )
  })    
  return (
    <section className="section" id="tours">
        <Title title='featured' subtitle='tours' />
        <div className="section-center featured-center">
            {toursCards}    
        </div>
    </section>
  )
}

export default Tours