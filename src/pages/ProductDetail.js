import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
    return (
        <div className="product-detail bg-gray-100 pt-3 sm:px-5 px-3">
            <div className="mb-4 pb-2 border-b-2 border-gray-300 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">User Details</h2>
                <Link to="/new-user">
                    <button className="bg-blue-500 px-3 py-1 text-white rounded-md text-sm capitalize sm:block hidden">Add user</button>
                    <button className="bg-blue-500 px-4 py-1 text-white rounded-md capitalize sm:hidden"> 
                        <AiOutlinePlus size="20px" />
                    </button>
                </Link>
            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-5 pb-8">
                <div className="bg-white shadow-md rounded-xl p-5 pb-10"></div>
            </div>
        </div>
    )
}

export default ProductDetail
