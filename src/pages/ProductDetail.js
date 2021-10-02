import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {productPerformanceData} from '../dummyData'
import {productDetailsData} from '../dummyData'
import Chart from "../components/Chart"
import { formatNumber } from '../utils/formatNumber';

const ProductDetail = () => {
    const [data, setData] = useState(productDetailsData)
    return (
        <div className="product-detail bg-gray-100 pt-3 sm:px-5 px-3">
            <div className="mb-4 pb-2 border-b-2 border-gray-300 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Product Details</h2>
                <Link to="/new-product">
                    <button className="bg-blue-500 px-3 py-1 text-white rounded-md text-sm capitalize sm:block hidden">Add product</button>
                    <button className="bg-blue-500 px-4 py-1 text-white rounded-md capitalize sm:hidden"> 
                        <AiOutlinePlus size="20px" />
                    </button>
                </Link>
            </div>

{/* grid lg:grid-cols-3 grid-cols-1 gap-y-3 lg:gap-3 mt-5 */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-5 pb-8">
            {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-5 pb-8"> */}
                <Chart data={productPerformanceData} dataKey="Sales" title="Sales Performance" />
                <div className="col-span-1 bg-white shadow-md rounded-xl p-5 pb-10">
                    <div className="">
                        <div className="flex items-center">
                            <img src={data.image} alt={data.name} className="w-10 h-10 rounded-full" />
                            <div className="ml-2">
                                <div className="font-medium">
                                    {data.name}
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex items-center my-2">
                                <span className="mr-2 text-gray-500">ID: </span>
                                {data.id}
                            </div>
                            <div className="flex items-center my-2">
                                <span className="mr-2 text-gray-500">Sales: </span>
                                {data.sales}
                            </div>
                            <div className="flex items-center my-2">
                                <span className="mr-2 text-gray-500">Amount: </span>
                                &#36;{formatNumber(data.amount)}
                            </div>
                            <div className="flex items-center my-2">
                                <span className="mr-2 text-gray-500">Active: </span>
                                {data.active ? 'Yes' : 'No'}
                            </div>
                            <div className="flex items-center my-2">
                                <span className="mr-2 text-gray-500">In Stock: </span>
                                {data.inStock ? 'Yes' : 'No'}
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
