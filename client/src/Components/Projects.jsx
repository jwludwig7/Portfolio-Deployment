import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player'
import rRoomvid from '../img/rRoomSpedUp2.mp4'
import rRoomlogo from '../img/rroom-logo.png'
import jJokevid from '../img/jJoke.mp4'
import jJokelogo from '../img/jjoke-logo.png'
import bBoxvid from '../img/bBox_Trim.mp4'
import bBoxlogo from '../img/bBox.png'
import githublogo from '../img/github.png'
import '../Components/Projects.css'

const Projects = () => {
    return (
        <div className=' d-flex justify-content-center mb-5' id='Projects'>
            <div className='w-75 shadow p-4 rounded bg-light'>
                <h1 className='text-center'>Projects</h1>
                <h6 className='text-center'>In the last couple months I was able to complete three technical projects.</h6>
                <div>
                    <hr />
                    <div className='d-flex justify-content-between mt-3 p-3'>
                        <h3>rRoom</h3>
                        <a href="https://github.com/jwludwig7/rRoom"><img src={githublogo} alt="github" /></a>
                    </div>
                    <div className='d-flex smallerscreen'>
                        <h6 className='p-3 flex-1'>
                            <ul>
                                <li className='p-2'>A Yelp inspired project to leave reviews on public restrooms. I have been inspired to make this app all my life because of the many jobs I have had that were not in a traditional office setting.</li>
                                <li className='p-2'>The technologies I used during the creation of this project was Python, MySQL, Flask, and Google Maps API. A full CRUD(create, read, update, delete) / Full Stack project that I created.</li>
                                <li className='p-2'> When another user logins/registers they are not able to edit or delete another users reviewes or restrooms added to the sight. Please enjoy the video below that has a walk through of the website.</li>
                            </ul>
                        </h6>
                        <hr />
                        <HoverVideoPlayer
                            className='zoom vidwidth p-2'
                            videoSrc={rRoomvid}
                            pausedOverlay={
                                <img className='vidimg' src={rRoomlogo} alt='rRoomlogo' />
                            }
                            loop />
                    </div>
                    <hr />
                    <div>
                        <div className='d-flex justify-content-between mt-3 p-3'>
                            <h3>Jjoke</h3>
                            <a href="https://github.com/jwludwig7/jJoke"><img src={githublogo} alt="github" /></a>
                        </div>
                        <div className='d-flex smallerscreen'>
                            <h6 className='p-3'>
                                <ul >
                                    <li className='p-2'>For my Mern project I used a really fun JokeApi that has over a 1000 jokes at the ready for a user to enjoy.</li>
                                    <li className='p-2'> The front end of the website was made with React. Backend was made with Express and MongoDB and of course Node.js for the scripts.</li>
                                    <li className='p-2'>The biggest struggle I had to overcome in the creation of this project was trying to get the different api calls from the filter form. After many attempts I was able to figure out how with each button click a User is able to filter the perfect joke to their desire.</li>
                                    <li className='p-2'>A fun aspect I added was a animated like button with SCSS! Full Stack project created. Please enjoy the video below with a demo of my website.</li>
                                </ul>
                            </h6>
                            <HoverVideoPlayer
                                className='zoom vidwidth p-2 '
                                videoSrc={jJokevid}
                                pausedOverlay={
                                    <img className='vidimg' src={jJokelogo} alt='jJokelogo' />
                                }
                                loop />
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='d-flex justify-content-between mt-3 p-3'>
                            <h3>bBox Adventures</h3>
                            <a href="https://github.com/jwludwig7/bBox-Adventures-"><img src={githublogo} alt="github" /></a>
                        </div>
                        <div className='d-flex smallerscreen'>
                            <h6 className='p-3'>
                                <ul>
                                    <li className='p-2'>For my C# project I made a Super Marios Bros. inspired 2D game in Unity. This project was challenging but was rewarding once the pieces started coming together.</li>
                                    <li className='p-2'> While I have made many full CRUD websites in C# using .NET6 with MySQL this was not like that at all. I had to learn the Unity Framework and how to get my Player to do certian things, along with having the game act accordingly.</li>
                                    <li className='p-2'>This was a lot of fun of make, please enjoy the demo below of my game! </li>
                                </ul>   
                            </h6>
                            <hr />
                            <HoverVideoPlayer
                                className='zoom vidwidth p-2'
                                videoSrc={bBoxvid}
                                pausedOverlay={
                                    <img className='vidimg bBoxbackground' src={bBoxlogo} alt='bBoxlogo' />
                                }
                                loop />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects