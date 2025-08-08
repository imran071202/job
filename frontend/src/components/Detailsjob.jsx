import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { IoBookmarkOutline, IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Detailsjob = () => {
    const isApplid = true
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
                            <h1 className='font-semibold'>Comapany Name</h1>
                            <p className='text-sm flex items-center'><IoLocationSharp className='text-red-500 text-xs ' /><span>Location</span> </p>
                        </div>
                    </div>
                    <div className=" mt-4 mb-2">
                        <button disabled={isApplid}
                        className={`rounded-md  text-sm px-6 py-1.5 mr-2 text-white font-bold  ${isApplid ? 'bg-gray-600 cursor-not-allowed' : 'bg-sky-700 hover:bg-sky-900 cursor-pointer'}`}>{isApplid ? 'Already Applied' : 'Apply'}</button>

                    </div>
                </div>
                <div className="mt-5">
                    <p className="mt-1 font-medium text-sky-800">Role: Frontend developer</p>

                </div>
                <div className="">
                    <p className="mt-1 font-medium text-sky-800">Loaction: Kolkata</p>

                </div>
                <div className="">
                    <p className="mt-1 font-medium text-sky-800">Exprience: 0-3 Year</p>

                </div>
                 <div className="">
                    <p className="mt-1 font-medium text-sky-800">Total Applications: 4</p>

                </div>
                <div className="text-sm mt-1  ">
                    <span > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro gendi maiores laboriosam quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas sed dolorum explicabo quaerat libero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro gendi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa sit nemo mollitia eaque, officia corporis ab voluptas, alias totam quis asperiores ducimus deleniti voluptate itaque officiis incidunt consectetur ipsum rem sed molestias iste explicabo? Labore, aperiam in optio eveniet eos cum! Blanditiis aliquid labore recusandae tempore quibusdam atque ipsam facere velit, natus adipisci maiores ullam necessitatibus. Numquam, tenetur voluptatem eveniet ipsum dolore ullam rerum dicta atque. Cumque consectetur atque ut sapiente aliquid, asperiores molestias accusantium dolor vitae libero, dolorem reprehenderit commodi iste numquam veritatis doloribus assumenda? Quo consectetur corrupti sint, porro ad et nemo nam vero soluta ullam magnam? maiores laboriosam quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas sed dolorum explicabo quaerat lib impedit. Itaque rerum rem perferendis. nesciunt in delectus. Pariatur quod sint minima animi?</span>
                </div>

                <div className="mt-5 w-[100%] flex items-center justify-between md:pr-5">
                    <div className=" flex w-[80%]  my-2 gap-2 md:gap-5 flex-wrap">
                        <span className='text-sm font-semibold text-yellow-800 px-3 py-1 rounded-md bg-slate-200'>Remote / Work from office</span>
                        <span className='text-sm font-semibold text-red-600 px-3 py-1 rounded-md bg-slate-200'>10 Position</span>
                        <span className='text-sm font-semibold text-blue-600 px-3 py-1 rounded-md bg-slate-200'>Full time</span>

                        <span className='text-sm font-semibold text-green-600 px-3 py-1 rounded-md bg-slate-200'>4-6 LPA</span>


                    </div>
                    <div className="text-right w-[20%]">
                        <span className='text-xs  font-semibold text-slate-500'>2 day ago</span></div>
                </div>
            </div>


        </>
    )
}

export default Detailsjob