import { RiArrowRightLine, RiFacebookLine, RiInstagramLine, RiTwitterXLine, RiWhatsappLine } from '@remixicon/react'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const images = [
  "https://framerusercontent.com/images/ivazyeuOl1JGCYfALIBiGvg6ns.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/1nvPyff4ED7RfDnuYvNH4Z3gbRM.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/YocOTUvkC17hNlKxh5X4MOZrYA.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/8kXwutQDBtvFeKoOj3cUv8ffaA.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/omYqbaOavKOL7NONZhhhZRe5Q.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/zULfzTbcvq6qHUP0bFKRy0S0bhc.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/rEnxMcQPXuKeyCjkB1Wc8MIIcL0.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/WFtPMPv7gjUgfnRZ1H7oMONdCM.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/A4itn32SCuxXOUlzqPcfZ5STwk.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/06WWAs5ww6z1PXfNuX9vlY6ato.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/0OYhkPJqHFtE36mzLLJss0C8W0M.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/1M4MjaVHGK0hQaOogc6Ry3Xj68.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/dmjspHcLdJJ3b3szSKDAMohnY.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/BKZgZ58iH36ioScSb8fLki3yU.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/vIaHSuD9nVWAvSd2ossiDM7XE0.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/abXfh2yxb8RusqqBlDQa23vwVs.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/fQP8rR1MbBkQoKMaFSGTJM2BTk.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/42LxgbUGHyKEwvbeYc38GbvKXwE.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/UzXujAj3IqZQR5t2mq7kY4eZr3I.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/3YigoGKTy5eJZVu6WnvTuV88.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/WXIeUB1XfZQx7bq1TaRheeRqjc.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/vc8TDijFwlVQAq08iXuq8NV9fM.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/QhhYcb35eAEbx7AM5LcFw5FI4.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/oNGDq1gLIAZQtxWauq9DZsx9bA.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/rZWBzdhM17JVwHb6Am5vMgrra4.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/sVmaTtRNkh7CdI74UFUST7wNlog.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/K1PLL1I1lBx5zqeurh7dHx2ZAQY.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/Y3EMYEPE8ijYNeC7wH3Ph6PUCw.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/TUfLt0hAad3jxJYJ571Rd4INg.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/24tQIP813CnfDCxFKmofvTs6cM.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/vDTOqT8kIfIDMOxydw6v5JqjlA.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/KGNYJBp7BcSDtV5cwmBfp2yirY.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/10UFPEdFeJpj58dhHsAWMhn0EPg.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/VOSyE6e1brvEp0wBSYD9Dcw9BDA.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/NximUZ6k5wQZXrqd7aWWTf1qc.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/JX7N5cgEloOhAFs6hzJ1GmOXMro.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/7X1bQ8LNRYenKvNEIvF2XBkjsBg.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/fDKiIlw1wFpggcN1EOvW3dEM4Bc.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/j6PCZzyj9Vch1eJ8Ty3vVkH8fwI.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/qa2nrFr893RY16w30lxZCFzcMuo.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/7kLgq3DGzYn5MEBkjTWyu1eYSs.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/GIWiqRbBbpypBaBZ6s0yFai26k.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/x9DEA9e42hRtopoSSKOeoT0WCF8.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/5FHwgPZAuuIpDzKEOad5lYmMPOo.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/3vkS4mCRrq04rtw2SrZAnJvi0.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/Ygy0TMSf3fRQLVA6bJrYJl3NIXQ.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/LlUPJJwt9MwMtA2sjghifkQsLt8.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/bNJJo1g0HFfNwmPrF02vY4uKRPw.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/vc5Nh9z0bltlzOyj7iyQoDieRGw.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/2nMVTZkuc0RxHnN9xVcy57TIrE.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/3YrzC9NmJRppP20dQkA51UP8ELo.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/1EAcJIqR1giVMquNpLGyDRUSOTs.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/wUQ4lyPy2XAkFTi75tZVb8gX8.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/waqvuWenCIuwl6j1gJquU0P4Wc0.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/ALupIHgtFQVE2KzW6SFYT1amG9Q.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/7NWBKwjKHCyehGvR9Whg4S8F3xw.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/auVtApEXEmsSL9NRIf8hqOybog.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/pvgSIwFJVWWb0mYa90U2wT6RQXQ.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/NMo2EgMs6ybP4xsHrpSOXw3oAA8.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/PANiVCKlcfFhQ5dTgOY1e5neYnU.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/CuREaQmHrzgulzeXVWSeaLwWcU.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/LiHc3rFEqkqvPBsdBFqdP8eu6o.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/33ff4pfpHDDMvY9Af2BsxfyqM.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/RpNKjhb4J0SethwNz3pUv5iDPV0.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/UN8h7X4HgVvUI6RPs4TAmoGIYU.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/yVnxc6su5dCJIHokCzxF8yR6Ga4.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/3dLeQzTGaw9dK4JdjhWgMjx4wQ.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/Zp4h5a2nUudhm7eUJkojb1pt8.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/IwuVenF2ANJ8ZHJuMQ5KdkkPsw.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/TKOuwPTS95wMpwk9kMH6F6hrU4.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/fbx5NSu2eMohPbOzK6C21mUjR9A.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/SBkdg5vZ7W36QmFbXBMJW4T3IzI.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/k1xZ6UCHsDCNfZaOnx7Xnb4qgs.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/44bCNJ0znztOFmPNp0OLtVXDSA.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/rWhafef2sGBDllsFIFxovpWIg.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/X56HMFd15cFk1CpcMQ18x4o1TEo.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/lu93UtXnabFT0zhbnFfpuj8LilI.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/5GOTf1xzD95hIjMTkp1dS80gq3U.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/l97cFc9D0ePLQbO4rdOGKuwy7uQ.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/Og8EXd10tYIJDYJ5pGv3So4QuB8.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/AYBMYtoQyog6qprQglTBfjlh0.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/MzgVC8Lc4tBKcXLQIn682J9GM.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/DrlFGESJVdEBu0W3xoWvfJ5B9t0.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/fbKWRIMgtMPHXrcKoMbWKITWdY.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/XUcE1yCdKPAG8Y8zBfN8aVWlhqI.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/wBs3bBUiacOaEnUJNDLI6kdxxSs.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/mHHH4dkQn78Tza3XWQc1fgWAclE.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/SyDAMwS7ZI7VhAIiCORXF2EsyKg.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/piypf3RpYpmgXDDytbl0SNFLDk0.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/idxkplAvlMdoycMTbepA7FU.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/nmb8RezOWPWIQRzbe31IiK4TZ4w.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/isUViFaiuKQHVXS4430XgPrio.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/cx5KB3qVT69GPsQ3Wg8pZ22ed0.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/b1uDTII0qEEpg5LIfltGxFxvyE.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/0zWnd6s1LhW8RB02sj5hl6NV1o.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/VFkYwzVDDWmdMoyyIkCU5Jwc.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/W0kVCyTkQyVLAVkRHAOeYVgoSOY.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/fTVX9VxihfmFpA4oJWiugSC7E8.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/XeNhenmyD7dTJD4uwYAcIAapRwc.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/9Mz79veuxE9TjO14qY5tpOGkMeU.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/e8zlltRf7jqDZsQoGW42kBaiY4.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/7IbMPWhNyuFnSubQRkCD24RGU.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/lP40Vsf1F4VMo8PlQF0OMxNpR3I.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/IMlxtXOMjwEIholq36NHwE97Ubg.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/bAuVfKc9nIb8w7aPmFnGcxarNA4.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/jDH04OPDxTSrqYx4TL8PKusc.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/ifwf7dvYZph0d3YjDxwSRbd4uAU.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/Aot9d0lSd6Vqu9htwgNaZ25S48.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/fUReeb2hHJaXezP9iumRwFE8A.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/xFp3AQxKDH1EBGmTIaGKmqnKU0.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/xym0IJPWufO1IZrbWwyzcTqWrOs.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/B1bRnsPoka36P6ztZVugQ3BWFI.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/zGKgtJsCvTXyKcPMxVXnUz8QG9M.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/QlWXTXhA2TOrraequVoUDLLfrg.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/bddrcbVLoeJiI4zeNr8xPgNxxE.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/db2nrYbsMcP2ZviDBwBNkDSjkP4.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/RSEQ8mPuqFeDUGuKmOJ1S1mYDw.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/uTdVe6VCE1RPSXuaKoMbJVGlA.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/v0vE8u2339J2z9j0ChSovygWPo.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/9jwe9MO3H7Yg8CBgGyxupgiGd68.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/3zk20SYE8DVDQLT0MbakOMsts8A.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/3O9GZSq8HZQu3oKgXi0k8lIY.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/BZ118hdTnqndwahmRayIguColl4.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/xwWNx1RUw0So9HakRlruA1X64.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/tO9MKaRoLXckX44W64DKUTHM.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/Xbdzh2WoY1R2cpcnBRDV190.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/CuRMZeuYpsmqxUqaWYEnozYR8Lc.webp?width=2160&height=2160",
  "https://framerusercontent.com/images/zCIfuvDx0sy7wF6m9IRbQli0c.webp?width=2160&height=2160"
];
const Footer = () => {
  const imgRef = useRef(null);
  const cachedImages = useRef([]);

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
        <img ref={imgRef} src={images[0]} className=" sticky top-0 h-screen" />
      </div>
    </>
  );
};

export default Footer;
