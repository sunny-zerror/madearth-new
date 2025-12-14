"use client"
import { WorksData } from '@/data/WorksData'
import { useGSAP } from '@gsap/react';
import { RiArrowDownSLine, RiArrowRightSLine } from '@remixicon/react'
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'

const filter_services = [
    "Poster Design",
    "Brand Identity",
    "Illustration & Iconography",
    "Motion Graphics",
    "Packaging Design",
    "Web Design",
    "Editorial Design",
    "Campaigns",
    "Product Design",
    "Digital Design",
    "Signage & Environmental Design",
    "Typography",
];
const filter_industries = [
    "Fashion",
    "E-Commerce",
    "Technology",
    "Healthcare",
    "Real Estate",
    "Food & Beverage",
    "Education",
    "Automotive",
    "Entertainment",
    "Travel & Hospitality",
    "Finance",
    "Sports & Fitness",
    "Beauty & Personal Care",
];

const WorkPage = () => {

    const [selectedServices, setSelectedServices] = useState([])
    const [openServicesDrop, setOpenServicesDrop] = useState(false)
    const [selectedIndustries, setSelectedIndustries] = useState([])
    const [openIndustriesDrop, setOpenIndustriesDrop] = useState(false)

    const handleSelect = (item, state, setState) => {
        if (state.includes(item)) {
            setState(state.filter(x => x !== item));
        } else {
            setState([...state, item]);
        }
    };


    useEffect(() => {
        if (openServicesDrop) {
            setOpenIndustriesDrop(false)
            gsap.to(".services_drop", { height: "auto", duration: 0.8, ease: "expo.out" });
        } else {
            gsap.to(".services_drop", { height: "0", duration: 0.8, ease: "expo.out" });
        }
    }, [openServicesDrop]);

    useEffect(() => {
        if (openIndustriesDrop) {
            setOpenServicesDrop(false)
            gsap.to(".industries_drop", { height: "auto", duration: 0.8, ease: "expo.out" });
        } else {
            gsap.to(".industries_drop", { height: "0", duration: 0.8, ease: "expo.out" });
        }
    }, [openIndustriesDrop]);

    return (
        <>
            <div
                style={{
                    background: "linear-gradient(180deg, #87a1c4 0%, rgb(250, 253, 247) 61.74514358108109%, var(--token-b1816368-01d4-4559-ab1b-4ed45f4a1284, rgb(255, 255, 255)) 100%)"
                }}
                className=' w-full h-[50vh] flex items-end padding'>

                <p className='text-6xl uppercase font-semibold'>Our work <br />From idea to exit</p>
            </div>
            <div className="filter_paren padding h-[30vh]">
                <div className="w-full h-full items-end gap-10 text-4xl uppercase flex">
                    <div onClick={() => setOpenServicesDrop(!openServicesDrop)} className={`w-1/2  flex cursor-pointer ${openServicesDrop && `px-4`} hover:px-4 transition-all duration-300 ease-out  items-center justify-between  border-black border-b`}>
                        <h2>
                            services &nbsp;
                            <sup className="text-xl">
                                {selectedServices.length !== 0 && `(${selectedServices.length})`}
                            </sup>
                        </h2>
                        <h2 className={`rotate-90 transition-all duration-300 ${openServicesDrop && "rotate-270"} `}>
                            ›
                        </h2>
                    </div>
                    <div onClick={() => setOpenIndustriesDrop(!openIndustriesDrop)} className={` w-1/2  flex cursor-pointer ${openIndustriesDrop && "px-4"} hover:px-4 transition-all duration-300 ease-out  items-center justify-between  border-black border-b`}>
                        <h2>
                            Industry &nbsp;
                            <sup className="text-xl">
                                {selectedIndustries.length !== 0 && `( ${selectedIndustries.length} )`}
                            </sup>
                        </h2>
                        <h2 className={`rotate-90 transition-all duration-300 ${openIndustriesDrop && "rotate-270"} `}>
                            ›
                        </h2>
                    </div>
                </div >
            </div >
            <div className="w-full pt-10">
                <div className=" services_drop  h-0  w-full overflow-hidden padding  flex flex-wrap gap-x-2 gap-y-2">
                    {filter_services.map((item, i) => {
                        const isSelected = selectedServices.includes(item);

                        return (
                            <div
                                key={i}
                                onClick={() => handleSelect(item, selectedServices, setSelectedServices)}
                                className={`cursor-pointer px-4 py-2 rounded-full transition duration-300 
          ${isSelected ? "bg-black text-white" : "hover:bg-black/5"}
        `}
                            >
                                <p className="text-xl">{item}</p>
                            </div>
                        );
                    })}
                </div>
                <div className=" industries_drop  h-0  w-full overflow-hidden padding  flex flex-wrap gap-x-2 gap-y-2">
                    {filter_industries.map((item, i) => {
                        const isSelected = selectedIndustries.includes(item);

                        return (
                            <div
                                key={i}
                                onClick={() => handleSelect(item, selectedIndustries, setSelectedIndustries)}
                                className={`cursor-pointer px-4 py-2 rounded-full transition duration-300 
          ${isSelected ? "bg-black text-white" : "hover:bg-black/5"}
        `}
                            >
                                <p className="text-xl">{item}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="grid padding py-10 gap-x-3 gap-y-10 grid-cols-4">
                {WorksData.map((item, i) => (
                    <div
                        key={i}
                        className="w-full cursor-pointer  overflow-hidden relative brightness-90  group ">
                        <div className="  relative rounded-xl aspect-[3/4] w-full overflow-hidden">
                            <video
                                src={item.show_reel}
                                className=" cover absolute top-0 left-0  opacity-0  group-hover:opacity-0  hover:opacity-100 transition duration-300 "
                                loop
                                autoPlay
                                muted
                                playsInline
                            ></video>
                            <img
                                className="  cover   opacity-100   hover:opacity-0  transition duration-300  "
                                src={item.image}
                                alt=""
                            />
                        </div>
                        <h2 className=' text-4xl mt-2 leading-none  uppercase'>
                            {item.title}
                        </h2>
                        <p className='leading-none opacity-70'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default WorkPage