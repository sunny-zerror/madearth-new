"use client"
import React, { useState } from 'react'

const faq = [
  {
    question: "Do you provide support after the project is completed?",
    answer: "Yes. We don’t disappear at launch — whether we are supporting with design tweaks, scaling your solution, or technical upkeep of websites and products, we stay on-hand to keep things running smoothly."
  },
  {
    question: "What is the typical timeline for a design project?",
    answer: "It depends on scope and complexity. Larger brand or product projects will always take longer — but ultimately be worth it — and we’ll always set clear timelines upfront."
  },
  {
    question: "How do you handle revisions and feedback?",
    answer: "Openly and collaboratively. We build feedback into our process so you’re part of shaping the work, not just reviewing it at the end."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We partner with ambitious founders, growing teams, and established brands across any kind of industry — anyone looking to sharpen their vision and bring bold ideas to life."
  },
]

const ServicesPage = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div
        className=' w-full h-[55vh] flex flex-col justify-end padding bg-[linear-gradient(to_bottom,#f1bb74_20.284%,transparent)]'>
        <p className='text-6xl uppercase font-semibold '>Work with us</p>
        <p className='text-4xl opacity-70'>
          Let's talk about your next chapter
        </p>
      </div>

      <div className="padding mt-44">
        <div className="border-t border-black/20">
          <div className="w-full flex text-2xl">
            <div className="w-1/2 flex flex-col justify-center gap-y-14">
              <div className="">
                <p>Delhi, India</p>
                <p>3.22 Pm</p>
              </div>
              <div className="">
                <p>
                  madearthdelhi@gmail.com
                </p>
                <p>+91 88888 88888</p>
              </div>
              <div className="opacity-70 w-1/2 text-2xl">
                <p>2 Appleby Yard,
                  Soames Walk,
                  London SE10 0BJ, UK</p>
              </div>
            </div>
            <div className="w-1/2 py-14">
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <img src="https://framerusercontent.com/images/xrQOcAlzDb4wcji3OxBLRrwAg.jpg?width=2000&height=1334" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full border-t border-b border-black/20 flex text-2xl">
            <div className="w-1/2 flex flex-col justify-center gap-y-14">
              <div className="">
                <p>Mumbai, India</p>
                <p>3.22 Pm</p>
              </div>
              <div className="">
                <p>
                  madearthmumbai@gmail.com
                </p>
                <p>+91 88888 88888</p>
              </div>
              <div className="opacity-70 w-1/2 text-2xl">
                <p>2 Appleby Yard,
                  Soames Walk,
                  London SE10 0BJ, UK</p>
              </div>
            </div>
            <div className="w-1/2 py-14">
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <img src="https://framerusercontent.com/images/EkRnmhcxDOC0g8HdUiNQ0GjToJE.png?width=1166&height=874" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="padding mt-32 ">
        <p className='text-4xl w-[60%]'>We partner with the world’s disruptors, across emerging, growing, or never-before-heard-of industries.</p>
        <div className="w-full grid mt-20 grid-cols-6 gap-3">
          {[1, 2, 3, 4, 5, 6,].map((item, i) => (
            <button className='bg-[#99a1af0f] hover:bg-[#44546b24] transition-all duration-300 w-full center h-32 rounded-xl '>
              <p>Clients PNG</p>
            </button>
          ))}
        </div>
        <div className="w-full p-10 mt-3 h-[55vh] rounded-xl flex bg-[#99a1af0f]">
          <div className="w-[60%] flex flex-col justify-between">
            <p className='text-3xl'>Everything just flowed. Their expertise, patience and attention to detail made New Genre fantastic partners and I cannot recommend them highly enough.</p>
            <div className="opacity-60">
              <p>John Doe</p>
              <p>Founder, MadEarth</p>
            </div>
          </div>
          <div className="w-[40%] center ">
            <p>Founder img</p>
          </div>
        </div>
      </div>

      <div className="padding my-32">
        <div className=" text-3xl">
          <p>Have questions?</p>
          <p className='opacity-60'>We’ve got answers.</p>
        </div>
        <div className="mt-16">
          {faq.map((item, i) => {
            const isOpen = activeIndex === i;

            return (
              <div key={i} className="w-full py-6 border-b border-black/20">
                {/* QUESTION */}
                <div
                  onClick={() => toggle(i)}
                  className="flex gap-2 cursor-pointer items-center group"
                >
                  <div
                    className={`aspect-square bg-black rounded-full transition-all duration-300
                  ${isOpen ? "w-3" : "w-0 group-hover:w-3"}
                `}
                  />
                  <p className="text-2xl">{item.question}</p>
                </div>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 
                ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
              `}
                >
                  <p className="opacity-60 text-xl w-[60%] leading-tight mt-2">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default ServicesPage