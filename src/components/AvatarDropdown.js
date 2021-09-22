import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const AvatarDropdown = () => {
    return (
        <ul className="bg-purple-50 absolute top-12 -right-2 rounded-md shadow-lg max-w-xs w-36">
            <Link to='/fgchvjb'>
                <li className="px-3 hover:bg-blue-50">
                    <div className="flex items-center border-b py-2 hover:text-blue-400">
                        <span className="">
                            <CgProfile  size="22px" />
                        </span>
                        <span className="ml-2 text-md font-medium">
                            Profile
                        </span>
                    </div>
                </li>
            </Link>
            <Link to="/">
                <li className="px-3 hover:bg-blue-50">
                    <div className="flex items-center border-b py-2 hover:text-blue-400">
                        <span className="">
                            <AiOutlineSetting  size="22px" />
                        </span>
                        <span className="ml-2 text-md font-medium">
                            Setting
                        </span>
                    </div>
                </li>
            </Link>
            <Link to="/">
                <li className="px-3 hover:bg-red-50">
                    <div className="flex items-center border-b py-2">
                        <span className="">
                            <FiLogOut  size="22px" color="red" />
                        </span>
                        <span className="ml-2 text-md font-medium text-red-500 ">
                            LogOut
                        </span>
                    </div>
                </li>
            </Link>
        </ul>
    )
}

export default AvatarDropdown
