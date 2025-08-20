import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { IoBookmarkOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useNavigate, } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Job = ({ job }) => {
    const navigate = useNavigate()

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    return (
        <>

            <div className="border-1 shadow-xl rounded-md w-full md:w-100 py-5 px-5 my-5  ">
                <div className="flex items-center justify-between border-b-2 border-sky-800 pb-2">
                    <div className="flex justify-center items-center">

                        <Avatar>
                            <AvatarImage src={job?.profilePhoto}></AvatarImage>
                        </Avatar>
                        <div className="pl-2.5">
                            <h1 className='font-semibold'>{job?.company?.name}</h1>
                            <p className='text-sm flex items-center'><IoLocationSharp className='text-red-500 text-xs ' /><span>{job?.location}</span> </p>
                        </div>
                    </div>
                    <span><IoBookmarkOutline className='cursor-pointer text-2xl' /></span>
                </div>
                <div className="">
                    <p className="mt-1 font-medium text-sky-800">{job?.title}</p>

                </div>
                <div className="text-sm mt-1  ">
                    <span >{job?.description}</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <div className="">
                        <button className='bg-sky-700 text-sm px-6 py-1.5 mr-2 rounded-md text-white font-bold cursor-pointer hover:bg-sky-900'>Save</button>

                        <Link
                            to={`/details/${job?._id}`}
                            className="ml-1 text-sm font-semibold cursor-pointer hover:font-bold hover:underline"
                        >
                            Details
                        </Link>
                    </div>
                    <div className="">

                        <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p></div>
                </div>
            </div>
        </>
    )
}

export default Job