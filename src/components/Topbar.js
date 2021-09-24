import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Avatar from '../assets/images/abiodun.jpg';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsCheckCircle } from 'react-icons/bs';
import { BiErrorCircle, BiMessageAltDetail } from 'react-icons/bi';
import Notification from './Notification';
import AvatarDropdown from './AvatarDropdown';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Message from './Message';


const Topbar = () => {
    const ref = useRef();
    const [showNotification, setShowNotification] = useState(false);
    const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleNotification = () => setShowNotification(true);
    const handleAvatarDropdown = () => setShowAvatarDropdown(true);
    const handleMessage = () => setShowMessage(true);
    

    useEffect(() => {
        const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
            if ((showMessage && ref.current && !ref.current.contains(e.target)) || (showAvatarDropdown && ref.current && !ref.current.contains(e.target)) || (showNotification && ref.current && !ref.current.contains(e.target))) {
                setShowNotification(false)
                setShowAvatarDropdown(false)
                setShowMessage(false)
            } else {
                // setShowNotification(false)
                // setShowAvatarDropdown(false)
                // setShowMessage(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showNotification, showAvatarDropdown, showMessage])

    return (
        <div className="topbar h-14 bg-blue-300 flex items-center justify-between sticky top-0 md:px-12 sm:px-8 px-4 py-8" ref={ref}>
            <div className="leftTopbar">
                <img src={Logo} alt="" className="company-logo w-12" />
            </div>
            <div className="rightTopbar flex items-center">
                <div className="topbarIconContainer flex items-center relative cursor-pointer hover:bg-purple-200 bg-purple-100 rounded-full p-2">
                    <span className="absolute -top-1 right-0 bg-red-600 text-white text-center text-xs rounded-full w-4 h-4">3</span>
                    <IoIosNotificationsOutline size="21px" onClick={handleNotification} />
                    {/* <SwitchTransition mode='in-out'>
                        <CSSTransition
                            key={showNotification}
                            addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                            }}
                            classNames="fade"
                        >
                            <button className="btn button-container"> */}
                                {showNotification 
                                    && ( <Notification />)}
                            {/* </button>
                        </CSSTransition>
                    </SwitchTransition> */}
                    
                </div>
                
                <div className="topbarIconContainer flex items-center relative cursor-pointer hover:bg-purple-200 bg-purple-100 rounded-full p-2 mx-3">
                    <span className="absolute -top-1 right-0 bg-red-600 text-white text-center text-xs rounded-full w-4 h-4">3</span>
                    <BiMessageAltDetail size="21px" onClick={handleMessage} />
                        {showMessage && ( <Message />)}
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
