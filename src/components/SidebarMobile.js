import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import {SidebarData} from './../dummyData.js';

const SidebarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleTrigger = () => setIsOpen(!isOpen);

    return (
        <div className="sidebar-mobile lg:hidden">
            <div className="page flex flex-col">
                <ul className={`bg-blue-300 sidebar ${isOpen ? "sidebar--open" : ""}`}>
                    <li className="trigger" onClick={handleTrigger}>
                        {isOpen ? <AiOutlineMenuFold size="30px" /> : <AiOutlineMenuUnfold size="30px" />}
                    </li>
                    {SidebarData.map(item => {
                        return (
                            <li key={item.id} className="">
                                <Link to={item.path} className="link ml-2 hover:bg-gray-100 hover:border-indigo-700 text-gray-900 hover:text-gray-700 border-transparent border-l-4 py-1 my-1">
                                    <div className="sidebarListItem flex items-center p-1">
                                        {item.icon}
                                        <span className="text-xl ml-2">{item.name}</span>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SidebarMobile;
