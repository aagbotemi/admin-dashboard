import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Avatar from '../assets/images/abiodun.jpg';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsCheckCircle } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import Notification from './Notification';
import AvatarDropdown from './AvatarDropdown';

const Topbar = () => {
    const ref = useRef();
    const [showNotification, setShowNotification] = useState(false);
    const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);

    const handleNotification = () => setShowNotification(true);
    const handleAvatarDropdown = () => setShowAvatarDropdown(true);
    

    useEffect(() => {
        const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
            if (showAvatarDropdown && ref.current && !ref.current.contains(e.target) || showNotification && ref.current && !ref.current.contains(e.target)) {
                setShowNotification(false)
                setShowAvatarDropdown(false)
            } else {
                setShowNotification(false)
                setShowAvatarDropdown(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showNotification, showAvatarDropdown])

    return (
        <div className="topbar h-14 bg-blue-300 flex items-center justify-between sticky top-0 md:px-12 sm:px-8 px-4 py-8" ref={ref}>
            <div className="leftTopbar">
                <img src={Logo} alt="" className="company-logo w-12" />
            </div>
            <div className="rightTopbar flex items-center">
                <div className="topbarIconContainer flex items-center relative cursor-pointer hover:bg-purple-200 bg-purple-100 rounded-full p-2">
                    <span className="absolute -top-1 right-0 bg-red-600 text-white text-center text-xs rounded-full w-4 h-4">3</span>
                    <IoIosNotificationsOutline size="21px" onClick={handleNotification} />
                    {showNotification 
                    && ( <Notification />)}
                </div>
                <div className="topbarIconContainer">
                    <span>3</span>
                </div>
                <div className="topbarIconContainer">
                    <span>3</span>
                </div>

                <div className="topbarIconContainer flex items-center relative cursor-pointer border-l-2">
                    <img src={Avatar} alt="" className="w-9 h-9 ml-3 rounded-full cursor-pointer" onClick={handleAvatarDropdown} />
                    {showAvatarDropdown 
                    && ( <AvatarDropdown />)}
                </div>
            </div>
        </div>
    )
}

export default Topbar




/*
import React, { useState } from "react";
function App() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      {showText ? <Text /> : null}
    </div>
  );
}
const Text = () => <div>You clicked the button!</div>;
export default App;
 */
