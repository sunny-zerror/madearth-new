import React, { useEffect, useRef } from 'react'
import { WorksData } from '@/data/WorksData'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { RiArrowRightLine } from '@remixicon/react'
gsap.registerPlugin(ScrollTrigger)


const WorkSection = () => {
    const cardsRef = useRef([]);

    useGSAP(() => {
        gsap.from(".wrk_txt", {
            scrollTrigger: {
                trigger: ".wrk_paren",
                start: "top bottom",
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
        const order = [1, 3, 2, 0];
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
                    x: gsap.utils.random(-50, 50),
                    y: gsap.utils.random(-50, 50),
                    duration: gsap.utils.random(1, 2),
                    ease: "power1.inOut",
                    onComplete: randomMove,
                });
            };

            randomMove();
        });
    }, []);

    const buttonHover = () => {
        gsap.to(".arrow_cir_bx", {
            left: "-2.25rem",
            ease: "bounce.out"
        })

    }
    const buttonHoverOut = () => {
        gsap.to(".arrow_cir_bx", {
            left: "-3rem",
            ease: "expo.out"
        })
    }

    return (
        <>
            <div className=" wrk_paren relative  center flex-col w-full">
                <h2 className=' sticky top-1/2 -translate-y-1/2 whitespace-nowrap  wrk_txt text-[20vw] uppercase'>  Our Work</h2>
                <div className="w-full h-screen"></div>
                <div className=" translate-y-[-12vw]  wrks_crds_pren ">
                    <div ref={el => cardsRef.current = el} className='w-full flex gap-10 items-center justify-center group'>

                        {WorksData.slice(0, 4).map((item, i) => (
                            <div
                                key={i}
                                className="w-[20vw] card  cursor-pointer  overflow-hidden relative brightness-90  group-hover:brightness-50 hover:brightness-100 transition duration-300">
                                <img className=' crd_img scale-0 cover rounded-lg  aspect-[3/4]  w-full   h-full object-cover' src={item.image} alt="" />
                                <h2 className=' text-5xl mt-2 leading-none  uppercase'>
                                    {item.title}
                                </h2>
                                <p className='leading-none opacity-70'>{item.desc}</p>
                            </div>
                        ))}

                    </div>
                    <div className="w-full center mt-10">
                        <button onMouseEnter={buttonHover} onMouseLeave={buttonHoverOut} className=' relative flex group '>
                            <div className=" arrow_cir_bx absolute size-9 -left-[3rem]  center rounded-full border">
                                <RiArrowRightLine size={16} />
                            </div>
                            <div className='border h-9 px-4 center rounded-full'>
                                <p>
                                    View All
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkSection
