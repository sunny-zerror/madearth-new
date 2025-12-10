import { RiFacebookFill, RiFacebookLine, RiInstagramLine, RiLinkedinFill, RiLinkedinLine, RiMenu2Fill } from '@remixicon/react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
gsap.registerPlugin(CustomEase)
import React, { useEffect, useState } from 'react'

const menuLinks = [
  {
    title: "home", href: "/"
  },
  {
    title: "About", href: "/"
  },
  {
    title: "work", href: "/"
  },
  {
    title: "services", href: "/"
  },
  {
    title: "contact", href: "/"
  },
]

const Header = () => {

  CustomEase.create("custom_open_menu", "0.785, 0.135, 0.15, 0.86");

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {

    if (openMenu) {
      if (window.lenis) window.lenis.stop()
      gsap.to(".drop_menu", {
        rotateX: 0,
        yPercent: 0,
        scale: 1,
        ease: "custom_open_menu",
        duration: 1.2,
      });
      gsap.to(".animate_y_txt", {
        transform: "translateY(0)",
        ease: "custom_open_menu",
        duration: 1.5,
      });
    } else {
      if (window.lenis) window.lenis.start()
      gsap.to(".animate_y_txt", {
        transform: "translateY(100%)",
        ease: "custom_open_menu",
        duration: 1.5,
      });
      gsap.to(".drop_menu", {
        rotateX: 45,
        yPercent: -50,
        scale: 0.5,
        ease: "custom_open_menu",
        duration: 1.2,
      });
    }

  }, [openMenu]);

  return (
    <>

      <div className=" fixed top-0 pointer-events-none text-white left-0 z-[999] flex items-end h-screen w-full  perspective-distant transform-3d">
        <div className="drop_menu w-full pointer-events-auto  h-full flex flex-col justify-end bg-[#182644]
  perspective-distant transform-3d overflow-hidden 
  origin-[50%_0%]
  rotate-x-[45deg] scale-[0.5]
  -translate-y-1/2
">
          <div className="w-full">
            {menuLinks.map((item, i) => (
              <div key={i} className="w-full overflow-hidden cursor-pointer group relative padding py-2 border-b gap-4 border-white flex items-center">
                <div className="absolute group-hover:h-full w-full h-0 transition-all duration-300 ease-in-out bg-white left-0 bottom-0"></div>
                <div className="animate_y_txt mix-blend-difference translate-y-full flex items-center gap-4">
                  <div className="size-10 text-3xl group-hover:ml-5 transition-all duration-300 ease-in-out center mix-blend-difference border-white rounded-full border-[3px]"><h2>{i + 1}</h2></div>
                  <h2 className='text-7xl mix-blend-difference font-thin uppercase leading-none'>{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 padding pb-10 mix-blend-difference">
            <p className='mb-2  uppercase'>Follow Us on </p>
            <div className="flex gap-5">
              <div className="size-12 cursor-pointer hover:scale-110 hover:text-black transition-all duration-300 hover:bg-white mix-blend-difference center rounded-full border border-white">
                <RiFacebookFill />
              </div>
              <div className="size-12 cursor-pointer hover:scale-110 hover:text-black transition-all duration-300 hover:bg-white mix-blend-difference center rounded-full border border-white">
                <RiInstagramLine />
              </div>
              <div className="size-12 cursor-pointer hover:scale-110 hover:text-black transition-all duration-300 hover:bg-white mix-blend-difference center rounded-full border border-white">
                <RiLinkedinFill />
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="w-full  items-center justify-between flex fixed z-[9999] top-0 h-24  padding">
        <div className="">
          <h2 className='text-5xl  ' >MADEARTH</h2>
        </div>
        <div className="cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
          <RiMenu2Fill size={30} />
        </div>
      </div>
    </>
  )
}

export default Header