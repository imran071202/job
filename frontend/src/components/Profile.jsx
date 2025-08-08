import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { FaPenClip } from "react-icons/fa6";
import { Label } from './ui/label';
import { Contact2, Mail } from 'lucide-react';
import Appliedjobs from './Appliedjobs';

const Profile = () => {
    const isresume = true
    return (
        <>
            <Navbar />
            <div className="border-1 border-sky-800  w-[85%] md:w-2/4 mx-auto flex flex-col  rounded-md mt-5 ">

                <div className="flex flex-col  px-5 py-5 ">
                    <Avatar className="h-25 w-25 mx-auto mt-2">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                    </Avatar>
                    <div className=" md:pl-2 py-3 mx-auto flex items-center justify-center md:justify-between ">
                        <h1 className='text-2xl font-medium pl-5'>Imran Shaikh</h1>
                        <div className="pl-5"><FaPenClip className='text-sm md:text-md mt-1.5 cursor-pointer' /></div>
                    </div>
                    {/*  */}
                    <div className="border-b-2 w-[95%] md:w-[90%] mx-auto border-cyan-800 "></div>
                    {/*  */}
                    <div className=" w-[95%] md:w-[90%] px-1 py-4  mx-auto">
                        <Label className="text-md font-semibold">Bio</Label>
                        <h1>description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat deserunt corporis illum.xs</h1></div>
                    <div className=" flex flex-col md:flex-row  gap-5 md:gap-25 w-[95%] md:w-[90%] px-1 py-2  mx-auto">
                        <div className=" flex items-center gap-2">
                            <Mail className='' />

                            <h1>  imran@gmail.com</h1></div>
                        <div className="flex items-center gap-2">
                            <Contact2 />
                            <h1>7894561235</h1></div>

                    </div>
                    <div className="Skills flex flex-col flex-wrap w-[95%] md:w-[90%] px-1 py-2  mx-auto">
                        <Label className="text-md font-semibold mb-2">Skills</Label>
                        <div className="flex flex-wrap gap-2 ">
                            <span className='px-5 py-1 bg-sky-700 text-white rounded-xl w-fit'>React JS</span>
                            <span className='px-5 py-1 bg-sky-700 text-white rounded-xl w-fit'>html</span>
                            <span className='px-5 py-1 bg-sky-700 text-white rounded-xl w-fit'>css</span>
                            <span className='px-5 py-1 bg-sky-700 text-white rounded-xl w-fit'>next JS</span>
                            <span className='px-5 py-1 bg-sky-700 text-white rounded-xl w-fit'>node JS</span>
                            <span className='px-5 py-1 bg-sky-700 text-white rounded-xl w-fit'>MongoDb</span>
                            <span className='px-5 py-1 bg-sky-700 text-white rounded-xl w-fit'>sql</span>
                            <span className='px-5 py-1 bg-sky-700 text-white rounded-xl w-fit'>tailwind</span>
                        </div>
                    </div>
                    <div className="Skills flex flex-col flex-wrap w-[95%] md:w-[90%] px-1 py-2  mx-auto">
                        <Label className="text-md font-semibold mb-2">Resume</Label>
                        {
                            isresume ? <a target='_blankf' href="https://www.linkedin.com/in/imran-shaikh-163372241/" className='bg-slate-200 hover:bg-slate-300 w-fit px-4 py-1 underline rounded-sm'>Imran Resume.pdf</a> : <div className="">NA</div>
                        }
                    </div>
                </div>

            </div>
            <div className=" w-[85%] md:w-2/4 mx-auto flex flex-col  rounded-md mt-8  ">
                <div className="">
                    <span className='text-lg font-bold '>Applied Jobs</span>
                </div>
                <Appliedjobs/>
                
                </div>

        </>
    )
}

export default Profile