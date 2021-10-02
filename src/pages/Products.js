import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productData } from '../dummyData'
import { formatNumber } from '../utils/formatNumber'
import {FaRegTrashAlt} from 'react-icons/fa'
import {HiPencilAlt} from 'react-icons/hi'

const Products = () => {
  const [data, setData] = useState(productData)
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(true)
  }
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
    setModal(false)
  }

  return (
    <div className="products bg-gray-100 pt-3 sm:px-5 px-3">
      <h1 className="mb-4 text-3xl font-semibold border-b-2 border-gray-300">Products</h1>
        <div className="flex flex-col">
          <div className="mb-3 overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="overflow-hidden border-gray-200 rounded-xl shadow-xl">
                <table className="w-full divide-y divide-gray-200 relative">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-3 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        S/N
                      </th>
                      <th scope="col" className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                      </th>
                      <th scope="col" className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          amount
                      </th>
                      <th scope="col" className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          stock
                      </th>
                      <th scope="col" className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                      </th>
                      <th scope="col" className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-300">
                    {Array.isArray(data) && data.length === 0 
                      ? <tr>
                          <td colSpan="6" className="text-center py-4">No product found</td>
                        </tr> 
                      : data.map((item, index) => {
                        return (
                          <tr className="">
                            <td className="font-medium whitespace-nowrap text-center py-3">{index + 1}</td>
                            <td className="flex items-center font-medium whitespace-nowrap px-2 py-3">
                              <img src={item.image} alt={item.name} className="w-8 h-8 mr-2 rounded-full object-center" />
                              <span className="whitespace-nowrap truncate">{item.name}</span>
                            </td>
                            <td className="text-sm truncate whitespace-nowrap px-2 py-3">&#36;{formatNumber(item.amount)}</td>
                            <td className="text-sm truncate whitespace-nowrap px-2 py-3">{item.stock}</td>
                            <td className="truncate whitespace-nowrap px-2 py-3 text-sm">
                              {item.status}
                            </td>
                            <td className="text-xs truncate whitespace-nowrap px-2 py-3">
                              <div className="flex items-center">
                                <Link to={`/product/${item.id}`}>
                                  <HiPencilAlt color="green" size="20px" className="cursor-pointer" />
                                </Link>
                                <FaRegTrashAlt onClick={() => handleModal(item.id)} color="red" size="20px" className="ml-1 cursor-pointer" />
                                
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

export default Products;
