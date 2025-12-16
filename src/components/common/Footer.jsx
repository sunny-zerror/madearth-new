"use client";
import { RiArrowRightLine, RiFacebookLine, RiInstagramLine, RiTwitterXLine, RiWhatsappLine } from '@remixicon/react'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import MagnetButton from '../buttons/MagnetButton';
import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const pathname = usePathname();
  const imgRef = useRef(null);
  const seqRef = useRef(null);
  const imagesRef = useRef([]);
  const initialized = useRef(false);

  const totalFrames = 128;
  const basePath = "/images/flower_frame/";

  const images = Array.from({ length: totalFrames }, (_, i) => {
    const num = String(i + 1).padStart(3, "0");
    return `${basePath}frame${num}.webp`;
  });

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    imagesRef.current = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  }, []);

  useEffect(() => {
    if (!imgRef.current || !seqRef.current) return;

    imgRef.current.src = `${basePath}frame001.webp`;

    const obj = { frame: 0 };

    const trigger = ScrollTrigger.create({
      trigger: seqRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      invalidateOnRefresh: true,

      onUpdate: (self) => {
        const frame = Math.min(
          totalFrames - 1,
          Math.floor(self.progress * totalFrames)
        );

        if (obj.frame !== frame) {
          obj.frame = frame;
          imgRef.current.src = imagesRef.current[frame].src;
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [pathname]);


  return (
    <>
      <div className=' footer_paren w-full pt-20'>
        <div className="footer_links_paren  padding">
          <div className="flex gap-2 items-center  padding">
            <MagnetButton link={"/contact"} text={"Contact Us"} />
          </div>
          <div className="w-full grid grid-cols-[25%_25%_50%] mt-14">
            <div className="w-full space-y-5" >
              <div className="">
                <p className=' text-lg'>Mumbai, India</p>
                <p className='text-lg'>3.22 Pm</p>
              </div>
              <div className="">
                <p>hello@madearth.com</p>
                <p>+91 123456789</p>
              </div>
              <div className="">
                <p>© Mad Earth. All rights reserved.</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="">
                <p className=' text-lg'>Delhi, India</p>
                <p className='text-lg'>3.22 Pm</p>
              </div>
              <div className="">
                <p className=' text-lg'>Kolkata, India</p>
                <p className='text-lg'>3.22 Pm</p>
              </div>
            </div>
            <div className="w-full items-end flex flex-col space-y-2 justify-end">
              <div className="flex gap-5 ">
                <p>LinkedIn</p>
                <p>Instagram</p>
                <p>X</p>
                <p>Join Us</p>
              </div>
              <p className='text-sm '>Developed by <a href='https://www.zerrorstudios.com/' target='_blank' className='underline hover:opacity-60 transition-all duration-300 '> Zerror Studios</a></p>
            </div>
          </div>
        </div>
      </div>
      <div ref={seqRef} className="seq_parent h-[250vh] w-full  flex justify-center relative">
        <img
          ref={imgRef}
          src={`${basePath}frame001.webp`}
          className="h-screen sticky top-0"
          alt=""
        />
      </div>
    </>
  );
};

export default Footer;
