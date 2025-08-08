import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'

const Browes = () => {
    const randomJob=[1,2,3,4]
  return (
    <>
    <Navbar/>
<div className="w-[80%] mx-auto mt-10">
    <h1 className='text-xl font-semibold'>Search Result ({randomJob.length})</h1></div>
    <div className="flex justify-center  flex-wrap">
        {
            randomJob.map((item, index)=>{
                return (
                    <Job/>
                )
            })
        }
    </div>

    
    </>
  )
}

export default Browes