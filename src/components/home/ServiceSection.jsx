import { useGSAP } from '@gsap/react'
import { RiMore2Line } from '@remixicon/react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger, CustomEase)

import React, { useEffect, useRef } from 'react'

const ServiceSection = () => {
    const parentRef = useRef(null);

    CustomEase.create("custom_bounce", "(0.34, 1.56, 0.64, 1)")

    useGSAP(() => {
        var first_tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".services_paren",
                start: "top 50%",
                toggleActions: "play none none reverse",
            },
        })
        first_tl.from(".serv_h2", {
            opacity: 0,
            scale: 1.2,
            ease: "expo.out",
            stagger: 0.1
        })
            .from(".serv_orge_stickr", {
                opacity: 0,
                scale: 3,
                ease: "custom_bounce",
                duration: .5
            }, "<0.2")


        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".services_paren",
                start: "top bottom",
                scrub: .4,
            },
        })
        tl.to(".serv_1_img_1 ", {
            left: "-30%",
            ease: "linear",
            duration: 4,
        })
        tl.to(".serv_1_img_2 ", {
            left: "20%",
            ease: "linear",
            duration: 4,
        }, "<")
        tl.to(".serv_1_img_3", {
            left: "-15%",
            ease: "linear",
            duration: 4,
        }, "<")




        const serv_pin = gsap.timeline({
            scrollTrigger: {
                trigger: ".services_paren",
                start: "top top",
                end: "+=300%",
                scrub: .4,
                pin: true,
            },
        })

        serv_pin.to(".serv_slide_bar_1", {
            width: "100%",
            duration: 2,
            ease: "linear",
        })
            .to(".service_2", {
                right: 0,
                duration: 2,
                ease: "linear",
            })
            .to(".serv_slide_bar_2", {
                width: "100%",
                duration: 2,
                ease: "linear",
            })
            .to(".serv_2_img_1", {
                left: "20%",
                duration: 4,
                ease: "linear",
            }, "<")
            .to(".serv_2_img_2", {
                left: "0%",
                duration: 4,
                ease: "linear",
            }, "<")

            .to(".service_3", {
                right: 0,
                duration: 2,
                ease: "linear",
            }, "<+=2.1")
            .to(".serv_slide_bar_3", {
                width: "100%",
                duration: 2,
                ease: "linear",
            }, "<+=2.0")
            .to(".serv_3_img_1", {
                left: "10%",
                ease: "linear",
                duration: 4,
            }, "<")
            .to(".serv_3_img_2", {
                left: "30%",
                ease: "linear",
                duration: 4,
            }, "<")
            .to(".serv_3_img_3", {
                left: "50%",
                ease: "linear",
                duration: 4,
            }, "<+=0.2")

            .to(".service_4", {
                right: 0,
                duration: 2,
                ease: "linear",
            }, "<+=2.1")
            .to(".serv_slide_bar_4", {
                width: "100%",
                duration: 2,
                ease: "linear",
            }, "<+=2.0")
            .to(".serv_4_img_1", {
                left: "-5%",
                duration: 2,
                ease: "linear",
            }, "<")
            .to(".serv_4_img_2", {
                left: "20%",
                duration: 2,
                ease: "linear",
            }, "<")

    })

    return (
        <>
            <div ref={parentRef} className=" services_paren w-full h-screen flex gap-x-[15vw] items-center justify-center">

                <div className=" space-y-2">
                    <div className="text-[18vw] relative  leading-[13vw] uppercase">
                        <div className="flex w-full justify-between items-end">
                            <h2 className='serv_h2'>Our</h2>
                            <p className='font-semibold text-xl  -translate-y-1 capitalize '>Make, Inspire, Export</p>
                        </div>
                        <h2 className='serv_h2'>Services</h2>
                    </div>
                </div>

                <div className=" h-[80%] aspect-[9/16] relative overflow-hidden  rounded-lg  ">

                    <div className=" w-full z-10 absolute top-0 p-6">
                        <div className="w-full grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((item, i) => (
                                <div key={i} className=" rounded-full relative w-full overflow-hidden h-[2px] bg-white/30">
                                    <div className={` serv_slide_bar_${i + 1} absolute top-0 left-0 h-full w-0 bg-white`}></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-between mt-4  text-white w-full">
                            <div className="flex items-center gap-2">
                                <div className="size-7  rounded-full bg-red-600"></div>
                                <p className='uppercase text-sm'>MadEarth</p>
                                <p className='opacity-80'>1h</p>
                            </div>
                            <RiMore2Line size={14} />
                        </div>
                    </div>

                    <div className="service_1 w-full relative h-full flex flex-col justify-end p-6 pb-10 bg-[#156B40] rounded-lg">
                        <img className=' serv_1_img_1 absolute left-full top-[30%]' src="/icons/services_miton.svg" alt="" />
                        <img className=' serv_1_img_2 absolute left-full top-[10%]' src="/icons/services_miton.svg" alt="" />
                        <img className=' serv_1_img_3 absolute left-1/2 top-[-10%]' src="/icons/services_miton.svg" alt="" />
                        <div className=" text-white ">
                            <p>#1</p>
                            <div className=" uppercase pb-[4vh] text-[4rem] leading-[3.5rem]">
                                <h2>Brand Identity Design</h2>
                            </div>
                            <p className='leading-none text-2xl '> Logos, visual systems, brand strategy, and tone of voice</p>
                        </div>
                    </div>

                    <div className=" service_2 w-full absolute top-0 -right-full h-full flex flex-col justify-end p-6 pb-10 bg-[#FFBCCB] rounded-lg">
                        <img className=' serv_2_img_1 absolute left-1/2 top-[20%]' src="/icons/services_film.svg" alt="" />
                        <img className=' serv_2_img_2 absolute left-full top-[60%]' src="/icons/services_film.svg" alt="" />
                        <div className=" text-white ">
                            <p>#2</p>
                            <div className=" uppercase pb-[4vh] text-[4rem] leading-[3.5rem]">
                                <h2>Editorial Design</h2>
                            </div>
                            <p className='leading-none text-2xl '>Magazines, reports, books, and large-format publications</p>
                        </div>
                    </div>

                    <div className=" service_3 w-full absolute top-0 -right-full h-full flex flex-col justify-end p-6 pb-10 bg-[#FF3500] rounded-lg">
                        <img className=' serv_3_img_1 absolute left-[30%] top-[20%]' src="/icons/services_scissor.svg" alt="" />
                        <img className=' serv_3_img_2 absolute left-full top-[50%]' src="/icons/services_scissor.svg" alt="" />
                        <img className=' serv_3_img_3 absolute left-full top-[65%]' src="/icons/services_scissor.svg" alt="" />
                        <div className=" text-white ">
                            <p>#3</p>
                            <div className=" uppercase pb-[4vh] text-[4rem] leading-[3.5rem]">
                                <h2>Communication for Development</h2>
                            </div>
                            <p className='leading-none text-2xl '>Advocacy campaigns, IEC materials, donor reports, and toolkits</p>
                        </div>
                    </div>

                    <div className=" service_4 w-full absolute top-0 -right-full h-full flex flex-col justify-end p-6 pb-10 bg-[#ADA999] rounded-lg">
                        <img className=' serv_4_img_1 absolute left-[5%] top-[15%]' src="/icons/services_luck.svg" alt="" />
                        <img className=' serv_4_img_2 absolute left-[70%] top-[50%]' src="/icons/services_luck.svg" alt="" />
                        <div className=" text-white ">
                            <p>#4</p>
                            <div className=" uppercase pb-[4vh] text-[4rem] leading-[3.5rem]">
                                <h2>Digital & Web Design</h2>
                            </div>
                            <p className='leading-none text-2xl '> UX/UI, websites, and interactive presentations</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ServiceSection