import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productData } from '../dummyData'
import { formatNumber } from '../utils/formatNumber'
import {FaRegTrashAlt} from 'react-icons/fa'


const Product = () => {
  const [data, setData] = useState(productData)
  const [modal, setModal] = useState(false)
  const [isClicked, setIsClicked] = useState(false)


  const Button = ({ type }) => {
    return <button className={"rounded-md px-2 py-1 widgetLgButton " + type}>{type}</button>
  }

  const handleModal = (id) => {
    setIsClicked(data.find(x => x.id === id))
    setModal(true)
  }
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
    setModal(false)
  }

  return (
    <div className="home bg-gray-100 pt-3 sm:px-5 px-3">
      <h1 className="mb-4 text-3xl font-semibold border-b-2 border-gray-300">Products</h1>

          <div className="flex flex-col">
            <div className="mb-3 overflow-x-auto rounded-xl">
                <div className="py-2 align-middle inline-block min-w-full shadow-xl">
                    <div className="shadow overflow-hidden border-b border-gray-200 rounded-xl">
                        <table className="min-w-full divide-y divide-gray-200">
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
                                  : data.map((item, index ) => {
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
                                            <Link className="bg-green-400 text-white px-1 rounded-md" to={`/products/${item.id}`}>
                                              <Button type="Edit"></Button>
                                            </Link>
                                            <FaRegTrashAlt onClick={() => handleModal(item.id)} color="red" size="20px" className="ml-2 cursor-pointer" />
                                            
                                            {modal && <div>
                                              My Name is Abiodun

                                              <button onClick={() => handleDelete(item.id)}>Delete</button>
                                            </div>}
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

export default Product;
