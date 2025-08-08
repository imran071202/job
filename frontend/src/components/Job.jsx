import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { IoBookmarkOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";


const Job = () => {
    return (
        <>
            <div className="border-1 shadow-xl rounded-md w-full md:w-1/4 py-5 px-5 my-5 mx-5">
                <div className="flex items-center justify-between border-b-2 border-sky-800 pb-2">
                    <div className="flex justify-center items-center">
                        <Avatar>
                            <AvatarImage src="https://www.creativehatti.com/wp-content/uploads/edd/2023/02/Branding-identity-corporate-logo-design-04-large.jpg"></AvatarImage>
                        </Avatar>
                        <div className="pl-2.5">
                            <h1 className='font-semibold'>Comapany Name</h1>
                            <p className='text-sm flex items-center'><IoLocationSharp className='text-red-500 text-xs ' /><span>Location</span> </p>
                        </div>
                    </div>
                    <span><IoBookmarkOutline className='cursor-pointer text-2xl' /></span>
                </div>
                <div className="">
                    <p className="mt-1 font-medium text-sky-800">Tittle</p>

                </div>
                <div className="text-sm mt-1  ">
                    <span > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro gendi maiores laboriosam quo nesciunt in delectus. Pariatur quod sint minima animi?</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <div className="">
                    <button className='bg-sky-700 text-sm px-6 py-1.5 mr-2 rounded-md text-white font-bold cursor-pointer hover:bg-sky-900'>Apply</button>
                    <button className='ml-1 text-sm font-semibold cursor-pointer hover:font-bold hover:underline '>Details </button></div>
                    <div className="">
                        <span className='text-xs font-semibold text-slate-500'>2 day ago</span></div>
                </div>



            </div>



        </>
    )
}

export default Job