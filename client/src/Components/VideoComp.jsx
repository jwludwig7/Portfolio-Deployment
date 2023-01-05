import React from 'react'
import vid from '../img/file.mp4'
import HoverVideoPlayer from 'react-hover-video-player'
import '../Components/VideoComp.css'

const VideoComp = () => {

    return (
        <div className='mb-5' id='Vid'>
            <HoverVideoPlayer
                videoSrc={vid}
                pausedOverlay={
                    <div class="center">
                    <h1>Jordan Ludwig</h1>
                    <h2>Full Stack Developer</h2>
                </div>    
                }
            loop/>
        </div>
    )
}

export default VideoComp