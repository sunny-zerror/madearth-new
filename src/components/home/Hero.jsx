import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const glyphs = ["▄", "█", "□", "▀", "►", "●", "○", "▪", "▫", "▲", "▼", "◄", "∞"];

const Hero = () => {
  const line1 = "THE CREATIVE ↘ STUDIO FOR";
  const line2 = "▀SCIENCE + TECH BRANDS▫";
  const container = useRef(null);
  const charsRef = useRef([]);
  const [expandVideo, setExpandVideo] = useState(false);

  useLayoutEffect(() => {
    const chars = gsap.utils.toArray(container.current.querySelectorAll(".char"));
    charsRef.current = chars.map((el) => ({
      el,
      char: el.innerText,
      isCoded: true
    }));
  }, []);

  useEffect(() => {
    startInitialGlitch();
    const timeout = setTimeout(() => {
      charsRef.current.forEach(c => {
        c.el.innerText = c.char;
        c.isCoded = false;
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const startInitialGlitch = () => {
    charsRef.current.forEach((c) => {
      c.isCoded = true;
    });
    glitchTick();
  };

  const startGlitch = () => {
    charsRef.current.forEach((c) => {
      c.isCoded = Math.random() > 0.5;
    });
    glitchTick();
  };

  const glitchTick = () => {
    let stillGlitching = false;

    charsRef.current.forEach((c) => {
      if (c.isCoded) {
        stillGlitching = true;

        c.isCoded = Math.random() > 0.25;

        c.el.innerText = c.isCoded
          ? [...glyphs, c.char][Math.floor(Math.random() * (glyphs.length + 1))]
          : c.char;
      }
    });

    if (stillGlitching) {
      setTimeout(glitchTick, 80);
    }
  };

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
        pin: true,
        start: "top top",
        scrub: .4
      }
    })

    tl.to(".hero_bg_vide", {
      filter: "brightness(0.5)",
      scale: 1.4,
      ease: "linear",
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
      scale: .5,
      ease: "expo.inOut",
    }, "<")

    tl.to(".about_head", {
      scale: .4,
      y: -100,
      ease: "expo.inOut",
    })

    tl.from(".about_para", {
      height: 0,
      ease: "expo.inOut",
    }, "<")

  })


  return (
    <div className=' hero_paren w-full h-screen overflow-hidden text-center flex-col relative padding center'>

      <div className=" hero_bg_vide brightness-100 absolute w-full h-screen z-[-1]">
        <video loop autoPlay muted playsInline className='cover' src="/videos/hero_bg.mp4"></video>
      </div>

      <div
        ref={container}
        onMouseEnter={startGlitch}
        className="whitespace-nowrap font-semibold flex flex-col  cursor-pointer select-none"
      >
        <p className="capitalize text-6xl leading-none">
          {line1.split("").map((c, i) => (
            <span key={i} className="char inline-block">
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </p>

        <p className="capitalize text-6xl leading-none">
          {line2.split("").map((c, i) => (
            <span key={i} className="char inline-block">
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </p>
      </div>

      <div
        onClick={() => setExpandVideo(!expandVideo)}
        className="cursor-pointer show_reel rounded-sm overflow-hidden absolute z-[9] bottom-12 aspect-video w-[18vw] right-12"
      >
        <video
          loop autoPlay muted playsInline
          className='cover'
          src="https://cdn.prod.website-files.com/67feae17cea1ad395ebd5409%2F6842b4058c67691b340f0089_VAP%20Studio%20-%20SHOWREEL%20%281%29%20%28online-video-cuttercom%29%20%281%29-transcode.mp4"
        ></video>
      </div>

      <div className="about_paren absolute text-white bg-[#182644] center flex-col h-0 overflow-hidden w-full z-[15] ">
        <div className=" about_head ">
          <h2 className='text-[35vw] leading-[26vw]'>MADEARTH</h2>
          <p className='text-[10vw] leading-[8vw] uppercase'>Creative studios</p>
        </div>

        <div className=" translate-y-[-8vw] about_para w-full  overflow-hidden flex justify-center">
          <p className='text-white w-[45%] text-xl'>The companies we work with push the boundaries in Science + Technology. In us,
            they find a partner who pushes the boundaries in creativity, growth strategy +
            world-class creative production. Together, we transform how complex brands
            express themselves in the intelligence age.</p>
        </div>

      </div>

    </div>
  );
};

export default Hero;
