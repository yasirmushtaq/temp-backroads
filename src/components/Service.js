import React from 'react'

const Service = ({service}) => {
  const {id, icon, title, text} = service;
  return (
    <article key={id} className="service">
        <span className="service-icon"><i className={icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">{text}</p>
        </div>
    </article>
  )
}

export default Service