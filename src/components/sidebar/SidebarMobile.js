import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import {SidebarData} from '../../dummyData.js';
import Logo from '../../assets/images/logo.svg';

const SidebarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleTrigger = () => setIsOpen(!isOpen);

    return (
        <div className="sidebar-mobile lg:hidden z-20">
            <div className="page flex flex-col">
                <ul className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
                    <li className="trigger" onClick={handleTrigger}>
                        
                        {isOpen && <div className="flex justify-center items-center my-3">
                            <img src={Logo} alt="" className="company-logo w-7" />
                            <h1 className="text-2xl ml-1 mr-3">Blueberry</h1>
                        </div>}
                        {isOpen ? <AiOutlineMenuFold size="30px" /> : <AiOutlineMenuUnfold size="30px" />}
                    </li>
                    {SidebarData.map(item => {
                        return (
                            <li key={item.id} className="">
                                <Link to={item.path} className="link ml-2 hover:bg-gray-100 hover:border-indigo-700 text-gray-200 hover:text-gray-700 border-transparent border-l-4 py-1 mb-1">
                                    <div className="sidebarListItem flex items-center p-1">
                                        {item.icon}
                                        <span className="text-md ml-2">{item.name}</span>
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
