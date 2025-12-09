import { RiArrowRightLine, RiFacebookLine, RiInstagramLine, RiTwitterXLine, RiWhatsappLine } from '@remixicon/react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full pt-20 pb-10  padding'>
      <div className="flex items-center font-semibold text-3xl">
        <p>Work with us</p>
        <RiArrowRightLine />
      </div>
      <div className="w-full grid grid-cols-4 mt-14">
        <div className="w-full space-y-5" >
          <div className="">
            <p className='font-semibold text-lg'>Mumbai, India</p>
            <p className='text-lg'>3.22 Pm</p>
          </div>
          <div className="">
            <p>madearth@gmail.com</p>
            <p>+91 123456789</p>
          </div>
          <div className="">
            <p>31 Andheri West, Mumbai, India</p>
          </div>
        </div>
        <div className="">
          <p className='font-semibold text-lg'>Delhi, India</p>
          <p className='text-lg'>3.22 Pm</p>
        </div>
      </div>
      <div className="w-full mt-10 flex items-center justify-between">
        <div className="">
          <h2 className='uppercase text-4xl'>MADEARTh</h2>
        </div>
        <div className="flex gap-5 font-semibold">
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>X</p>
          <p>Join Us</p>
        </div>
      </div>

    </div>
  )
}

export default Footer