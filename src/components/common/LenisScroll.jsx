"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { usePathname, useSearchParams } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function LenisScroll({ children }) {
  const lenis = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // RESET SCROLL ON ROUTE CHANGE
  useEffect(() => {
    if (lenis.current) {
      lenis.current.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;

    const instance = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.current = instance;
    window.lenis = instance;

    // 🔥 CONNECT LENIS TO GSAP
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          instance.scrollTo(value, { immediate: true });
        }
        return instance.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // RAF LOOP
    const raf = (time) => {
      instance.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // IMPORTANT
    ScrollTrigger.defaults({ scroller: document.body });
    ScrollTrigger.refresh();

    return () => {
      instance.destroy();
      lenis.current = null;
      window.lenis = null;

      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <>{children}</>;
}
