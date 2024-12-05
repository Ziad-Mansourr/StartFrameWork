import React, { useState } from 'react'
export default function Contact() {
  let [count, setCount] = useState(0);
  let [title, settitle] = useState('');
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);
  function checkName(e){
    setCount(e.target.value.length);
  }
  function checkAge(e){
    setCount1(e.target.value.length);
  }
  function checkEmail(e){
    setCount2(e.target.value.length);
  }
  function checkPass(e){
    setCount3(e.target.value.length);
  }
  return (
    <div>
      <div className=' max-w-screen-xl mx-auto '>
        <div className=" container mx-auto ">
          <h1 className='uppercase text-4xl font-bold text-gray-700 text-center mt-[145px] '>conatct section</h1>
          <div className="flex justify-center px-12 pt-5 mb-20" >
            <div className="border-b-4 me-4 border-gray-700 h-3 w-[100px]"></div>
            <i className='fa-solid fa-star text-gray-700'></i>
            <div className="border-b-4 ms-4 border-gray-700 h-3 w-[100px]"></div>
          </div>
        </div>
        </div>
        <div className=' max-w-screen-xl mx-auto m-5 '>
          <div className=" container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col w-[60%] mb-6 relative">
             <label htmlFor="userName"  className={count<=0?'text-success mb-2 absolute -top-0 opacity-0 duration-500':'text-success mb-2 absolute -top-6 opacity-1 duration-500'}>userName:</label>
             <input type="text" id='userName' onInput={checkName} className='w-full shadow-sm border-0 rounded-lg p-4 focus:outline-none focus:ring-0' placeholder='userName'/>
            </div>
            <div className="flex flex-col w-[60%] mb-6 relative">
             <label htmlFor="userAge"  className={count1<=0?'text-success mb-2 absolute -top-0 opacity-0 duration-500':'text-success mb-2 absolute -top-6 opacity-1 duration-500'}>userAge:</label>
             <input type="text" id='userAge' onInput={checkAge} className='w-full shadow-sm border-0 rounded-lg p-4 focus:outline-none focus:ring-0' placeholder='userAge'/>
            </div>
            <div className="flex flex-col w-[60%] mb-6 relative">
             <label htmlFor="userEmail"  className={count2<=0?'text-success mb-2 absolute -top-0 opacity-0 duration-500':'text-success mb-2 absolute -top-6 opacity-1 duration-500'}>userEmail:</label>
             <input type="text" id='userEmail' onInput={checkEmail} className='w-full shadow-sm border-0 rounded-lg p-4 focus:outline-none focus:ring-0' placeholder='userEmail'/>
            </div>
            <div className="flex flex-col w-[60%] mb-6 relative">
             <label htmlFor="userPass"  className={count3<=0?'text-success mb-2 absolute -top-0 opacity-0 duration-500':'text-success mb-2 absolute -top-6 opacity-1 duration-500'}>userPassword:</label>
             <input type="text" id='userPass' onInput={checkPass} className='w-full shadow-sm border-0 rounded-lg p-4 focus:outline-none focus:ring-0' placeholder='userPassword'/>
            </div>
            <div className=" w-[60%] mb-6">
            <button className='bg-[#1abc9ce6] text-white'>send message</button>
            </div>
          </div>
        </div>
    </div>
  )
}
