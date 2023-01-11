import React from 'react'
import { Link } from 'react-scroll'
import user from '../img/user.png'
import projectManager from '../img/project-management.png'
import blueprint from '../img/blueprint.png'
import send from '../img/send.png'
import home from '../img/home.png'
import '../Components/Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='d-flex justify-content-around bg-light fixed-top'>
                <div className='d-flex text-center align-items-center p-1'>
                    <Link to='Vid' spy={true} smooth={true} offset={50} duration={300} ><img className='homelogo' src={home} alt="home" /></Link>
                    <h1 ><Link className='text-dark JL' to='Vid' spy={true} smooth={true} offset={50} duration={300} >JL</Link></h1>
                </div>
                <div className='cleanUp resize p-1'>
                    <div className='resize d-flex p-1'>
                        <Link to='About' spy={true} smooth={true} offset={-80} duration={300} ><img src={user} alt="user" /></Link>
                        <h4><Link to='About' spy={true} smooth={true} offset={-80} duration={300} className='text-decoration-none text-dark' >About</Link> </h4>
                    </div>
                    <div className='resize d-flex p-1'>
                        <Link to='Tech' spy={true} smooth={true} offset={-80} duration={300} ><img src={projectManager} alt="project-management" /></Link>
                        <h4><Link to='Tech' spy={true} smooth={true} offset={-80} duration={300} className='text-decoration-none text-dark' >Technology</Link></h4>
                    </div>
                    <div className='resize d-flex p-1'>
                        <Link to='Projects' spy={true} smooth={true} offset={-80} duration={300} ><img src={blueprint} alt="blueprint" /></Link>
                        <h4><Link to='Projects' spy={true} smooth={true} offset={-80} duration={300} className='text-decoration-none text-dark' >Projects</Link></h4>
                    </div>
                    <div className='d-flex resize p-1'>
                        <Link to='Contact' spy={true} smooth={true} offset={-80} duration={300} ><img src={send} alt="send" /></Link>
                        <h4><Link to='Contact' spy={true} smooth={true} offset={-80} duration={300} className='text-decoration-none text-dark' >Contact</Link></h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar