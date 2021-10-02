import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { transactionData } from '../dummyData'
import { formatNumber } from '../utils/formatNumber'
import {FaRegTrashAlt} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Transactions = () => {
    const [data, setData] = useState(transactionData)
    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(true)
    }
    
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
        setModal(false)
    }

    const Button = ({ type }) => {
        return <span className={"text-xs rounded-md px-2 py-1 widgetLgButton " + type}>{type}</span>
    }
    return (
        <div className="transactions bg-gray-100 pt-3 sm:px-5 px-3">
            <h1 className="mb-4 text-3xl font-semibold border-b-2 border-gray-300">Transactions</h1>
            <div className="flex flex-col">
                <div className="mb-3 overflow-x-auto">
                    <div className="py-2 align-middle inline-block min-w-full">
                        <div className="overflow-hidden border-gray-200 rounded-xl shadow-xl">
                            <table className="w-full divide-y divide-gray-200 relative">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-1 md:px-3 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            S/N
                                        </th>
                                        <th scope="col" className="px-2 md:px-4 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            amount
                                        </th>
                                        <th scope="col" className="md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ref no.
                                        </th>
                                        <th scope="col" className="md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            status
                                        </th>
                                        <th scope="col" className=" md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                                            date &amp; time
                                        </th>
                                        <th scope="col" className="md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-300">
                                    {Array.isArray(data) && data.length === 0 
                                    ? <tr>
                                        <td colSpan="6" className="text-center py-4">No transaction found</td>
                                        </tr> 
                                    : data.map((item, index) => {
                                        return (
                                        <tr className="">
                                            <td className="font-medium whitespace-nowrap text-center py-3">{index + 1}</td>
                                            <td className="flex items-center font-medium whitespace-nowrap truncate px-2 py-3">{item.name}</td>
                                            <td className="text-sm truncate whitespace-nowrap px-2 py-3">&#36;{formatNumber(item.amount)}</td>
                                            <td className="text-sm truncate whitespace-nowrap px-2 py-3">{item.ref}</td>
                                            <td className="text-sm truncate whitespace-nowrap px-2 py-3">
                                                <Button type={item.status}></Button>
                                            </td>
                                            <td className="truncate whitespace-nowrap px-2 py-3 text-xs">
                                            <div>{item.date}</div>
                                            <div>[{item.time}]</div>
                                            </td>
                                            <td className="text-xs truncate whitespace-nowrap px-2 py-3">
                                            <div className="flex items-center">
                                                <Link to={`/product/${item.id}`}>
                                                <BiMessageSquareDetail color="green" size="20px" className="cursor-pointer" />
                                                </Link>
                                                <FaRegTrashAlt onClick={() => handleModal(item.id)} color="red" size="20px" className="ml-2 cursor-pointer" />
                                                
                                                {modal && 
                                                <div className="modal absolute m-auto shadow-md bg-white rounded-lg">
                                                <div className="py-4 px-6">
                                                    <div className="text-gray-700 text-lg text-center leading-6">
                                                    Are you sure you want to delete this item?
                                                    </div>
                                                    <div className="flex justify-between mt-5">
                                                    <button className="bg-red-500 py-1 px-4 text-white text-sm rounded-md" onClick={() => setModal(false)}>No</button>
                                                    <button className="bg-green-400 py-1 px-4 text-white text-sm rounded-md" onClick={() => handleDelete(item.id)}>Yes</button>
                                                    </div>
                                                </div>
                                                </div>}
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

export default Transactions
