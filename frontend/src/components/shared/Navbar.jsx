import React, { useState } from 'react'
// import { FaBars } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUserTie } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import logo from '../../assets/image/skill-bridge.png';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import store from '@/redux/store';
// import logo from '../../assets/image/logo.png';



const Navbar = () => {

const { user } = useSelector(store => store.auth)
    return (
        <>

            <div className="h-20 flex-row  md:h-22 flex justify-between items-center px-1.5 md:px-15">
                <div className=" ">

                   <Link to="/"> <img src={logo} alt="Logo" className='order-2 mt-3 cursor-pointer md:order-1 md:h-22 md:w-35 h-17 w-25' /> </Link> </div>

                {/* desktop view */}
                <div className="hidden md:block md:order-2">
                    <ul className='flex gap-10 items-center cursor-pointer'>
                        <li className='text-xl font-semibold'><Link to="/">Home</Link></li>
                         <li className='text-xl font-semibold'><Link to="/jobs">Jobs</Link></li>
                          <li className='text-xl font-semibold'><Link to="/browes">Browes</Link></li>
                        
                        <li className='text-xl font-semibold'> <FaSearch /></li>

                    </ul>
                </div>
                {
                    !user ? (
                        <div className="order-3 ">
                            <Link to="/login"><button variant="" className="text-sm py-1 px-3 md:py-2 md:px-6 cursor-pointer font-semibold hover:bg-sky-500 bg-sky-100 border-1 shadow-xl mx-1 rounded-sm">Login</button></Link>

                            <Link to="/signup"><button variant="" className="text-sm py-1 px-3 md:py-2 md:px-6 cursor-pointer font-semibold hover:bg-sky-800 bg-sky-600 text-white shadow-xl  rounded-sm">Sign Up</button></Link>
                        </div>
                    ) : (
                        <div className="cursor-pointer order-1 md:order-3 flex items-center ">
                            <Popover className="cursor-pointer">
                                <PopoverTrigger>
                                    <Button className="cursor-pointer">
                                        <Avatar className="h-10 w-10 mt-2">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-60 md:w-80 flex flex-col justify-center bg-slate-200 border-0 ">
                                    <div className="flex flex-col items-center gap-3">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className=" text-center">
                                            <h1 className='text-xl font-semibold'>Imran Shaikh</h1>
                                            <span className='text-base'>Full Stak Developer, Software Engineer</span>
                                        </div></div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:mx-5 pt-5 justify-center mx-auto ">
                                        <div className="flex items-center">

                                            <Button variant="link" className="cursor-pointer text-base" ><FaUserTie /><Link to="/profile">View Profile</Link></Button>
                                        </div>
                                        <div className=" flex items-center">

                                            <Button variant="link" className="cursor-pointer text-base"> <FiLogOut className='text-xl' /> Logout</Button>
                                        </div>
                                    </div>

                                </PopoverContent>

                            </Popover>
                            {/* <div className="md:hidden cursor-pointer order-3 "><FaBars className='text-xl' /></div> */}
                        </div>
                    )}


            </div>
            {/* <div className=" border-b-1 border-slate-400"></div> */}
        </>
    )
}

export default Navbar