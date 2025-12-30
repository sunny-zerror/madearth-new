"use client";

import { WorksData } from "@/data/WorksData";
import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "next-view-transitions";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const Page = () => {

    const [expandDesc, setExpandDesc] = useState(false)

    const { slug } = useParams();

    const work = WorksData.find((work) => work.slug === slug);

    if (!work) return null;

    return (
        <>
            <>
                <div className="w-full h-[55vh] flex flex-col justify-end padding bg-[linear-gradient(to_bottom,#eaf3e2_20%,transparent)]">
                    <p className="text-6xl uppercase font-semibold">{work.title}</p>
                    <p className="text-4xl opacity-70">{work.subtitle}</p>
                </div>

                <div className="w-full padding mt-20 flex gap-1">
                    {work.category.map((item, i) => (
                        <button key={i} className="bg-[#99a1af0f] px-2 py-1 rounded-md medium text-sm ">
                            {item}
                        </button>
                    ))}
                </div>
                <div className="padding flex mt-7 gap-x-10  text-xl leading-tight">
                    <div className="w-1/2">
                        <p>{work.desc}</p>
                        <button onClick={() => setExpandDesc(!expandDesc)} className="mt-2 opacity-50 hover:opacity-100 transition-all duration-300">Read {expandDesc ? "Less" : "More"}</button>
                    </div>
                    <div
                        className={`w-1/2 overflow-hidden border-t pt-12 space-y-12 border-black/20
    transition-[max-height,opacity] duration-500 ease-in-out
    ${expandDesc ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
  `}
                    >
                        <div className="space-y-5">
                            <p className="medium">A Greentech Insight</p>
                            <p className="leading-tight text-lg opacity-50">Sylvera were seeking a flexible brand and design system to help the company expand into their next phase of growth and accurately represent data driven insights for investors. The Sylvera and New Genre partnership began through our experience in greentech and comprehensive, multi-platform design systems.</p>
                        </div>
                        <div className="space-y-5">
                            <p className="medium">Then it Clicked</p>
                            <p className="leading-tight text-lg opacity-50">As a foundational element, we developed a custom masking shape system derived from flattened world map projections. The grid system is inspired by longitude and latitude lines that represent pin point accuracy in carbon data whilst bringing structure to the design system.</p>
                            <p className="leading-tight text-lg opacity-50">In creating the Sylvera logo, we drew inspiration from a globe and combined that with an off centre click effect to signify shifting toward positive climate action. The click effect is a recurring motif across the design system and can also be seen in the intersection of the grid as the axis points meet and click together.</p>
                            <p className="leading-tight text-lg opacity-50">We chose the Aeroport typeface to embody clear legibility and to further enhance the notion of open access to critical climate data. The consistent application allows investors to easily navigate complex data and environmental insights.</p>
                        </div>
                        <div className="w-full">
                            <div className="flex py-6  items-center border-b border-black/20 w-full">
                                <div className="w-1/2 text-sm opacity-60 " >
                                    <p className="medium">Year</p>
                                </div>
                                <div className="w-1/2">
                                    <button className="bg-[#99a1af0f] px-2 py-1 medium rounded-sm text-sm ">
                                        2025
                                    </button>
                                </div>
                            </div>
                            <div className="flex py-6  items-center border-b border-black/20 w-full">
                                <div className="w-1/2 text-sm opacity-60 " >
                                    <p className="medium">Discipline</p>
                                </div>
                                <div className="w-1/2 flex gap-1 flex-wrap">
                                    <button className="bg-[#99a1af0f] px-2 py-1 medium rounded-sm text-sm ">
                                        Brand Identity
                                    </button>
                                    <button className="bg-[#99a1af0f] px-2 py-1 medium rounded-sm text-sm ">
                                        Digital Design
                                    </button>
                                </div>
                            </div>
                            <div className="flex py-6  items-center border-b border-black/20 w-full">
                                <div className="w-1/2 text-sm opacity-60 " >
                                    <p className="medium">Office</p>
                                </div>
                                <div className="w-1/2 flex gap-1 flex-wrap">
                                    <p className="medium text-sm leading-tight">London</p>
                                </div>
                            </div>
                            <div className="flex py-6  items-center border-b border-black/20 w-full">
                                <div className="w-1/2 text-sm opacity-60 " >
                                    <p className="medium leading-tight">Team</p>
                                </div>
                                <div className="w-1/2 ">
                                    <p className="medium leading-tight  text-sm">Mihai Toma</p>
                                    <p className="medium leading-tight  text-sm">Caterina Sinisi</p>
                                    <p className="medium leading-tight  text-sm">Celeste DeCis</p>
                                    <p className="medium leading-tight  text-sm">Natalia Kurzydlak</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setExpandDesc(false);
                                window.lenis?.scrollTo(0, { duration: 1 });
                            }}
                            className="mt-2 opacity-50 hover:opacity-100 transition-all duration-300"
                        >
                            Read Less
                        </button>

                    </div>
                </div>
                <div className="padding mt-20">
                    <div className="w-full grid gap-5 grid-cols-2 pt-16 border-t border-black/20">
                        <div className="w-full rounded-xl overflow-hidden col-span-2">
                            <video loop autoPlay muted playsInline className="cover" src="https://framerusercontent.com/assets/pi3nDUOR6bddbonV6pQOZJGXMM.mp4"></video>
                        </div>
                        <div className="w-full rounded-xl overflow-hidden col-span-1">
                            <img className="cover" src="https://framerusercontent.com/images/4eIxatehd7PwkcreyU4fOz3APk.webp?width=1920&height=2400" alt="" />
                        </div>
                        <div className="w-full rounded-xl overflow-hidden col-span-1">
                            <img className="cover" src="https://framerusercontent.com/images/wlmPZzV0c27t3Ze9sL4nPe3uWc.webp?scale-down-to=2048&width=3840&height=2160" alt="" />
                        </div>
                        <div className="w-full rounded-xl overflow-hidden col-span-2">
                            <video loop autoPlay muted playsInline className="cover" src="https://framerusercontent.com/assets/VyLa1FwLisPRfsZs9kaVqt78I.mp4"></video>
                        </div>
                        <div className="w-full rounded-xl overflow-hidden col-span-1">
                            <video className="cover" loop autoPlay muted playsInline src="https://framerusercontent.com/assets/39EJlm8b5IrO241GVxNapHsMU.mp4" alt="" />
                        </div>
                        <div className="w-full rounded-xl overflow-hidden col-span-1">
                            <video className="cover" loop autoPlay muted playsInline src="https://framerusercontent.com/assets/4xfB7fdiRsWsJB6jxgi6ZWnjGA.mp4" alt="" />
                        </div>
                    </div>
                </div>
            </>

            <div className="padding mt-20">
                <div className="w-full text-5xl flex items-center justify-between">
                    <h2 className="uppercase">Related Work</h2>
                    <button className="flex opacity-50 text-3xl items-center gap-1 hover:gap-3 transition-all duration-300">See All <RiArrowRightLine/></button>
                </div>
                <div className="mt-14 border-t border-b pb-32 border-black/20 pt-14">
                <div className="w-full grid grid-cols-4 gap-3">
                     {WorksData.slice(0, 4).map((item, i) => (
                    <Link
                        href={`/work/${item.slug}`}
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
                        <p className='leading-none opacity-70'>{item.subtitle}</p>
                    </Link>
                ))}
                    </div>
                    </div>
            </div>

        </>
    );
};

export default Page;
