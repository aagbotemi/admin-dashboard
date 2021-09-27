import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { featuredInfo } from './../dummyData.js';
import { formatNumber } from '../utils/formatNumber';


const FeaturedInfo = () => {
    return (
        <div className="featured">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredInfo.map(item => {
                    return (
                        <li key={item.id} className="bg-white flex justify-start justify-between p-3 sm:py-4 sm:px-5 rounded-xl shadow-xl cursor-pointer">
                            <div>
                                <h2 className="text-lg uppercase">
                                    {item.name} 
                                    {item.subName ? <span className="text-sm lowercase ml-1">({item.subName})</span> : null }
                                </h2>
                                <div className="my-1 text-2xl font-medium ">
                                    {item.amount ? <span>&#36;{formatNumber(item.amount)}</span> : formatNumber(item.count)}</div>
                                <div className="flex items-center">
                                    <span className={`${item.increase ? "bg-green-100" : "bg-red-100"} p-1 rounded-full`}>
                                        {item.increase ? <AiOutlineArrowUp color="green" /> : <AiOutlineArrowDown color="red"/>}
                                    </span>
                                    <span className="font-semibold mx-2 text-lg">{item.percentage}%</span>
                                    <span className="text-sm">{item.timeline}</span>
                                </div>
                            </div>
                            <div className={`text-sm rounded-full my-auto p-1 ${item.iconBgClr}`}>
                                {item.iconLg}
                            </div>
                            
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FeaturedInfo