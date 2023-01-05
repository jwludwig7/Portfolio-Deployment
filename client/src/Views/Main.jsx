import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import VideoComp from "../Components/VideoComp"
import AboutMe from "../Components/AboutMe"
import Technology from "../Components/Technology"
import Projects from "../Components/Projects"
import ContactMe from "../Components/ContactMe"

export const Main = (props) => {
    return (
        <>
            <Navbar/>
            <VideoComp/>
            <AboutMe/>
            <Technology/>
            <Projects/>
            <ContactMe/>
        </>
    )
}