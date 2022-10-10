import React, { useEffect, useRef, useState } from 'react'
import Avatar from '../../assets/images/abiodun.jpg';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import Notification from './Notification';
import AvatarDropdown from './AvatarDropdown';
import Search from './Search';


const Topbar = () => {
    const ref = useRef();
    const [showNotification, setShowNotification] = useState(false);
    const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleNotification = () => {
        setShowNotification(true);
        setShowAvatarDropdown(false);
        setShowSearch(false);
    }
    const handleAvatarDropdown = () => {
        setShowAvatarDropdown(true);
        setShowNotification(false);
        setShowSearch(false);
    }
    const handleSearch = () => {
        setShowSearch(true);
        setShowAvatarDropdown(false);
        setShowNotification(false);
    }
    
    useEffect(() => {
        const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
            if ((showSearch && ref.current && !ref.current.contains(e.target)) || (showAvatarDropdown && ref.current && !ref.current.contains(e.target)) || (showNotification && ref.current && !ref.current.contains(e.target))) {
                setShowNotification(false)
                setShowAvatarDropdown(false)
                setShowSearch(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showNotification, showAvatarDropdown, showSearch])

    return (
        <div className="topbar h-14 flex items-center w-full bg-white sticky shadow-lg top-0 md:px-12 sm:px-8 px-4 py-8 z-10" ref={ref}>
            <div className="rightTopbar flex items-center ml-auto">

                <div className="topbarIconContainer flex items-center relative cursor-pointer hidden sm:block hover:bg-purple-200 bg-purple-100 rounded-full p-2">
                    <BiSearch size="21px" onClick={handleSearch} />
                        {showSearch&& ( <Search open={showSearch} close={() => setShowSearch(false)} />)}
                </div>

                <div className="topbarIconContainer flex items-center relative cursor-pointer hover:bg-purple-200 bg-purple-100 rounded-full p-1 mx-2 sm:mx-3 z-10" >
                    <span className="absolute -top-1 right-0 bg-red-600 text-white text-center text-xs rounded-full w-4 h-4">3</span>
                    <IoIosNotificationsOutline size="26px" onClick={handleNotification} />
                        {showNotification && <Notification  close={() => setShowNotification(false)} />}
                </div>
                
                <div className="topbarIconContainer flex items-center relative cursor-pointer border-l-2">
                    <img
                        src={Avatar}
                        alt="user avatar"
                        className="w-9 h-9 ml-2 sm:ml-4 rounded-full cursor-pointer"
                        onClick={handleAvatarDropdown}
                    />
                    {showAvatarDropdown && <AvatarDropdown close={() => setShowAvatarDropdown(false)} />}
                </div>
            </div>
        </div>
    )
}

export default Topbar;