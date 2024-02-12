import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player'
import rRoomvid from '../img/rRoomSpedUp2.mp4'
import rRoomlogo from '../img/rroom-logo.png'
import jJokevid from '../img/jJoke.mp4'
import jJokelogo from '../img/jjoke-logo.png'
import bBoxvid from '../img/bBox_Trim.mp4'
import bBoxlogo from '../img/bBox.png'
import githublogo from '../img/github.png'
import weddingPlannerPic from '../img/weddingPlannerPic.png'
import weddingPlannerVid from '../img/weddingPlannerVid.mp4'
import jumpStartPic from '../img/jumpStartPic.png'
import jumpStartVid from '../img/jumpStartVid.mp4'
import '../Components/Projects.css'

const Projects = () => {
    return (
        <div className=' d-flex justify-content-center mb-5' id='Projects'>
            <div className='divwidth shadow p-4 rounded divbg'>
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
                                <li className='p-2 psize'>A Yelp inspired project to leave reviews on public restrooms. I have been inspired to make this app all my life because of the many jobs I have had that were not in a traditional office setting.</li>
                                <li className='p-2 psize'>The technologies I used during the creation of this project was Python, MySQL, Flask, and Google Maps API. A full CRUD(create, read, update, delete) / Full Stack project that I created.</li>
                                <li className='p-2 psize'> When another user logins/registers they are not able to edit or delete another users reviewes or restrooms added to the sight. Please enjoy the video below that has a walk through of the website.</li>
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
                            <h3>jJoke</h3>
                            <a href="https://github.com/jwludwig7/jJoke"><img src={githublogo} alt="github" /></a>
                        </div>
                        <div className='d-flex smallerscreen'>
                            <h6 className='p-3'>
                                <ul >
                                    <li className='p-2 psize'>For my Mern project I used a really fun JokeApi that has over a 1000 jokes at the ready for a user to enjoy.</li>
                                    <li className='p-2 psize'> The front end of the website was made with React. Backend was made with Express and MongoDB and of course Node.js for the scripts.</li>
                                    <li className='p-2 psize'>The biggest struggle I had to overcome in the creation of this project was trying to get the different api calls from the filter form. After many attempts I was able to figure out how with each button click a User is able to filter the perfect joke to their desire.</li>
                                    <li className='p-2 psize'>A fun aspect I added was a animated like button with SCSS! Full Stack project created. Please enjoy the video below with a demo of my website.</li>
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
                                    <li className='p-2 psize'>For my C# project I made a Super Marios Bros. inspired 2D game in Unity. This project was challenging but was rewarding once the pieces started coming together.</li>
                                    <li className='p-2 psize'> While I have made many full CRUD websites in C# using .NET6 with MySQL this was not like that at all. I had to learn the Unity Framework and how to get my Player to do certian things, along with having the game act accordingly.</li>
                                    <li className='p-2 psize'>This was a lot of fun of make, please enjoy the demo below of my game! </li>
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
                    <hr />
                    <div>
                        <div className='d-flex justify-content-between mt-3 p-3'>
                            <h3>Wedding Planner</h3>
                            <a href="https://github.com/jwludwig7/Coding-Dojo/tree/master/CSharp/ORMs/beltReview/weddingPlanner"><img src={githublogo} alt="github" /></a>
                        </div>
                        <div className='d-flex smallerscreen'>
                            <h6 className='p-3'>
                                <ul>
                                    <li className='p-2 psize'>Wedding planner website that has one to many and many to many relationships.</li>
                                    <li className='p-2 psize'>Has a login and registration for the users, when user logs in they will be greeted with conditional rendering.</li>
                                    <li className='p-2 psize'>The dashboard will show all the available weddings with a guest count, the date, name of the wedding, and the action you can take, if you created the wedding then you can delete it, if you are not the creator of the wedding then you can rsvp or un-rsvp to the wedding. </li>
                                    <li className='p-2 psize'>When you click on the wedding name you can be taken to a one-wedding page and it will show a list of guests, the date, and the name of the wedding.</li>
                                    <li className='p-2 psize'>Nav bar for easy navigation. User can create weddings with form with proper validation. MVC type of C# project. Db used is mysql.</li>
                                    <li className='p-2 psize'>Functionality more then looks.</li>
                                </ul>   
                            </h6>
                            <hr />
                            <HoverVideoPlayer
                                className='zoom vidwidth p-2'
                                videoSrc={weddingPlannerVid}
                                pausedOverlay={
                                    <img className='vidimg' src={weddingPlannerPic} alt='weddingPlannerPic' />
                                }
                                loop />
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='d-flex justify-content-between mt-3 p-3'>
                            <h3>Jump Start: Support a Project</h3>
                            <a href="https://github.com/jwludwig7/Coding-Dojo/tree/master/CSharp/beltExam/beltExamCSharp"><img src={githublogo} alt="github" /></a>
                        </div>
                        <div className='d-flex smallerscreen'>
                            <h6 className='p-3'>
                                <ul>
                                <li className='p-2 psize'>Disclamer, this is not for looks more for fucntionality. This was my exam and we were given a wire frame and were expected to have it completed and fully functional in 5 hours.</li>
                                    <li className='p-2 psize'>It is a kickstarter inspired project, made with C#, ASP.NET6.</li>
                                    <li className='p-2 psize'>Front page is greeted with a login and reg with authorization, Database used to store all the info is MySQL.</li>
                                    <li className='p-2 psize'>The dashboard page is a table list of all the available projects that other users and logged user have made. </li>
                                    <li className='p-2 psize'>Table shows the project name, total funded, creator, and the actions you can take for the project, if you created it you can delete it and view it, if you did not create it you can just view the project.</li>
                                    <li className='p-2 psize'>Users can create the project and the form asks for the title, goal, end date of the project funding, and a description of the project, form has proper validation. When viewing the one-project it shows the goal, the amount of current support in USD, the number of supported users, the end date, and if it's the current users project, conditional rendering will come in and not allow user to pledge to their own project. If it's not the users project they can add an amount of support in USD. MVC type of C# project.</li>
                                </ul>   
                            </h6>
                            <hr />
                            <HoverVideoPlayer
                                className='zoom vidwidth p-2'
                                videoSrc={jumpStartVid}
                                pausedOverlay={
                                    <img className='vidimg' src={jumpStartPic} alt='jumpStartPic' />
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