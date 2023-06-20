import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/1.png'
import HeaderSocials from './HeaderSocials'
import Type from './Type'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Sanket Rathod</h1>
        <h2 className="text-light"><Type/></h2>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header