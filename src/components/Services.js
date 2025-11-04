import React from 'react'
import Title from './Title'
import { servicesData } from './data'

const Services = () => {

  const serviceList = servicesData.map((service) => {
    const { id, icon, title, text } = service
    return (
      <article key={id} className="service">
        <span className="service-icon"><i className={icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">{text}</p>
        </div>
      </article>
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