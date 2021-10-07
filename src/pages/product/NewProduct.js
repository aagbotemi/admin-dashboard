import React, { useState } from 'react'
import { BiUpload } from 'react-icons/bi';
import { useHistory } from 'react-router';
import BaseButton from '../../components/BaseButton';
import BaseInput from '../../components/BaseInput'
import { BaseOption, BaseSelect } from '../../components/BaseSelect';
import { Helmet } from 'react-helmet';

const NewProduct = () => {
    let history = useHistory();
    
    const [form, setForm] = useState({
        productName: '',
        stock: '',
        active: '',
        file: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const updatedForm = {
            ...form,
            [name]: value
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('New Product Created Successful')
        history.push('/products')
    }

    return (
        <div className="new-user bg-gray-100 pt-3 pb-8 sm:px-5 px-3">
            <Helmet>
                <title>New Product | Admin Dashboard</title>
                <meta name="description" content="Add New Product page of Admin Dashboard" />
            </Helmet>
            <h1 className="mb-4 text-xl sm:text-2xl font-medium border-b-2 border-gray-300">New Product</h1>
            <form onSubmit={handleSubmit} className="max-w-lg bg-white p-5 pb-10 rounded-xl shadow-lg">
                <div className="flex items-center">
                    <label htmlFor="file">
                        <span className="flex items-center">Image</span>
                        <BiUpload  className="cursor-pointer"  size="25px" />
                    </label>
                    <input type="file" id="file" className="hidden" />
                </div>

                <div className="w-full mt-3 mr-5">
                    <BaseInput 
                        label="Name" 
                        name="productName" 
                        value={form.productName}
                        placeholder="Apple Airpod"
                        onChange={handleChange}
                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                    />
                </div>
                <div className="w-full mt-3 mr-5">
                    <BaseInput 
                        label="Stock" 
                        name="stock" 
                        value={form.stock}
                        placeholder="123"
                        onChange={handleChange}
                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                    />
                </div>
                <div className="w-full mt-3 mr-5 flex flex-col">
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
                <BaseButton
                    type="submit"
                    name="Create"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md mt-5 w-full"
                />
            </form>
        </div>
    )
}

export default NewProduct
