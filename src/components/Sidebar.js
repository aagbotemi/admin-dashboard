import React from 'react';
import { AiOutlineTransaction } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { CgProductHunt } from 'react-icons/cg';
import { RiDashboardLine } from 'react-icons/ri';
import { GiSellCard } from 'react-icons/gi';

import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';

const Sidebar = () => {
    return (
        <div className="sidebar w-10 bg-blue-300 shadow-3xl sticky h-screen top-0 flex flex-col">
            <div className="flex justify-center items-center my-3">
                <h3 className="text-2xl">gbAdmin</h3>
            </div>

            <div className="sidebarWrapper">
                <div className="sidebarMenu px-6">
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active flex items-center my-1 text-gray-800 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-md">
                                <RiDashboardLine size="20px" className="sidebarIcon mr-2" />
                                <span className="text-lg">Dashboard</span>
                            </li>
                        </Link>
                        <Link to="/users" className="link">
                            <li className="sidebarListItem active flex items-center my-1 text-gray-800 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-md">
                                <BiUser size="20px" className="sidebarIcon mr-2" />
                                <span className="text-lg">Users</span>
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem active flex items-center my-1 text-gray-800 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-md">
                                <CgProductHunt size="20px" className="sidebarIcon mr-2" />
                                <span className="text-lg">Products</span>
                            </li>
                        </Link>
                        <Link to="/transactions" className="link">
                            <li className="sidebarListItem active flex items-center my-1 text-gray-800 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-md">
                                <AiOutlineTransaction size="20px" className="sidebarIcon mr-2" />
                                <span className="text-lg">Transactions</span>
                            </li>
                        </Link>
                        <Link to="/sales" className="link">
                            <li className="sidebarListItem active flex items-center my-1 text-gray-800 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-md">
                                <GiSellCard size="20px" className="sidebarIcon mr-2" />
                                <span className="text-lg">Sales</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            
            <div className="sidebar-wrapper flex justify-center items-center my-3 mt-auto">
                <img src={Logo} alt="" className="company-logo w-12" />
            </div>
        </div>
    )
}

export default Sidebar
