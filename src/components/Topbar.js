import React from 'react'
import Logo from '../assets/images/logo.svg'
import Avatar from '../assets/images/abiodun.jpg';
import { IoIosNotificationsOutline } from 'react-icons/io';


const Topbar = () => {
    return (
        <div className="topbar h-14 bg-blue-300 flex items-center justify-between sticky top-0 md:px-12 sm:px-8 px-4 py-8">
            <div className="leftTopbar">
                <img src={Logo} alt="" className="company-logo w-12" />
            </div>
            <div className="rightTopbar flex items-center">
                <div className="topbarIconContainer flex items-center relative cursor-pointer">
                    <span className="absolute -top-1 right-0 bg-red-600 text-white text-center text-xs rounded-full w-4 h-4">3</span>
                    <IoIosNotificationsOutline size="30px" />
                </div>
                <div className="topbarIconContainer">
                    <span>3</span>
                </div>
                <div className="topbarIconContainer">
                    <span>3</span>
                </div>

                <div className="userImg border-l-2">
                    <img src={Avatar} alt="" className="w-9 h-9 ml-3 rounded-full cursor-pointer" />
                </div>


            </div>

        </div>
    )
}

export default Topbar
