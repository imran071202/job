import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import Filter from './Filter'


const Jobs = () => {

    const jobArrey = [1, 2, 3, 4, 5, 6, 7, 8,9]
    return (
        <>
            <Navbar />
            <Filter/>

            <div className="flex justify-center  flex-wrap ">
                {
                    jobArrey.map((item, index) => <Job />)
                }
            </div>


        </>
    )
}

export default Jobs