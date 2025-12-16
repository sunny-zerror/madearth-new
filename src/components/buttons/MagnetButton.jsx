import { RiArrowRightLine } from '@remixicon/react'
import gsap from 'gsap'
import { Link } from 'next-view-transitions'
import React from 'react'

const MagnetButton = ({ link, text }) => {

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
            <Link href={link}>
                <button onMouseEnter={buttonHover} onMouseLeave={buttonHoverOut} className=' relative flex group '>
                    <div className=" arrow_cir_bx absolute bg-black text-white size-9 -left-[3rem]  center rounded-full ">
                        <RiArrowRightLine size={16} />
                    </div>
                    <div className=' h-9 px-4 bg-black text-white center rounded-full'>
                        <p>
                            {text}
                        </p>
                    </div>
                </button>
            </Link>
        </>
    )
}

export default MagnetButton