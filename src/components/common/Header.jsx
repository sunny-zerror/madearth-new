import { RiFacebookFill, RiFacebookLine, RiInstagramLine, RiLinkedinFill, RiLinkedinLine, RiMenu2Fill } from '@remixicon/react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
gsap.registerPlugin(CustomEase)
import React, { useEffect, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

const menuLinks = [
  {
    title: "home", href: "/"
  },
  {
    title: "About", href: "/"
  },
  {
    title: "work", href: "/work"
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

      <div className=" fixed top-0 pointer-events-none  left-0 z-[999] flex items-end h-screen w-full  perspective-distant transform-3d">
        <div className="drop_menu w-full pointer-events-auto  h-full flex flex-col justify-end bg-[#A8D37E]
  perspective-distant transform-3d overflow-hidden 
  origin-[50%_0%]
  rotate-x-[45deg] scale-[0.5]
  -translate-y-1/2
">
          <div className="w-full">
            {menuLinks.map((item, i) => (
              <a href={item.href} key={i} className="w-full overflow-hidden cursor-pointer group relative padding py-2 border-b gap-4 border-black flex items-center">
                <div className="absolute group-hover:h-full w-full h-0 transition-all duration-300  ease-in-out bg-black left-0 bottom-0"></div>
                <div className="animate_y_txt  translate-y-full flex items-center gap-4">
                  <div className="size-10 text-3xl group-hover:ml-5 transition-all duration-300 ease-in-out center group-hover:text-[#A8D37E] transition-all duration-300  border-black group-hover:border-[#A8D37E] rounded-full border-[3px]"><h2>{i + 1}</h2></div>
                  <h2 className='text-7xl  group-hover:text-[#A8D37E] transition-all duration-300 font-thin uppercase leading-none'>{item.title}</h2>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 padding pb-10 ">
            <p className='mb-2  uppercase'>Follow Us on </p>
            <div className="flex gap-5">
              <div className="size-12 cursor-pointer hover:scale-110 hover:text-[#A8D37E] transition-all duration-300 hover:bg-black  center rounded-full border border-black">
                <RiFacebookFill />
              </div>
              <div className="size-12 cursor-pointer hover:scale-110 hover:text-[#A8D37E] transition-all duration-300 hover:bg-black  center rounded-full border border-black">
                <RiInstagramLine />
              </div>
              <div className="size-12 cursor-pointer hover:scale-110 hover:text-[#A8D37E] transition-all duration-300 hover:bg-black  center rounded-full border border-black">
                <RiLinkedinFill />
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="w-full    items-center justify-between flex fixed z-[9999] top-0 h-24  padding">
        <a href="/" className="">
          <img className='w-24  ' src="/logo.png" alt="logo" />
        </a>
        {/* <div className="cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
          <RiMenu2Fill size={30} />
        </div> */}
        <div className="size-12 relative group overflow-hidden hover:text-white rounded-full center">
          <div className="w-full h-full group-hover:scale-100 rounded-full z-[-1] transition-all duration-300 ease-in-out scale-0 absolute bg-black"></div>

          <Hamburger size={20} toggled={openMenu} toggle={setOpenMenu} />
        </div>
      </div>
    </>
  )
}

export default Header