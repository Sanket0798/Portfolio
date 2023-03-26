import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
     <h5>Get to know</h5>
     <h2>About Me</h2>

     <div className="container about__container">
      <div className="about__me">
<div className="about__me-image">
  <img src={ME} alt="About image" />
</div>
      </div>

      <div className="about__content">
<div className="about__cards">
  <article className='about__card'>
    <FaAward className='about__icon'/>
<h5>Experience</h5>
<small>Fresher</small>
  </article>

  <article className='about__card'>
    <FiUsers className='about__icon'/>
<h5>CLients</h5>
<small>200+ </small>
  </article>

  <article className='about__card'>
    <VscFolderLibrary className='about__icon'/>
<h5>Projects</h5>
<small>10+ completed</small>
  </article>
</div>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam ex esse consectetur cumque placeat voluptates aperiam, adipisci incidunt, nisi blanditiis magni praesentium sequi, excepturi impedit totam earum suscipit hic!
</p>

<a href="#contact" className='btn btn-primary'>Let's talk</a>
      </div>
     </div>
      </section>
  )
}

export default About