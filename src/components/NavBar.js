import React from 'react'
import { pageLinks, socialLinks } from './data'

import logo from '../images/logo.svg'

const NavBar = () => {
  
    const list = pageLinks.map((link) => {
        const { id, href, text } = link
        return (
            <li key={id}>
                <a href={href} className="nav-link"> {text} </a>
            </li>
        )
    })
    
    const socialLink = socialLinks.map((link) => {
        const { id, href, icon } = link
        return (
            <li key={id}>
                <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
                    <i className={icon}></i>
                </a>
            </li>
        )
    })

  return (
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            {/* <!-- left this comment on purpose --> */}
            <ul className="nav-links" id="nav-links">
                {list}
            </ul>

            <ul className="nav-icons">
                {socialLink}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar