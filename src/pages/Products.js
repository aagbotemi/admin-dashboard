import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productData } from '../dummyData'
import { formatNumber } from '../utils/formatNumber'
import {FaRegTrashAlt} from 'react-icons/fa'


const Products = () => {
  const [data, setData] = useState(productData)
  const [modal, setModal] = useState(false)

  const Button = ({ type }) => {
    return <button className={"rounded-md px-2 py-1 widgetLgButton " + type}>{type}</button>
  }

  const handleModal = () => {
    setModal(true)
  }
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
    setModal(false)
  }

  return (
    <div className="home bg-gray-100 pt-3 sm:px-5 px-3">
      <h1 className="mb-4 text-3xl font-semibold border-b-2 border-gray-300">Products</h1>

      {/* <Link className="bg-green-400 text-white px-1 rounded-md" to={`/productListing`}>
          <button>Hello This</button>
      </Link> */}
      
          <div className="flex flex-col overflow-hidden">
            <div className="mb-3 overflow-x-auto rounded-xl">
                <div className="py-2 align-middle inline-block overflow-hidden min-w-full shadow-xl">
                    <div className="shadow overflow-hidden border-b border-gray-200 rounded-xl">
                        <table className="w-full divide-y divide-gray-200 relative">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      S/N
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        stock
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        amount
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-300">
                              
                                {Array.isArray(data) && data.length === 0 
                                  ? <tr>
                                      <td colSpan="6" className="text-center py-4">No product found</td>
                                    </tr> 
                    :
                    data.map((item, index) => {
                                  return (
                                     <tr>
                                        <td className="font-medium whitespace-nowrap px-4 py-2">{index + 1}</td>
                                        <td className="flex items-center font-medium whitespace-nowrap px-4 py-2">
                                          <img src={item.image} alt={item.name} className="w-10 h-10 mr-2 rounded-full object-center" />
                                          <span className="whitespace-nowrap truncate">{item.name}</span>
                                        </td>
                                        <td className="text-sm truncate whitespace-nowrap px-4 py-2">{item.stock}</td>
                                        <td className="text-sm truncate whitespace-nowrap px-4 py-2">&#36;{formatNumber(item.amount)}</td>
                                        <td className="truncate whitespace-nowrap px-4 py-2 text-sm">
                                          {item.status}
                                        </td>
                                        <td className="text-sm truncate whitespace-nowrap px-4 py-2">
                                          <div className="flex items-center">
                                            <Link className="bg-green-400 text-white px-1 rounded-md" to={`/product-details/${item.id}`}>
                                              <Button type="Edit"></Button>
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
                                            {/* {!modal && <div className="fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                                            <div className="bg-white shadow-md  w-52">
                                              <div className="">
                                                <div className="text-gray-700 p-3 break-all">
                                                  Are you sure you want to delete this item
                                                </div>
                                              </div>
                                            </div>
                                              <button onClick={() => handleDelete(item.id)}>Delete</button>
                                            </div>} */}
                                            {/* <FaRegTrashAlt onClick={() => handleDelete(item.id) } color="red" size="20px" className="ml-2 cursor-pointer"/> */}
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
