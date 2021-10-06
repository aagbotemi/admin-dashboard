import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { transactionData } from '../dummyData'
import { formatNumber } from '../utils/formatNumber'
import {FaRegTrashAlt} from 'react-icons/fa'
import {BiMessageSquareDetail, BiSearch} from 'react-icons/bi'
import StatusBadge from '../components/StatusBadge'
import { Helmet } from 'react-helmet';
import Modal from '../components/Modal'

const Transactions = () => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState({
        show: false, // initial values set to false and null
        id: null,
    })
    const [search, setSearch] = useState("")

    const openModal = (id) => {
        setModal({
            show: true,
            id,
        });
    }
    const closeModal = () => {
        setModal({
            show: false,
            id: null
        });
    }

    const handleDelete = () => {
        if (modal.show && modal.id) {
            console.log(modal.id);
            console.log(modal.show);
            let filteredData = data.filter((item) => item.id !== modal.id);
            setData(filteredData);
            setModal({
                show: false,
                id: null,
            });
        }
    }

    useEffect(() => {
        setData(transactionData.filter(transaction => {
            return Object.values(transaction).some(name => String(name).toLowerCase().includes(search.toLowerCase()))
        }))
    }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="transactions bg-gray-100 pt-3 sm:px-5 px-3">
            <Helmet>
                <title>Transactions | Admin Dashboard</title>
                <meta name="description" content="Transaction Listing page of Admin Dashboard" />
            </Helmet>
            <h1 className="mb-3 text-2xl font-medium border-b-2 border-gray-300">Transactions</h1>
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
                                        <th scope="col" className="px-1 md:px-3 py-5 text-left text-xs font-medium text-center text-gray-500 uppercase tracking-wider">
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
                                        <th scope="col" className="md:px-3 px-1 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
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
                                        <td colSpan="7" className="text-center py-4 text-gray-600">No transaction found</td>
                                    </tr> 
                                    : data.map((item, index) => {
                                        return (
                                            <tr key={item.id} className="">
                                                <td className="font-medium whitespace-nowrap text-center px-1 md:px-3 py-3">{index + 1}</td>
                                                <td className="font-medium whitespace-nowrap truncate md:px-4 px-2 py-3">{item.name}</td>
                                                <td className="text-sm truncate whitespace-nowrap md:px-3 px-1 py-3">&#36;{formatNumber(item.amount)}</td>
                                                <td className="text-sm truncate whitespace-nowrap md:px-3 px-1 py-3">{item.ref}</td>
                                                <td className="text-sm truncate whitespace-nowrap md:px-3 px-1 py-3">
                                                    <StatusBadge type={item.status}></StatusBadge>
                                                </td>
                                                <td className="truncate whitespace-nowrap md:px-3 px-1 py-3 text-xs">
                                                    <div>{item.date}</div>
                                                    <div>[{item.time}]</div>
                                                </td>
                                                <td className="text-xs truncate whitespace-nowrap md:px-3 px-1 py-3">
                                                    <div className="flex items-center">
                                                        <Link to="/transactions">
                                                            <BiMessageSquareDetail color="green" size="20px" className="cursor-pointer" />
                                                        </Link>
                                                        <FaRegTrashAlt onClick={() => openModal(item.id)} color="red" size="20px" className="ml-2 cursor-pointer" />
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
            {modal.show && (
                <Modal 
                    open={modal.show}
                    message="Are you sure you want to delete this item?"
                    cancel={closeModal}
                    cancelText="No"
                    confirm={handleDelete}
                    confirmText="Yes"
                />
            )}
        </div>
    )
}

export default Transactions
