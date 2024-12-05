import React from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
export default function Portfolio() {
    let [openModal, setOpenModal] = useState(false);
    let [img, setimg] = useState('');
    return (
        <div>
            <div className=' max-w-screen-xl mx-auto'>
                <div className=" container mx-auto">
                    <h1 className='uppercase text-4xl font-bold text-gray-700 text-center mt-[145px] '>portfolio component</h1>
                    <div className="flex justify-center px-12 pt-5">
                        <div className="border-b-4 me-4 border-gray-700 h-3 w-[100px]"></div>
                        <i className='fa-solid fa-star text-gray-700'></i>
                        <div className="border-b-4 ms-4 border-gray-700 h-3 w-[100px]"></div>
                    </div>
                </div>
            </div>
            <div className=' max-w-screen-xl mx-auto m-5 flex flex-col gap-10'>
                <div className=" container mx-auto grid grid-cols-12 gap-10 p-4">
                    <div onClick={() => { setOpenModal(true), setimg('/poert1.png') }} className="relative max-sm:col-span-12 max-md:col-span-6 col-span-4 rounded-lg car ">
                        <img src="/poert1.png" className='rounded-lg w-full' alt="" />
                        <div className='absolute top-0 w-full rounded-lg dd flex  hover:bg-[#1abc9ce6] h-full justify-center items-center transition-all duration-500'>
                            <i className='fa-solid fa-plus text-8xl icon opacity-0 text-white'></i>
                        </div>
                    </div>
                    <div onClick={() => { setOpenModal(true), setimg('/port2.png') }} className="relative max-sm:col-span-12 max-md:col-span-6 col-span-4 rounded-lg car ">
                        <img src="/port2.png" className='rounded-lg' alt="" />
                        <div className='absolute top-0 w-full rounded-lg dd flex  hover:bg-[#1abc9ce6] h-full justify-center items-center transition-all duration-500'>
                            <i className='fa-solid fa-plus text-8xl icon opacity-0 text-white'></i>
                        </div>
                    </div>
                    <div onClick={() => { setOpenModal(true), setimg('/port3.png') }} className="relative max-sm:col-span-12 max-md:col-span-6 col-span-4  rounded-lg car ">
                        <img src="/port3.png" className='rounded-lg' alt="" />
                        <div className='absolute top-0 w-full rounded-lg dd flex  hover:bg-[#1abc9ce6] h-full justify-center items-center transition-all duration-500'>
                            <i className='fa-solid fa-plus text-8xl icon opacity-0 text-white'></i>
                        </div>
                    </div>

                    <div onClick={() => { setOpenModal(true), setimg('/poert1.png') }} className="relative max-sm:col-span-12 max-md:col-span-6 col-span-4  rounded-lg car ">
                        <img src="/poert1.png" className='rounded-lg' alt="" />
                        <div className='absolute top-0 w-full rounded-lg dd flex  hover:bg-[#1abc9ce6] h-full justify-center items-center transition-all duration-500'>
                            <i className='fa-solid fa-plus text-8xl icon opacity-0 text-white'></i>
                        </div>
                    </div>
                    <div onClick={() => { setOpenModal(true), setimg('/port2.png') }} className="relative max-sm:col-span-12 max-md:col-span-6 col-span-4 rounded-lg car ">
                        <img src="/port2.png" className='rounded-lg' alt="" />
                        <div className='absolute top-0 w-full rounded-lg dd flex  hover:bg-[#1abc9ce6] h-full justify-center items-center transition-all duration-500'>
                            <i className='fa-solid fa-plus text-8xl icon opacity-0 text-white'></i>
                        </div>
                    </div>
                    <div onClick={() => { setOpenModal(true), setimg('/port3.png') }} className="relative max-sm:col-span-12 max-md:col-span-6 col-span-4 rounded-lg car ">
                        <img src="/port3.png" className='rounded-lg' alt="" />
                        <div className='absolute top-0 w-full rounded-lg dd flex  hover:bg-[#1abc9ce6] h-full justify-center items-center transition-all duration-500'>
                            <i className='fa-solid fa-plus text-8xl icon opacity-0 text-white'></i>
                        </div>
                    </div>
                </div>
            </div>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className='border-0'>
                <Modal.Body className='p-0 '>
                    <div className="">
                        <img src={img} alt="" />
                    </div>
                </Modal.Body>
            </Modal>
        </div>

    )
}
