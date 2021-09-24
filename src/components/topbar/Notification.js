import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { BsCheckCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Notification = () => {
    return (
        <ul className="notification bg-purple-50 absolute px-3 rounded-md shadow-lg max-w-xs w-56 top-12 -right-14">
            <Link to="/">
                <li>
                    <div className="flex flex-start border-b py-2">
                        <span className="bg-green-100 p-1 rounded-full h-7 mt-1">
                            <BsCheckCircle  size="20px" color="green" />
                        </span>
                        <span className="ml-2">
                            <h4 className="font-medium">System just updated</h4>
                            <p className="text-sm">The system has been successfully updated.</p>
                        </span>
                    </div>
                </li>
            </Link>
            
            <Link to="/">
                <li>
                    <div className="flex flex-start border-b py-2">
                        <span className="bg-red-100 p-1 rounded-full h-7 mt-1">
                            <BiErrorCircle  size="20px" color="red" />
                        </span>
                        <span className="ml-2">
                            <h4 className="font-medium">Server error</h4>
                            <p className="text-sm">The system encountered an error from the server.</p>
                        </span>
                    </div>
                </li>
            </Link>
            
            <Link to="/">
                <li>
                    <div className="flex flex-start border-b py-2">
                        <span className="bg-green-100 p-1 rounded-full h-7 mt-1">
                            <BsCheckCircle  size="20px" color="green" />
                        </span>
                        <span className="ml-2">
                            <h4 className="font-medium">New user added</h4>
                            <p className="text-sm">A new user has been added to your list.</p>
                        </span>
                    </div>
                </li>
            </Link>
            
            <Link to="/">
                <li className="text-center py-2">
                    <span className="font-semibold  text-blue-400 hover:text-blue-600">View all notifications</span>
                </li>
            </Link>
        </ul>
    )
}

export default Notification
