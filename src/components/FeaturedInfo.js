import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { formatNumber } from '../utils/formatNumber';


const FeaturedInfo = ({data}) => {
    return (
        <div className="featured">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.map(item => {
                    return (
                        <li key={item.id} className="bg-white flex justify-start justify-between p-3 sm:py-4 sm:px-5 rounded-xl shadow-lg cursor-pointer">
                            <div>
                                <h2 className="text-sm text-gray-500 uppercase font-medium">
                                    {item.name} 
                                    {item.subName ? <span className="text-sm lowercase ml-1">({item.subName})</span> : null }
                                </h2>
                                <div className="my-1 text-2xl font-semibold ">
                                    {item.amount ? <span>&#36;{formatNumber(item.amount)}</span> : formatNumber(item.count)}
                                </div>
                                <div className="flex items-center">
                                    <span className={`${item.increase ? "bg-green-100" : "bg-red-100"} p-1 rounded-full`}>
                                        {item.increase ? <AiOutlineArrowUp color="green" /> : <AiOutlineArrowDown color="red"/>}
                                    </span>
                                    <span className={`${item.increase ? "text-green-600" : "text-red-600"} font-medium mx-2 text-lg`}>{item.percentage}%</span>
                                    <span className="text-sm hidden sm:block">{item.timeline}</span>
                                </div>
                            </div>
                            <div className={`${item.iconBgClr} text-sm rounded-full my-auto p-1`}>
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