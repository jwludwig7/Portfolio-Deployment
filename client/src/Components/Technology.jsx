import React from 'react'
import html from '../img/html-5.png'
import css from '../img/css-3.png'
import mern from '../img/mern.png'
import python from '../img/python.png'
import cSharp from '../img/c-sharp.png'
import dotNet from '../img/dot-NET-Core.png'
import '../Components/Technology.css'

const Technology = () => {
  return (
    <div className=' d-flex justify-content-center mb-5' id='Tech'>
      <div className='divwidth shadow p-4 rounded divbg'>
        <h1 className='text-center'>Technology</h1>
        <h6 className='text-center'>During my time at The Dojo I was able to learn the following technologies</h6>
        <hr />
        <div className='cleanup '>
          <img className='imgSizee' src={html} alt="html" />
          <img className='imgSizee' src={css} alt="css" />
          <img className='imgSizee' src={mern} alt="mern" />
          <img className='imgSizee' src={python} alt="python" />
          <img className='imgSizee' src={cSharp} alt="cSharp" />
          <img className='imgSizee' src={dotNet} alt="dotNet" />
        </div>
      </div>
    </div>
  )
}

export default Technology