"use client";
import React, { useEffect, useRef } from 'react'
import { WorksData } from '@/data/WorksData'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { RiArrowRightLine } from '@remixicon/react'
import { Link } from 'next-view-transitions';
import MagnetButton from '../buttons/MagnetButton';
gsap.registerPlugin(ScrollTrigger)


const WorkSection = () => {
    const cardsRef = useRef([]);

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
                end: "bottom center",
                scrub: true,
            },
        });
        tl.to(".wrk_txt", {
            opacity: 0
        })
    })

    useEffect(() => {
        const elems = gsap.utils.toArray(".crd_img");
        const order = [1, 3, 2, 0 ,4 ,6 , 5, 7];
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
                    x: gsap.utils.random(-20, 20),
                    y: gsap.utils.random(-20, 20),
                    duration: gsap.utils.random(1, 2),
                    ease: "power1.inOut",
                    onComplete: randomMove,
                });
            };

            randomMove();
        });
    }, []);

    const handleMouseEnter = () => {
        gsap.to(".wrk_overlay", {
                opacity:1,
                ease:"expo.out",
                // duration:.5,

        })
    } 
    const handleMouseLeave = () => {
        gsap.to(".wrk_overlay", {
                opacity:0,
                ease:"expo.out",
                // duration:.5,
        })
    } 



    return (
        <>
            <div className=" wrk_paren relative  center flex-col w-full">

                <div className="wrk_overlay pointer-events-none opacity-0 top-0 z-[2] left-0 h-full w-full fixed bg-black/80 "></div>
                <h2 className=' sticky z-[1] top-1/2 -translate-y-1/2 whitespace-nowrap  wrk_txt text-[20vw] uppercase'>  Our Work</h2>
                <div className="w-full h-screen"></div>
                <div className=" translate-y-[-12vw] relative z-[10]  wrks_crds_pren ">
                    <div
                        ref={el => (cardsRef.current = el)}
                        className="w-full grid grid-cols-4 gap-10 items-center justify-center group"
                    >
                        {WorksData.map((item, i) => (
                            <div
                                key={i}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="w-[20vw] z-[10] card cursor-pointer overflow-hidden relative transition-all duration-300 brightness-90  group-hover:brightness-[.3] hover:brightness-100 hover:text-white">
                                    
                                <div className="crd_img scale-0 relative rounded-xl aspect-[3/4] w-full overflow-hidden">
                                    <video
                                        src={item.show_reel}
                                        className=" cover absolute top-0 left-0  opacity-0  group-hover:opacity-0  hover:opacity-100 transition duration-300 "
                                        loop
                                        autoPlay
                                        muted
                                        playsInline
                                    ></video>
                                    <img
                                        className="  cover opacity-100   hover:opacity-0  transition duration-300  "
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                                <div className="relative z-[40]">
                                <h2 className="text-5xl mt-2 leading-none uppercase">{item.title}</h2>
                                <p className="leading-none opacity-70">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full center relative mt-10">
                        <MagnetButton link={"/work"} text={"View All"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkSection
