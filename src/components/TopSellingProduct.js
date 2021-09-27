import React from 'react'
import { topSellingData } from './../dummyData'
import { formatNumber } from '../utils/formatNumber';

const TopSellingProduct = () => {
    return (
        <div className="bg-white rounded-xl p-4 shadow-lg mt-0">
            <h3 className="font-semibold text-lg mb-3">Top Selling Products</h3>
            <ul className="divide-y divide-gray-200">
                {topSellingData.map(item => {
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