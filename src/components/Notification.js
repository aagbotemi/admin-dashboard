import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { BsCheckCircle } from 'react-icons/bs'

const Notification = () => {
    return (
        <ul className="bg-purple-50 absolute top-12 -right-2 px-3 rounded-md shadow-lg max-w-xs w-56">
            <li>
                <div className="flex flex-start border-b py-2">
                    <span className="bg-green-100 p-1 rounded-full h-7 mt-1">
                        <BsCheckCircle  size="20px" color="green" />
                    </span>
                    <div className="ml-2">
                        <h4 className="font-medium">System just updated</h4>
                        <p className="text-sm">The system has been successfully updated.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="flex flex-start border-b py-2">
                    <span className="bg-red-100 p-1 rounded-full h-7 mt-1">
                        <BiErrorCircle  size="20px" color="red" />
                    </span>
                    <div className="ml-2">
                        <h4 className="font-medium">Server error</h4>
                        <p className="text-sm">The system encountered an error from the server.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="flex flex-start border-b py-2">
                    <span className="bg-green-100 p-1 rounded-full h-7 mt-1">
                        <BsCheckCircle  size="20px" color="green" />
                    </span>
                    <div className="ml-2">
                        <h4 className="font-medium">New user added</h4>
                        <p className="text-sm">A new user has been added to your list.</p>
                    </div>
                </div>
            </li>
            <li className="text-center py-2">
                <span className="font-semibold  text-blue-400 hover:text-blue-600">View all notifications</span>
            </li>
        </ul>
    )
}

export default Notification
