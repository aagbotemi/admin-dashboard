import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import {SidebarData} from '../../dummyData.js';

const Sidebar = () => {
    return (
        <div className="sidebar-wrap hidden lg:block">
            <div className="sticky h-screen top-0 flex flex-col">
                <div className="flex justify-center items-center my-3">
                    <img src={Logo} alt="" className="company-logo w-7" />
                    <h1 className="text-2xl ml-2">aagbotemi</h1>
                </div>

                <div className="sidebarWrapper mt-1">
                    <div className="sidebarMenu pl-2">
                        <ul className="sidebarList">
                            {SidebarData.map(item => {
                                return (
                                    <Link key={item.id} to={item.path} className="link">
                                        <li className="sidebarListItem active flex items-center my-1 text-gray-300 border-l-4 hover:border-indigo-700 font-normal border-transparent hover:text-gray-700 hover:bg-gray-100 p-1">
                                            <div className="sidebarListItem flex items-center p-1">
                                                {item.icon}
                                                <span className="text-md ml-2">{item.name}</span>
                                            </div>
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
