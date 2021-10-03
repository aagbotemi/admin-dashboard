import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productData } from '../dummyData'
import { formatNumber } from '../utils/formatNumber'
import {FaRegTrashAlt} from 'react-icons/fa'
import {HiPencilAlt} from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'

const Products = () => {
  const [data, setData] = useState([])
  const [modal, setModal] = useState(false)
    const [search, setSearch] = useState("")

  const handleModal = () => {
    setModal(true)
  }
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
    setModal(false)
  }

  useEffect(() => {
        setData(productData.filter(product => {
            return Object.values(product).some(name => String(name).includes(search))
        }))
    }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

  return (
    <div className="products bg-gray-100 pt-3 sm:px-5 px-3">
        <div className="mb-3 pb-1 border-b-2 border-gray-300 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-medium">Products</h1>
          <Link to="/new-product">
              <button className="bg-blue-500 px-3 py-1 text-white rounded-md text-sm capitalize sm:block hidden">Add product</button>
              <button className="bg-blue-500 px-4 py-1 text-white rounded-md capitalize sm:hidden"> 
                  <AiOutlinePlus size="20px" />
              </button>
          </Link>
        </div>
        
        <div className="relative mb-1">
          <input
              type="text"
              className="border-0 pl-10 pr-3 py-2 w-full md:w-1/3 sm:w-1/2 rounded-xl outline-none shadow-md text-lg "
              onChange={handleChange}
              placeholder="Search..."
          />
          <BiSearch className="absolute top-2 left-2 pr-1 border-r-2" size="26px" color="gray" />
        </div>

        <div className="flex flex-col">
          <div className="mb-3 overflow-x-auto rounded-xl shadow-md">
            <div className="pt-2 align-middle inline-block min-w-full">
              <div className="overflow-hidden border-gray-200 rounded-xl">
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
                          <tr key={item.id} className="">
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
