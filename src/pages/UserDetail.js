import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const UserDetail = () => {
    return (
        <div className="user-detail bg-gray-100 pt-3 sm:px-5 px-3">
            <div className="mb-4 pb-2 border-b-2 border-gray-300 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">User Details</h2>
                <button className="bg-green-500 px-2 py-1 text-white rounded-md text-sm capitalize sm:block hidden">Add new user</button>
                <button className="bg-green-500 px-4 py-1 text-white rounded-md capitalize sm:hidden"> 
                    <AiOutlinePlus size="20px" />
                </button>
            </div>
            
        </div>
    )
}

export default UserDetail
