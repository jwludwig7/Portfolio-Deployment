import React from 'react'
import email from '../img/email.png'
import resume from '../img/resume.png'
import linkedin from '../img/linkedin.png'
import github from '../img/githublogo.png'
import '../Components/ContactMe.css'

const ContactMe = () => {

  return (
    <div className='d-flex justify-content-center mb-5' id='Contact'>
      <div className="w-75 shadow p-4 rounded bg-light">
        <h2 className="mb-3 text-center">Contact Me</h2>
        <div className='d-flex justify-content-evenly'>

          <div className='example'>
            <a href="mailto:jwludwig7@gmail.com"><img className='logosize' src={email} alt="email" /></a>
            <div className='content'>
              <div className='text'>Email</div>
            </div>
          </div>
          <div className='example'>
            <a href="https://drive.google.com/file/d/1lNewbp4q7aP9Z1-HalQd8r6HetX40T8U/view?usp=sharing"><img className='logosize' src={resume} alt="resume" /></a>
            <div className='content'>
              <div className='text'>Resume</div>
            </div>
          </div>
          <div className='example'>
            <a href="https://www.linkedin.com/in/jordan-ludwig-66b535156/"><img className='logosize' src={linkedin} alt="linkedin" /></a>
            <div className='content'>
              <div className='text'>Linked-In</div>
            </div>
          </div>
          <div className='example'>
            <a href="https://github.com/jwludwig7"><img className='logosize' src={github} alt="github" /></a>
            <div className='content'>
              <div className='text'>Github</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe