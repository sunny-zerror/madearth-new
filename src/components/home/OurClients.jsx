import React from 'react'

const OurClients = () => {
    return (
        <>
            <div className='process_paren mt-32 mb-20 padding w-full '>

                <h2 className='uppercase text-7xl'>Our Clients</h2>

                <div className="w-full grid my-10 grid-cols-6 gap-3">
                    {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,].map((item, i) => (
                        <button key={i} className='bg-[#99a1af0f] hover:bg-[#44546b24] transition-all duration-300 w-full center aspect-square rounded-xl '>
                            <p>Clients PNG</p>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default OurClients