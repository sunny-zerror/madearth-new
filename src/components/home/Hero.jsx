import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

const Hero = () => {

  const [expandVideo, setExpandVideo] = useState(false)

  useEffect(() => {
    if(expandVideo){
      gsap.to(".show_reel", {
       width:"100%",
       right:0,
       bottom:0,
       ease:"expo.inOut",
       duration:1.4
      })
    }else{
      gsap.to(".show_reel", {
        width:"18vw",
        right:"3rem",
        bottom:"3rem",
        ease:"expo.inOut",
        duration:1.4
       })
    }
  }, [expandVideo])
  

  return (
    <div className='w-full h-screen overflow-hidden relative padding flex items-center'>

      <p className='capitalize text-6xl w-2/3'>New Genre is a global design & technology studio accelerating tomorrow's ideas.</p>

      <div onClick={()=>setExpandVideo(!expandVideo)} className=" cursor-pointer show_reel rounded-sm overflow-hidden absolute z-[99]  bottom-12 aspect-video w-[18vw]  right-12">
        <video loop autoPlay muted playsInline className='cover' src="https://cdn.prod.website-files.com/67feae17cea1ad395ebd5409%2F6842b4058c67691b340f0089_VAP%20Studio%20-%20SHOWREEL%20%281%29%20%28online-video-cuttercom%29%20%281%29-transcode.mp4"></video>
      </div>

    </div>
  )
}

export default Hero