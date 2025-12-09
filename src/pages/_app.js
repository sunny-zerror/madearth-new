import Layout from "@/components/Layout";
import LenisScroll from "@/components/common/LenisScroll";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import "aos/dist/aos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.lenis) window.lenis.resize();
    }, 500);
    return () => clearTimeout(timeout);
  }, [router.asPath]);

  useEffect(() => {
    const elements = document.querySelectorAll("img[title], a[title]");
    elements.forEach((el) => {
      const title = el.getAttribute("title");
      el.addEventListener("mouseenter", () => el.removeAttribute("title"));
      el.addEventListener("mouseleave", () => el.setAttribute("title", title));
    });
    return () => {
      elements.forEach((el) => {
        el.replaceWith(el.cloneNode(true));
      });
    };
  }, []);

  return (
    <LenisScroll>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </LenisScroll>
  );
}
