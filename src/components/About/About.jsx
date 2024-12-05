export function About() {
    return (
        <div className="">
            <div className=' min-h-screen main-color flex justify-center items-center flex-col'>
                <div className=" w-full flex justify-center items-center flex-col">
                    <h1 className='uppercase text-4xl font-bold text-white pt-8 ms-5'>about component</h1>
                    <div className="flex justify-between px-12 pt-5">
                        <div className="border-b-4 me-4 border-white h-3 w-[100px]"></div>
                        <i className='fa-solid fa-star text-white'></i>
                        <div className="border-b-4 ms-4 border-white h-3 w-[100px]"></div>
                    </div>
                </div>
                <div className=" w-[58%] md:w-3/4 flex flex-col md:flex-row justify-center items-center text-white gap-3 pt-6">
                <div className="">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
                {/* <div className="flex  bg-slate-700">
                    
                    
                </div> */}
            </div>
        </div>
    )
}