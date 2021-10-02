import React, { useState } from 'react'
import { AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { FaPhoneAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'

import { userDetailsData } from '../dummyData'



const UserDetail = () => {
    const [data, setData] = useState(userDetailsData)

    return (
        <div className="user-detail bg-gray-100 pt-3 sm:px-5 px-3">
            <div className="mb-4 pb-2 border-b-2 border-gray-300 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">User Details</h2>
                <button className="bg-green-500 px-2 py-1 text-white rounded-md text-sm capitalize sm:block hidden">Add new user</button>
                <button className="bg-green-500 px-4 py-1 text-white rounded-md capitalize sm:hidden"> 
                    <AiOutlinePlus size="20px" />
                </button>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 lg:gap-3 mt-5">
                <div className="bg-white shadow-md rounded-xl p-5 pb-10">
                    <div className="">
                        <div className="flex items-center">
                            <img src={data.image} alt="" className="w-10 h-10 rounded-full" />
                            <div className="ml-2">
                                <div className="font-medium">
                                    {data.name}
                                </div>
                                <div className="font-medium text-gray-500">
                                    {data.title}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="font-medium text-gray-500 mt-4">Account Details
                            </div>

                            <div className="flex items-center my-2">
                                <BiUser />
                                <span className="ml-2">{data.username}
                                </span>
                            </div>
                            <div className="flex items-center mb-2">
                                <AiOutlineCalendar />
                                <span className="ml-2">{data.date}
                                </span>
                            </div>
                            <div className="font-medium text-gray-500 mt-4">Contact Details
                            </div>
                            <div className="flex items-center my-2">
                                <FaPhoneAlt />
                                <span className="ml-2">{data.phone}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <FiMail />
                                <span className="ml-2">{data.email}</span>
                            </div>
                            <div className="flex items-center my-2">
                                <BiUser />
                                <span className="ml-2">{data.username}</span>
                            </div>
                            <div className="flex items-center">
                                <GrLocation />
                                <span className="ml-2">{data.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">Hello</div>
            </div>

            
        </div>
    )
}

export default UserDetail
