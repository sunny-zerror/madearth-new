"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { isViewTransitioning } from '../utility/viewTransitionState';
import PlanetScene from './heroSection/PlanetScene';

const glyphs = ["▄", "█", "□", "▀", "►", "●", "○", "▪", "▫", "▲", "▼", "◄", "∞"];

const Hero = () => {
  const line1 = "MAD ▫ Earth ";
  const line2 = "Creativity ▪ That ↗ Resonates";
  const container = useRef(null);
  const charsRef = useRef([]);
  const [expandVideo, setExpandVideo] = useState(false);

  // const startInitialGlitch = () => {
  //   charsRef.current.forEach((c) => {
  //     c.isCoded = true;
  //   });
  //   glitchTick();
  // };

  // const startGlitch = () => {
  //   if (isViewTransitioning) return;

  //   charsRef.current.forEach((c) => {
  //     c.isCoded = Math.random() > 0.5;
  //   });

  //   glitchTick();
  // };

  // const glitchTick = () => {
  //   let stillGlitching = false;

  //   charsRef.current.forEach((c) => {
  //     if (c.isCoded) {
  //       stillGlitching = true;

  //       c.isCoded = Math.random() > 0.25;

  //       c.el.textContent = c.isCoded
  //         ? [...glyphs, c.char][
  //         Math.floor(Math.random() * (glyphs.length + 1))
  //         ]
  //         : c.char;
  //     }
  //   });

  //   if (stillGlitching) {
  //     const t = setTimeout(glitchTick, 80);
  //     charsRef.current.forEach(c => (c.timeout = t));
  //   }
  // };


  // useLayoutEffect(() => {
  //   const chars = gsap.utils.toArray(
  //     container.current.querySelectorAll(".char")
  //   );

  //   charsRef.current = chars.map((el) => ({
  //     el,
  //     char: el.textContent, // ORIGINAL TEXT
  //     isCoded: false,
  //     timeout: null
  //   }));
  // }, []);


  // useEffect(() => {
  //   charsRef.current.forEach(c => {
  //     c.el.textContent = c.char;
  //     c.isCoded = false;
  //   });

  //   startInitialGlitch();

  //   const timeout = setTimeout(() => {
  //     charsRef.current.forEach(c => {
  //       c.el.textContent = c.char;
  //       c.isCoded = false;
  //     });
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeout);

  //     charsRef.current.forEach(c => {
  //       if (c.timeout) clearTimeout(c.timeout);
  //       c.el.textContent = c.char;
  //       c.isCoded = false;
  //     });
  //   };
  // }, []);


  useEffect(() => {
    const lenis = window.lenis;
    if (!lenis) return;

    requestAnimationFrame(() => {
      if (expandVideo) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    gsap.to(".show_reel", {
      width: expandVideo ? "100%" : "18vw",
      right: expandVideo ? 0 : "3rem",
      bottom: expandVideo ? 0 : "3rem",
      ease: "expo.inOut",
      duration: 1.4
    });

  }, [expandVideo]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero_paren",
        start: "top top",
        end:"bottom bottom",
        scrub: .4
      }
    })

    tl.to(container.current, {
      scale: 1.4,
      gap: "6rem",
      ease: "linear",
    }, "<")

    tl.to(".about_paren", {
      height: "100%",
      ease: "expo.inOut",
    }, "<")

    tl.from(".about_head", {
      scale: .6,
      ease: "expo.inOut",
    }, "<")

    tl.to(".about_head", {
      scale: .5,
     top:"-15%",
      ease: "expo.inOut",
    })
    tl.to(".show_reel_vid", {
      borderRadius: "2rem",
      ease: "expo.inOut",
    },"<")

    tl.from(".about_para", {
      height: 0,
      ease: "expo.inOut",
    }, "<")

  })


  return (
    <div className=' hero_paren w-full h-[250vh]'>
      <div
        style={{
          background: "linear-gradient( to bottom , #6FC4D7 30.284%, transparent 100%)"
        }} className='  sticky top-0 w-full h-screen overflow-hidden text-center flex-col  padding center'>

        {/* <div className=" hero_bg_vide brightness-100 absolute w-full h-screen z-[-1]">
        <video loop autoPlay muted playsInline className='cover' src="/videos/hero_bg.mp4"></video>
      </div> */}

        {/* <div className="absolute w-[20%] text-left leading-none  bottom-12 left-12  ">
          <p className='medium'>We are Mad Earth — a design-led studio crafting bold identities and intelligent visual systems through the power of design thinking.</p>
        </div>
        <div className="absolute   leading-none  bottom-12 right-12  ">
          <p className='medium'>Scroll ↓</p>
        </div> */}

        {/* <div
          ref={container}
          onMouseEnter={startGlitch}
          className="whitespace-nowrap font-semibold flex flex-col  cursor-pointer select-none"
        >
          <div className="capitalize text-[15vw]  font-thin text-white leading-none">
            {line1.split("").map((c, i) => (
              <h2 key={i} className="char inline-block">
                {c === " " ? "\u00A0" : c}
              </h2>
            ))}
          </div>

          <p className="capitalize text-6xl leading-none">
            {line2.split("").map((c, i) => (
              <span key={i} className="char inline-block">
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </p>
        </div> */}

            <div className="planet_section absolute z-[-1] w-full h-full">
              <PlanetScene />
            </div>

        {/* <div
          onClick={() => setExpandVideo(!expandVideo)}
          className="cursor-pointer show_reel rounded-sm overflow-hidden absolute z-[9] bottom-12 aspect-video w-[18vw] right-12"
        >
          <video
            loop autoPlay muted playsInline
            className='cover'
            src="/videos/show_reel.mp4"
          ></video>
        </div> */}

        <div className="about_paren absolute  bg-[#6FC4D7] flex   items-end  h-0 overflow-hidden w-full z-[15] ">
          <div className=" about_head absolute top-0 w-full h-full">
            <video
            loop autoPlay muted playsInline
            className='cover show_reel_vid'
            src="/videos/show_reel.mp4"
          ></video>
          </div>

          <div className="about_para relative z-50 w-full  mb-[5vw] overflow-hidden flex justify-center">
            <p className=' w-[45%] text-xl medium leading-tight'>Mad Earth is a strategic design studio rooted in design thinking and storytelling. We specialize in creating cohesive brand identities and immersive visual experiences that spark connection and clarity. <br /> <br /> With a multidisciplinary approach spanning branding, editorial, and digital design, we partner with clients to shape narratives, systems, and aesthetics that are not only beautiful — but meaningful and effective.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
