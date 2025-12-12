import { RiArrowRightLine, RiFacebookLine, RiInstagramLine, RiTwitterXLine, RiWhatsappLine } from '@remixicon/react'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const imgRef = useRef(null);
  const cachedImages = useRef([]);

  const totalFrames = 128;
  const basePath = "/images/flower_frame/";

  const images = Array.from({ length: totalFrames }, (_, i) => {
    const num = String(i + 1).padStart(3, "0");
    return `${basePath}frame${num}.webp`;
  });

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;

          img.onload = () => resolve(img);
          img.onerror = () => resolve(img);
        });
      });

      cachedImages.current = await Promise.all(promises);
      startScrollAnimation();
    };

    preloadImages();

    function startScrollAnimation() {
      let frame = { index: 0 };

      gsap.to(frame, {
        index: images.length - 1,
        ease: "linear",
        scrollTrigger: {
          trigger: ".seq_parent",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        onUpdate: () => {
          const idx = Math.floor(frame.index);
          imgRef.current.src = cachedImages.current[idx].src;
        },
      });
    }
  }, []);

  return (
    <>
      <div className=' footer_paren w-full pt-20'>

        <div className=" footer_desc padding w-full h-[80vh] space-y-32">
          <p className='text-6xl '>Ready to make the leap? <br />
            Share your vision, and we’ll help shape it into <br /> something unforgettable.</p>

          <button className='px-4 py-2 font-semibold bg-black/5 backdrop-blur-lg rounded-full'>Our Approach</button>
        </div>

        <div className="footer_links_paren bg-[#1e1310] text-white padding">
          <div className="flex gap-2 items-center  text-3xl">
            <p>Work with us</p>
            <RiArrowRightLine />
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
      <div className="seq_parent h-[250vh] w-full flex justify-center relative">
        <img ref={imgRef} src={`${basePath}frame001.webp`} className="h-screen sticky top-0" />
      </div>
    </>
  );
};

export default Footer;
