import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usersData } from '../../dummyData'
import { FaRegTrashAlt } from 'react-icons/fa'
import { HiPencilAlt } from 'react-icons/hi'
import { BiCheck, BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import AddNewItemButton from '../../components/AddNewItemButton'
import { Helmet } from 'react-helmet';

const Users = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    useEffect(() => {
        setData(usersData.filter(user => {
            return Object.values(user).some(name => String(name).includes(search))
        }))
    }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="users bg-gray-100 pt-3 sm:px-5 px-3">
            <Helmet>
                <title>Users | Admin Dashboard</title>
                <meta name="description" content="Users Listing page of Admin Dashboard" />
            </Helmet>
            <div className="mb-3 pb-1 border-b-2 border-gray-300 flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-medium">Users</h1>
                <Link to="/new-user">
                    <AddNewItemButton />
                </Link>
            </div>

            <div className="relative mb-1">
                <input
                    type="text"
                    className="border-0 pl-10 pr-3 py-2 w-full md:w-1/3 sm:w-1/2 rounded-xl outline-none shadow-md text-lg "
                    onChange={handleChange}
                    placeholder="Search..."
                />
                <BiSearch className="absolute top-2 left-2 pr-1 border-r-2" size="26px" color="gray" />
            </div>

            <div className="flex flex-col">
                <div className="mb-3 overflow-x-auto rounded-xl shadow-md">
                    <div className="pt-2 align-middle inline-block min-w-full">
                    <div className="overflow-hidden border-gray-200 rounded-xl">
                        <table className="w-full divide-y divide-gray-200 relative">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-3 py-4 text-left text-xs text-center font-medium text-gray-500 uppercase tracking-wider">
                                    S/N
                                </th>
                                <th scope="col" className="md:px-2 px-1 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th scope="col" className="px-3 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="md:px-2 px-1 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    email
                                </th>
                                <th scope="col" className=" md:px-3 px-1 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    admin
                                </th>
                                <th scope="col" className="md:px-3 px-1 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-300">
                            {Array.isArray(data) && data.length === 0 
                            ? <tr>
                                <td colSpan="6" className="text-center py-4">No user found</td>
                                </tr> 
                            : data.map((item, index) => {
                                return (
                                <tr key={item.id} className="">
                                    <td className="font-medium whitespace-nowrap text-center py-3">{index + 1}</td>
                                    <td className="font-medium whitespace-nowrap md:px-2 px-1 py-3">{item.id}</td>
                                    <td className="flex items-center font-medium whitespace-nowrap px-2 py-3">
                                        <img src={item.image} alt={item.name} className="w-8 h-8 mr-2 rounded-full object-center" />
                                        <span className="whitespace-nowrap truncate">{item.name}</span>
                                    </td>
                                    <td className="text-sm truncate whitespace-nowrap md:px-2 px-1 py-3">{item.email}</td>
                                    <td className="text-sm truncate whitespace-nowrap md:px-3 px-1 py-3">
                                        {item.isAdmin 
                                            ? <BiCheck size="25px" color="green" /> 
                                            : <AiOutlineClose size="20px" color="red" />}
                                    </td>
                                    <td className="text-xs truncate whitespace-nowrap md:px-3 px-1 py-3">
                                        <div className="flex items-center">
                                            <Link to={`/user/${item.id}`}>
                                                <HiPencilAlt color="green" size="20px" className="cursor-pointer" />
                                            </Link>
                                            <FaRegTrashAlt onClick={() => handleDelete(item.id)} color="red" size="20px" className="ml-2 cursor-pointer" />
                                        </div>
                                    </td> 
                                </tr>
                                )
                            })}
                        </tbody> 
                        </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Users;
