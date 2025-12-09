import { RiFacebookFill, RiFacebookLine, RiInstagramLine, RiLinkedinFill, RiLinkedinLine, RiMenu2Fill } from '@remixicon/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

const menuLinks=[
  {
    title:"home" , href:"/"
  },
  {
    title:"About" , href:"/"
  },
  {
    title:"work" , href:"/"
  },
  {
    title:"services" , href:"/"
  },
  {
    title:"contact" , href:"/"
  },
]

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {

    if(openMenu){
      gsap.to(".drop_menu", {top:"0%" , ease:"expo.inOut" , duration:1.5})
    }else{
      gsap.to(".drop_menu", {top:"-100%" , ease:"expo.inOut" , duration:1.5})
    }

  }, [openMenu])
  

  return (
    <>

      <div className="drop_menu fixed top-[-100%] left-0 z-[999] flex items-end h-screen w-full bg-yellow-50">
        <div className=" w-full">
            <div className="w-full">
              {menuLinks.map((item,i)=>(
                <div key={i} className="w-full padding py-2 border-b gap-4 border-black flex items-center">
                  <div className="size-8 text-3xl center border-black rounded-full border-[3px]"><h2>{i+1}</h2></div>
                  <h2 className='text-7xl uppercase leading-none'>{item.title}</h2>
                </div>
              ))}
            </div>
            <div className="mt-10 padding pb-10">
              <p className='mb-2 font-semibold uppercase'>Follow Us on </p>
                <div className="flex gap-5">
                  <div className="size-12 center rounded-full border border-black">
                    <RiFacebookFill/>
                  </div>
                  <div className="size-12 center rounded-full border border-black">
                    <RiInstagramLine/>
                  </div>
                  <div className="size-12 center rounded-full border border-black">
                    <RiLinkedinFill/>
                  </div>
                </div>
            </div>
        </div>

      </div>

      <div className="w-full items-center justify-between flex fixed z-[9999] top-0 h-24  padding">
        <div className="">
          <h2 className='text-5xl'>MADEARTH</h2>
        </div>
        <div className="cursor-pointer" onClick={()=>setOpenMenu(!openMenu)}>
          <RiMenu2Fill size={30} />
        </div>
      </div>
    </>
  )
}

export default Header