"use client";
import React, { useEffect, useRef, useState } from 'react'
import { WorksData } from '@/data/WorksData'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { RiArrowRightLine } from '@remixicon/react'
import { Link } from 'next-view-transitions';
import MagnetButton from '../buttons/MagnetButton';
gsap.registerPlugin(ScrollTrigger)


const WorkSection = () => {

    const [bg_data, setBg_data] = useState(null)
    const [activeIndex, setActiveIndex] = useState(null);
    const activeVideo = useRef(null);

    useGSAP(() => {
        gsap.from(".wrk_txt", {
            scrollTrigger: {
                trigger: ".wrk_paren",
                start: "top 95%",
                end: "top top",
                scrub: true,
            },
            ease: "linear",
            scale: 0.6,
            y: 200,
        })

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".wrk_paren",
                start: "top top",
                end: "40% top",
                scrub: true,
            },
        });
        tl.to(".wrk_txt", {
            opacity: 0
        })
    })

    useEffect(() => {
        const elems = gsap.utils.toArray(".crd_img");
        const order = [1, 3, 2, 0, 4, 6, 5, 7];
        const seq = order.map(i => elems[i]).filter(Boolean);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".wrks_crds_pren",
                start: "top center",
                // markers: true,
                toggleActions: "play none none reverse"
            }
        });

        seq.forEach((el, idx) => {
            tl.to(el, {
                scale: 1,
                duration: 1,
                ease: "expo.out"
            }, idx * 0.1);
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    useEffect(() => {
        const cards = gsap.utils.toArray(".card");

        cards.forEach((card) => {
            const randomMove = () => {
                gsap.to(card, {
                    x: gsap.utils.random(-10, 10),
                    y: gsap.utils.random(-10, 10),
                    duration: gsap.utils.random(1, 2),
                    ease: "power1.inOut",
                    onComplete: randomMove,
                });
            };

            randomMove();
        });
    }, []);

    const handleMouseEnter = (bg_video, index) => {
        if (activeVideo.current === bg_video) return;

        activeVideo.current = bg_video;
        setActiveIndex(index);
        setBg_data(bg_video);

        gsap.to(".bg_video_paren", { opacity: 1, duration: 0.5 });
    };

    const handleMouseLeave = () => {
        activeVideo.current = null;
        setActiveIndex(null);

        gsap.to(".bg_video_paren", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => setBg_data(null),
        });
    };


    return (
        <>
            <div className=" wrk_paren relative  center flex-col w-full">

                <div className=" bg_video_paren opacity-0  fixed top-0 left-0 w-full h-screen  z-[2] pointer-events-none">

                    <video loop muted playsInline autoPlay className='cover brightness-[.9]' src={bg_data}></video>

                </div>
                <h2 className=' sticky z-[1] top-1/2 -translate-y-1/2 whitespace-nowrap  wrk_txt text-[20vw] uppercase'>  Our Work</h2>
                <div className="w-full h-screen"></div>
                <div className=" translate-y-[-12vw] relative z-[10]  wrks_crds_pren ">
                    <div
                        className="w-full grid grid-cols-4 gap-10 items-center justify-center "
                    >
                        {WorksData.map((item, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => handleMouseEnter(item.show_reel, i)}
                                onMouseLeave={handleMouseLeave}
                                className={`w-[20vw] z-[10] group card cursor-pointer overflow-hidden relative `}>
                                <div className={`crd_img scale-0 relative rounded-xl aspect-[3/4] w-full overflow-hidden transition-all duration-300     ${activeIndex !== null && activeIndex !== i
                                    ? "border border-white"
                                    : "border border-transparent"
                                    } `}>
                                    {activeIndex === i && (
                                        <div className="w-full h-full center z-10 flex-col text-center bg-white absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 transition-all ">
                                            <h2 className='text-6xl'>{item.title}</h2>
                                            <p>{item.subtitle}</p>
                                        </div>
                                    )}
                                    <img
                                        className={`cover transition-opacity duration-300 ${activeIndex !== null && activeIndex !== i ? "opacity-0" : "opacity-100"}`}
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                                <div className="relative z-[40]">
                                    <h2 className={`text-3xl mt-2 leading-none uppercase transition-all duration-300 ${activeIndex !== null && activeIndex !== i ? "opacity-0" : "opacity-100"} `}>{item.title}</h2>
                                    {/* <p className="leading-none opacity-70">{item.subtitle}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full center relative mt-20">
                        <MagnetButton link={"/work"} text={"View All"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkSection
