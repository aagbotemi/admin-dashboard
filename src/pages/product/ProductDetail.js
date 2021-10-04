import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link, useHistory } from 'react-router-dom'
import { productDetailsData, productPerformanceData } from '../../dummyData'
import Chart from "../../components/Chart"
import { formatNumber } from '../../utils/formatNumber';
import { BiUpload } from 'react-icons/bi'
import BaseButton from '../../components/BaseButton'
import AddNewItemButton from '../../components/AddNewItemButton'
import { BaseOption, BaseSelect } from '../../components/BaseSelect'
import BaseInput from '../../components/BaseInput'

const ProductDetail = () => {
    const [data, setData] = useState(productDetailsData)

    let history = useHistory();
    
    const [form, setForm] = useState({
        productName: '',
        inStock: '',
        active: '',
        file: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const updatedForm = {
            ...form,
            [name]: value
        };
        console.log('Form changed: ', updatedForm);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Update Successful')
        history.push('/users')
    }


    return (
        <div className="product-detail bg-gray-100 pt-3 pb-10 sm:px-5 px-3">
            <div className="mb-3 pb-1 border-b-2 border-gray-300 flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-medium">Product Details</h1>
                <Link to="/new-product">
                    <AddNewItemButton />
                </Link>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-y-3 mt-5 pb-4">
                <Chart data={productPerformanceData} dataKey="Sales" title="Sales Performance" />


                <div className="bg-white shadow-md rounded-xl p-5 pb-10">
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
            <div className="bg-white shadow-md rounded-xl px-6 py-8 pb-10">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between flex-col lg:flex-row sm:w-96">
                        <div className="lg:mr-2 sm:w-80">
                            <div className="mb-2">
                                <BaseInput 
                                    label="Product Name" 
                                    name="productName" 
                                    value={form.productName}
                                    placeholder="Apple Airpod"
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-3 mr-5">
                                <BaseSelect
                                    label="In Stock"
                                    name="inStock"
                                    value={form.inStock}
                                    id="inStock"
                                    className="block w-24 border p-2 rounded-lg outline-none"
                                    onChange={handleChange}
                                >
                                    <BaseOption value="Yes" />
                                    <BaseOption value="No" />
                                </BaseSelect>
                            </div>
                            <div className="mt-3 mr-5 flex flex-col">
                                <BaseSelect
                                    label="Active"
                                    name="active"
                                    value={form.active}
                                    id="active"
                                    className="block w-24 border p-2 rounded-lg outline-none"
                                    onChange={handleChange}
                                >
                                    <BaseOption value="Yes" />
                                    <BaseOption value="No" />
                                </BaseSelect>
                            </div>
                        </div>
                        <div className="lg:ml-2 lg:mt-0 mt-3">
                            <div className="flex items-center">
                                <img src={data.image} alt="" className="w-20 h-20 rounded-md" />

                                <label htmlFor="file"><BiUpload  className="cursor-pointer"  size="25px" /></label>
                                <input type="file" id="file" className="hidden" />
                            </div>
                        </div>
                    </div>
                    <BaseButton
                        type="submit"
                        name="Update"
                        className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md mt-5 w-52"
                    />
                </form>
            </div>
        </div>
    )
}

export default ProductDetail
