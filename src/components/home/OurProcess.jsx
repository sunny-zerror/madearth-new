"use client";
import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

gsap.registerPlugin(ScrollTrigger)

const processData = [
    {
        id: 1,
        title: "Think",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consectetur quas molestias mollitia harum natus.",
        img: "https://framerusercontent.com/images/et4QRahaD1IWpTLBFmYy8CdeB30.webp?width=800&height=800",
        bgColor: "#163012",
    },
    {
        id: 2,
        title: "Create",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consectetur quas molestias mollitia harum natus.",
        img: "https://framerusercontent.com/images/yI4MrBzBm4z4neX701VxGHTMgQE.webp?width=800&height=800",
        bgColor: "#461b0c",
    },
    {
        id: 3,
        title: "Build",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consectetur quas molestias mollitia harum natus.",
        img: "https://framerusercontent.com/images/v4UkgalyGHzr9YSSXQAgHOuuo.webp?width=800&height=800",
        bgColor: "#182644",
    },
    {
        id: 4,
        title: "Scale",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consectetur quas molestias mollitia harum natus.",
        img: "https://framerusercontent.com/images/gGf7oy4GvhJUjXHkyaFgkqw7LBM.png?width=2224&height=2224",
        bgColor: "#35221d",
    }
]

const OurProcess = () => {

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".process_paren",
                start: "top bottom",
                scrub: .4,
            }
        })
            .to(".serv_4_img_1", { x: -200, duration: 2, ease: "linear" }, "<")
            .to(".serv_4_img_2", { x: -300, duration: 2, ease: "linear" }, "<")


        const swiper = document.querySelector(".mySwiper");
        const dragBtn = document.querySelector(".drag_btn");

        swiper.addEventListener("mousemove", (e) => {
            gsap.to(dragBtn, {
                x: e.clientX +15 ,
                y: e.clientY +15 ,
                opacity: 1,
                duration: 0.2,
                ease: "power3.out",
            });
        });

        swiper.addEventListener("mouseleave", () => {
            gsap.to(dragBtn, {
                opacity: 0,
                duration: 0.3,
            });
        });
    })

    return (
        <div className='process_paren padding w-full'>

            <h2 className='uppercase text-7xl'>Our Process</h2>

            <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                centeredSlides={false}
                className="mySwiper relative my-10 cursor-grab active:cursor-grabbing"
            >

                <button className="drag_btn z-[9]  text-white fixed px-3 py-1 backdrop-blur-xs bg-white/10 rounded-full top-0 left-0 opacity-0 pointer-events-none">
                    <p className='text-sm'>Drag</p>
                </button>

                {processData.map((item, i) => (
                    <SwiperSlide key={i} style={{ width: "30vw" }}>
                        <div
                            className="relative rounded-2xl p-8 aspect-[3/4] group transition-all duration-300 text-black hover:text-white cursor-grab active:cursor-grabbing"
                            style={{ backgroundColor: "#99a1af0f" }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = item.bgColor)}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#99a1af0f")}
                        >
                            <h2 className="text-5xl uppercase">{item.title}</h2>
                            <p className="text-xl leading-none opacity-50 mt-4">{item.desc}</p>

                            <div className="absolute bottom-0">
                                <img src={item.img} alt="" className="w-full" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}

export default OurProcess
