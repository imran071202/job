import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { IoBookmarkOutline, IoLocationSharp } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { ALL_JOB_API_POINT, APPLICATION_JOB_API_POINT } from '@/utils/apiPoint'
import { setsingleJob } from '@/redux/jobSlice'
import { toast } from 'sonner'


const Detailsjob = () => {


    const params = useParams()
    const jobId = params.id
    const dispatch = useDispatch()
    const { singleJob } = useSelector(state => state.jobs)
    const { user } = useSelector(state => state.auth)

    const isJobApplid = singleJob?.applications?.some(application => application === user?._id) || false
    const [isApplied, setisApplied] = useState(isJobApplid)



    const appliedJobHolder = async () => {
        try {
            const res = await axios.get(
                `${APPLICATION_JOB_API_POINT}/apply/${jobId}`, { withCredentials: true });
            console.log(res.data);

            if (res.data.success) {
                setisApplied(true);
                const updateSingleJob = {
                    ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }],
                };
                dispatch(setsingleJob(updateSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };


    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(
                    `${ALL_JOB_API_POINT}/jobs/${jobId}`,
                    { withCredentials: true }
                );

                if (res.data.success) {
                    dispatch(setsingleJob(res.data.job));
                    setisApplied(res.data.job.applications.some(application => application.applicant === user?._id)
                    );
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <>
            <Navbar />

            <div className="border-1 shadow-xl rounded-md w-[90%] md:w-3/4 py-5 px-5 my-5 mx-auto mt-10">
                <div className="flex md:items-center flex-col md:flex-row  md:justify-between border-b-2 border-sky-800 pb-2">
                    <div className="flex  md:justify-center  items-center ">
                        <Avatar>
                            <AvatarImage className='h-10 ' src="https://www.creativehatti.com/wp-content/uploads/edd/2023/02/Branding-identity-corporate-logo-design-04-large.jpg"></AvatarImage>
                        </Avatar>
                        <div className="pl-2.5">
                            <h1 className='font-semibold'>{singleJob?.company?.name}</h1>
                            <p className='text-sm flex items-center'><IoLocationSharp className='text-red-500 text-xs ' /><span>{singleJob?.location}</span> </p>
                        </div>
                    </div>
                    <div className=" mt-4 mb-2 ">
                        <button onClick={isApplied ? null : appliedJobHolder} disabled={isApplied}
                            className={`rounded-md  text-sm px-6 py-3 mr-2 text-white font-bold  ${isApplied ? 'bg-gray-600 cursor-not-allowed' : ' bg-linear-to-t from-sky-600 to-indigo-700 px-10 py-2.5 pb-3  cursor-pointer'}`}>{isApplied ? 'Already Applied' : 'Apply'}</button>

                    </div>
                </div>
                <div className="mt-5">
                    <p className="mt-1 font-medium text-sky-800">Role: {singleJob?.title}</p>

                </div>
                <div className="">
                    <p className="mt-1 font-medium text-sky-800">Loaction: {singleJob?.location} </p>

                </div>
                <div className="">
                    <p className="mt-1 font-medium text-sky-800">Exprience: {singleJob?.exprience}</p>

                </div>
                <div className="">
                    <p className="mt-1 font-medium text-sky-800">Total Applications: {singleJob?.applications?.length}</p>

                </div>
                <div className="mt-1  ">
                    <span className='mt-1 font-medium text-sky-800' >Job Description:</span><br /> <span className='text-base'>{singleJob?.description} </span>
                </div>

                <div className="mt-5 w-[100%] flex items-center justify-between md:pr-5">
                    <div className=" flex w-[80%]  my-2 gap-2 md:gap-5 flex-wrap">
                        <span className='text-sm font-semibold text-yellow-800 px-3 py-1 rounded-md bg-slate-200'>{singleJob?.jobType}</span>
                        <span className='text-sm font-semibold text-red-600 px-3 py-1 rounded-md bg-slate-200'>Position: {singleJob?.position}</span>
                        {/* <span className='text-sm font-semibold text-blue-600 px-3 py-1 rounded-md bg-slate-200'>{singleJob?.exprience}</span> */}

                        <span className='text-sm font-semibold text-green-600 px-3 py-1 rounded-md bg-slate-200'> Salary: {singleJob?.salary}</span>


                    </div>
                    <div className="text-right w-[20%]">
                        <span className='text-xs font-semibold text-slate-500'>
                            {singleJob?.company?.createdAt && singleJob.company.createdAt.split("T")[0]}
                        </span></div>
                </div>
            </div>


        </>
    )
}

export default Detailsjob