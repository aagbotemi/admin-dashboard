import React from 'react'
import {formatNumber} from '../utils/formatNumber'

const LatestTransaction = ({title, data}) => {
    const Button = ({ type }) => {
        return <button className={"rounded-md px-2 py-1 widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="flex flex-col">
            <div className="my-3 overflow-x-auto">
                <div className="py-2 align-middle inline-block min-w-full shadow-xl">
                    <div className="shadow overflow-hidden border-b border-gray-200 rounded-xl">
                        <h3 className="px-6 py-3 bg-white text-xl font-medium">{title}</h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        date
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        amount
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-300">
                                {data.map(item => {
                                    return (
                                        <tr>
                                            <td className="flex items-center font-medium whitespace-nowrap px-4 py-2">
                                                <img src={item.image} alt={item.name} className="w-10 h-10 mr-2 rounded-full object-center" />
                                                <span className="whitespace-nowrap truncate">{item.name}</span>
                                            </td>
                                            <td className="text-sm truncate whitespace-nowrap px-4 py-2">{item.date}</td>
                                            <td className="text-sm truncate whitespace-nowrap px-4 py-2">&#36;{formatNumber(item.amount)}</td>
                                            <td className=" px-4 py-2 text-sm">
                                                <Button type={item.status}></Button>
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
    )
}

export default LatestTransaction
