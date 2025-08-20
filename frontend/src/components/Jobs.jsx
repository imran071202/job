import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import { SpaceIcon } from 'lucide-react'


const Jobs = () => {

    // const jobArrey = [1, 2, 3, 4, 5, 6, 7, 8,9]
    const { allJobs } = useSelector(store => store.jobs)
    return (
        <>
            <Navbar />
            <Filter />
            <div className="w-full">
            {
                allJobs.length <= 0 ? <span> no job</span> : (<div className="flex items-center gap-5 flex-wrap  w-full   ">
                    {
                        allJobs.map((job) =>(
                            <div className="flex flex-row flex-wrap  w-[80%] md:w-fit mx-auto" key={job?._id}><Job job={job} /></div>))
                    }
                </div>)
            }</div>
        </>
    )
}

export default Jobs