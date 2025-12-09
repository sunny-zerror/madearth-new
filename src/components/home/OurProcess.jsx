import React from 'react'

const processData = [
    {
        id: 1,
        title: " Think",
        desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consectetur quas molestias mollitia harum natus.",
        img: "https://framerusercontent.com/images/et4QRahaD1IWpTLBFmYy8CdeB30.webp?width=800&height=800",
        bgColor: "#163012"
    },
    {
        id: 2,
        title: " create",
        desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consectetur quas molestias mollitia harum natus.",
        img: "https://framerusercontent.com/images/yI4MrBzBm4z4neX701VxGHTMgQE.webp?width=800&height=800",
        bgColor: "#461b0c"
    },
    {
        id: 3,
        title: " build",
        desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consectetur quas molestias mollitia harum natus.",
        img: "https://framerusercontent.com/images/v4UkgalyGHzr9YSSXQAgHOuuo.webp?width=800&height=800",
        bgColor: "#182644"
    },
    {
        id: 4,
        title: " scale",
        desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consectetur quas molestias mollitia harum natus.",
        img: "https://framerusercontent.com/images/gGf7oy4GvhJUjXHkyaFgkqw7LBM.png?width=2224&height=2224",
        bgColor: "#35221d"
    },
]

const OurProcess = () => {
    return (
        <div className='padding'>
            <h2 className='uppercase text-7xl'>Our Process</h2>
            <div className='w-full mt-8 overflow-x-scroll scroller_none  flex gap-2 '>
                {processData.map((item, i) => (
                    <div
                        key={i}
                        className={`w-[30vw] hover:text-white shrink-0 relative rounded-2xl p-8 aspect-[3/4] group transition-all duration-300 bg-[#99a1af0f]`}
                        style={{
                            backgroundColor: "#99a1af0f"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = item.bgColor}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#99a1af0f"}
                    >
                        <h2 className='text-5xl uppercase'>{item.title}</h2>
                        <p className='text-xl leading-none opacity-60 mt-4'>{item.desc}</p>
                        <div className="absolute bottom-0">
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurProcess