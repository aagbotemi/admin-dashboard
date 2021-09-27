import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import {SidebarData} from '../../dummyData.js';

const Sidebar = () => {
    return (
        <div className="sidebar-wrap hidden lg:block">
            <div className="bg-blue-300 shadow-3xl sticky h-screen top-0 flex flex-col">
                <div className="flex justify-center items-center my-3">
                    <h3 className="text-2xl">gbAdmin</h3>
                </div>

                <div className="sidebarWrapper mt-1">
                    <div className="sidebarMenu pl-2">
                        <ul className="sidebarList">
                            {SidebarData.map(item => {
                                return (
                                    <Link key={item.id} to={item.path} className="link">
                                        <li className="sidebarListItem active flex items-center my-1 text-gray-900 border-l-4  hover:border-indigo-700 border-transparent hover:text-gray-700 hover:bg-gray-100 p-1">
                                            <div className="sidebarListItem flex items-center p-1">
                                                {item.icon}
                                                <span className="text-xl ml-2">{item.name}</span>
                                            </div>
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center my-3 mt-auto">
                    <img src={Logo} alt="" className="company-logo w-12" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
