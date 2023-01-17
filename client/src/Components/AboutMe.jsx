import React from 'react'
import lax from '../img/IMG_0446.PNG'
import me from '../img/IMG_2844.jpg'
import '../Components/AboutMe.css'

const AboutMe = () => {
    return (
        <div className=' d-flex justify-content-center mb-5' id='About'>
            <div className='divwidth shadow p-4 rounded divbg'>
                <h1>About Me...</h1>
                <hr />
                <p className='psize'>Hello, my name is Jordan and I am a Full Stack Developer. I graduated in 2018 from Alvernia University with a degree in accounting. Out of college I started working as a sales representative for a dairy company, and I worked with this company for four years. Towards the end of my sales representative career, I was looking for something more fulfilling to do with my life. </p>
                <p className='psize'>Something that has always interested me was software development, and I was greeted with the opportunity to start a program at Coding Dojo. For 3 months I studied several stacks of technology through an intense coding bootcamp. Although this was a lot of hard work, it was easily the best decision I have made thus far.</p>
                <p className='psize'>I am currently looking for a company that is willing to give me the opportunity to join their coding team, and I am excited to get started!</p> 
                <div className='flex'>
                    <img className='imgSize p-1' src={me} alt="me" />
                    <img className='imgSize p-1' src={lax} alt="lax" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe