import React from 'react'
import Title from './Title'
import { servicesData } from './data'
import Service from './Service'

const Services = () => {

  const serviceList = servicesData.map((service) => {
    const { id } = service

    return (
      <Service key={id} service={service} />
    )
  })

  return (
    <section className="section services" id="services">
      <Title title='our' subtitle='services' />
      <div className="section-center services-center">
        {serviceList}
      </div>
    </section>
  )
}

export default Services