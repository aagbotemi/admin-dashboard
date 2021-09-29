import React from 'react'
import { formatNumber } from '../utils/formatNumber';

const TopSellingProduct = ({title, data}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg mt-0">
            <h3 className="font-medium rounded-t-xl pt-4 pb-2 px-4 bg-gray-50 text-lg mb-3">{title}</h3>
            <ul className="divide-y divide-gray-200 pb-4 px-4">
                {data.map(item => {
                    return (
                        <li key={item.id} className="flex items-center justify-between py-2">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.name} className="w-8 h-8 rounded-md" />
                                <span className="ml-2">{item.name}</span>
                            </div>
                            <span className="">&#36;{formatNumber(item.amount)}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TopSellingProduct