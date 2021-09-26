import React, {useState} from 'react';
import { AiOutlineTransaction } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { CgProductHunt } from 'react-icons/cg';
import { RiDashboardLine } from 'react-icons/ri';
import { GiSellCard } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';

const SidebarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

    return (
        <div className="sidebar-mobile lg:hidden">
            <div className="page flex flex-col">
                <div className={`bg-blue-300 sidebar ${isOpen ? "sidebar--open" : ""}`}>
                    <div className="trigger" onClick={handleTrigger}>
                        {isOpen ? <AiOutlineMenuFold size="30px" /> : <AiOutlineMenuUnfold size="30px" />}
                    </div>

                    <Link to="/" className="link ml-2 hover:bg-gray-100 hover:border-indigo-700 text-gray-900 hover:text-gray-700 border-transparent border-l-4 py-1 my-1">
                        <div className="sidebarListItem flex items-center p-1">
                            <RiDashboardLine size="25px" className="sidebarIcon mr-1" />
                            <span className="text-xl">Dashboard</span>
                        </div>
                     </Link>

                    <Link to="/" className="link ml-2 hover:bg-gray-100 hover:border-indigo-700 text-gray-900 hover:text-gray-700 border-transparent border-l-4 py-1 my-1">
                        <div className="sidebarListItem flex items-center p-1">
                            <BiUser size="25px" className="sidebarIcon mr-1" />
                            <span className="text-lg">Users</span>
                        </div>
                    </Link>

                    <Link to="/" className="link ml-2 hover:bg-gray-100 hover:border-indigo-700 text-gray-900 hover:text-gray-700 border-transparent border-l-4 py-1 my-1">
                        <div className="sidebarListItem flex items-center p-1">
                            <CgProductHunt size="25px" className="sidebarIcon mr-1" />
                            <span className="text-lg">Products</span>
                        </div>
                    </Link>

                    <Link to="/" className="link ml-2 hover:bg-gray-100 hover:border-indigo-700 text-gray-900 hover:text-gray-700 border-transparent border-l-4 py-1 my-1">
                        <div className="sidebarListItem flex items-center p-1">
                            <AiOutlineTransaction size="25px" className="sidebarIcon mr-1" />
                            <span className="text-lg">Transactions</span>
                        </div>
                    </Link>

                    <Link to="/" className="link ml-2 hover:bg-gray-100 hover:border-indigo-700 text-gray-900 hover:text-gray-700 border-transparent border-l-4 py-1 my-1">
                        <div className="sidebarListItem flex items-center p-1">
                            <GiSellCard size="25px" className="sidebarIcon mr-1" />
                            <span className="text-lg">Sales</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SidebarMobile;
