import { RiMore2Line } from '@remixicon/react'
import React from 'react'

const ServiceSection = () => {
    return (
        <>
            <div className="w-full h-screen flex gap-x-[15vw] items-center justify-center">
                <div className="text-center space-y-2">
                    <div className="text-[18vw] relative text-center leading-[13vw] uppercase">
                        <div className="absolute uppercase px-3 py-1 text-6xl z-10 rotate-[10deg] bg-orange-400 rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <h2>storymoving</h2>
                        </div>
                        <h2>Trust the</h2>
                        <h2>process</h2>
                    </div>
                    <p className='font-semibold opacity-80'>Make, Inspire, Export</p>
                </div>
                <div className=" h-[80%] aspect-[9/16] flex flex-col justify-between rounded-lg bg-[#156B40] p-6">
                    <div className="">
                        <div className="w-full grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((item, i) => (
                                <div key={i} className=" rounded-full w-full h-[2px] bg-white"></div>
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
                    <div className=" text-white">
                        <p>#1</p>
                        <div className=" uppercase text-8xl leading-[5rem]">
                            <h2>strategie</h2>
                            <h2>creative</h2>
                        </div>
                        <p className='leading-none text-2xl mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, necessitatibus.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSection