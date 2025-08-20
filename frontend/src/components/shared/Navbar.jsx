import React, { useState } from 'react'
// import { FaBars } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUserTie } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import logo from '../../assets/image/skill-bridge.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/apiPoint';
import { setuser } from '@/redux/authSlice';
import { IoHome } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";

// import logo from '../../assets/image/logo.png';



const Navbar = () => {

    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const logoutHandeler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true })
            if (res.data.success) {
                dispatch(setuser(null))
                navigate("/")
                toast.success(res.data.message)

            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)


        }
    }
    return (
        <>

            <div className="h-20 flex-row  md:h-22 flex justify-between items-center px-1.5 md:px-15">
                <div className=" ">

                    <Link to="/"> <img src={logo} alt="Logo" className='order-2 mt-3 cursor-pointer md:order-1 md:h-22 md:w-35 h-17 w-25' /> </Link> </div>

                {/* desktop view */}

                {
                    user?.role === 'recruiter' ? <>
                        < div className="hidden md:block md:order-2">
                            <ul className='flex gap-15 items-center cursor-pointer '>
                                <li className='text-2xl font-semibold '><Link to="/companies"><IoHome /></Link></li>
                                <li className='text-2xl font-semibold'><Link to="/jobs"><BsBriefcaseFill /></Link></li></ul> </div>
                    </> : <div className="hidden md:block md:order-2">
                        <ul className='flex gap-15 items-center cursor-pointer'>
                            <li className='text-2xl font-semibold'><Link to="/"><IoHome /></Link></li>
                            <li className='text-2xl font-semibold'><Link to="/jobs"><BsBriefcaseFill /></Link></li>
                            {/* <li className='text-xl font-semibold'><Link to="/browes">Browes</Link></li> */}

                            {/* <li className='text-xl font-semibold'> <FaSearch /></li> */}

                        </ul>
                    </div>
                }

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
                                            <AvatarImage src={user?.profile?.profilePhoto} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-60 md:w-80 flex flex-col justify-center bg-slate-200 border-0 ">
                                    <div className="flex flex-col items-center gap-3 ">
                                        <Avatar className="h-18 w-18 border-3 border-red-600">
                                            <AvatarImage src={user?.profile?.profilePhoto} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className=" text-center w-[80%] border-b-2 pb-3">
                                            <h1 className='text-xl font-semibold'>{user?.fullname}</h1>
                                            <span className='text-sm'>{user?.profile?.bio}</span>
                                        </div></div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:mx-5 pt-2 md:pt-3 justify-center mx-auto ">
                                        {

                                            user?.role === "student" ?
                                                <>
                                                    <div className="flex items-center">

                                                        <Button variant="link" className="cursor-pointer text-base" ><FaUserTie /><Link to="/profile">View Profile</Link></Button>
                                                    </div>
                                                    <div className=" flex items-center">

                                                        <Button onClick={logoutHandeler} variant="link" className="cursor-pointer text-base"> <FiLogOut className='text-xl' /> Logout</Button>
                                                    </div></> :

                                                <div className=" flex items-center justify-center mx-auto">

                                                    <Button onClick={logoutHandeler} variant="link" className="cursor-pointer text-base "> <FiLogOut className='text-xl' /> Logout</Button>
                                                </div>
                                        }
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