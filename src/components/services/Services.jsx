import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual design and design software.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>User research and usability testing.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Communication and presentation.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Typography Skills.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interaction Design Skills.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing and Prototyping Skills.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual Communication Skills.</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Program Frameworks.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing and Debugging.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Attention to Detail.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Management Systems (CMS).</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Git.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge of web servers and their functioning.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge of coding languages such as HTML, CSS, JavaScript, etc.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Expertise in writing codes using front-end programming languages such as Ajax.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Skilled in back-end coding languages such as C#, PHP, Ruby, etc.</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Freelancing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Redesign or improve an existing website.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create a landing page & Websites based on front-end Technologies college Intern's.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Take on projects requiring different programming languages.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaborate with fellow freelancers to work on open-source projects.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Contribute to open-source projects.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services