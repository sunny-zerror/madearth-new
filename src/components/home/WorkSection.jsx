import React from 'react'
import { WorksData } from '@/data/WorksData'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const WorkSection = () => {

    useGSAP(() => {
        gsap.from(".wrk_txt",{
            scrollTrigger: {
                trigger:".wrk_paren",
                start:"top bottom",
                end:"top top",
                scrub:true,
            },
            ease:"linear",
            scale:0.6,
            y:200,
        })

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".wrk_paren",
                start: "top top",
                end:"bottom center",
                scrub: true,
            },
        });
        tl.to(".wrk_txt",{
            opacity:0
        })
  
    })

    return (
        <>
            <div className=" wrk_paren relative  center flex-col w-full">
                <h2 className=' sticky top-1/2 -translate-y-1/2 whitespace-nowrap  wrk_txt text-[20vw] uppercase'> Explore Our Work</h2>
                <div className="w-full h-screen"></div>
                <div className=" translate-y-[-12vw]  wrks_crds_pren ">
                    <div className='w-full flex gap-5 items-center justify-center group'>

                        {WorksData.slice(0, 4).map((item, i) => (
                            <div
                                key={i}
                                className="w-[20vw] rounded-lg cursor-pointer  overflow-hidden relative aspect-[3/4]">
                                <h2 className='absolute bottom-2 left-2 z-10 text-5xl text-white uppercase'>
                                    {item.title}
                                </h2>
                                <img className='cover  transition duration-300  brightness-90 w-full group-hover:brightness-50 hover:brightness-100  h-full object-cover' src={item.image} alt="" />
                            </div>
                        ))}

                    </div>
                    <div className="w-full center mt-10">
                        <button className='border px-3 py-1 rounded-full'>View All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkSection
