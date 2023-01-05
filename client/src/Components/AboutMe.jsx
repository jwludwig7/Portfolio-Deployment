import React from 'react'
import lax from '../img/IMG_0446.PNG'
import aiMe from '../img/IMG_2703.JPG'
import '../Components/AboutMe.css'

const AboutMe = () => {
    return (
        <div className=' d-flex justify-content-center mb-5' id='About'>
            <div className='w-75 shadow p-4 rounded bg-light'>
                <h1>About Me...</h1>
                <p>Hello! My name is Jordan and I am a Full Stack Developer. I was working as a sales rep for a dairy company
                    until August 2022. I knew I was meant for something better. Before I was laid off I was trying to find
                    something new to do with my career. Software Developement always interested me and I would always see the YouTube ads about Software development. Then BOOM... The universe said
                    "your life is not meant to be staring at milk all day". I trasnitioned into software Developement and found myself at Coding Dojo. There I would be studying several stacks of technology in an intense coding bootcamp. Although it was a lot of work it was easliy the best decision I made by far. Now I am currently looking for a comapny that is willing to give me the opportunity to join their coding team!</p>
                <p>Besides from Software Developemet I have a passion for playing video games, editing gaming clips, snowboarding, and
                    lacrosse. </p>
                <div className='flex'>
                    <img className='imgSize p-1' src={lax} alt="lax" />
                    <img className='imgSize p-1' src={aiMe} alt="AIMe" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe