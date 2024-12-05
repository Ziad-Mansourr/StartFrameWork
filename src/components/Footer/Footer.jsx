import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className=''>
            <div className='left-0 right-0 bg-[#2c3e50] text-white'>
                <div className='max-w-screen-xl mx-auto'>
                    <div className="container mx-auto">
                        <section className='grid grid-cols-12 py-24 text-center'>
                            <div className="md:col-span-3 col-span-12 max-md:mb-6 ">
                                <h2 className='uppercase text-3xl font-semibold pb-3'>location</h2>
                                <h3 className='pb-4'>2215 John Daniel Drive</h3>
                                <h3>Clark, MO 65243</h3>
                            </div>
                            <div className="md:col-span-5 col-span-12 max-md:mb-6">
                                <h2 className='uppercase text-3xl font-semibold'>AROUND THE WEB</h2>
                                <i className='fa-brands fa-facebook text-lg text-white border rounded-full p-2 mt-3 me-3'></i>
                                <i className='fa-brands fa-twitter text-lg text-white border rounded-full p-2 mt-3 me-3'></i>
                                <i className='fa-brands fa-linkedin-in text-lg text-white border rounded-full p-2 mt-3 me-3'></i>
                                <i className='fa-solid fa-globe text-lg text-white border rounded-full p-2 mt-3 me-3'></i>
                            </div>
                            <div className="md:col-span-4 col-span-12 max-md:mb-6">
                                <h2 className='text-3xl font-semibold pb-3'>ABOUT FREELANCER</h2>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 text-white">
                <div className=' max-w-screen-xl mx-auto '>
                    <div className="container mx-auto ">
                        <h4 className='text-center p-5'>Copyright © Your Website 2021</h4>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    )
}
