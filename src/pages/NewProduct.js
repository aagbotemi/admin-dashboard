import React from 'react';
import { BiUpload } from 'react-icons/bi';

const NewProduct = () => {
    return (
        <div className="new-user bg-gray-100 pt-3 pb-8 sm:px-5 px-3">
            <h2 className="mb-4 text-3xl font-semibold border-b-2 border-gray-300">New Product</h2>

            <form action="" className="max-w-lg bg-white p-5 pb-10 rounded-xl shadow-lg">
                <div className="flex items-center">
                    <label htmlFor="file">
                        <span className="flex items-center">Image</span>
                        <BiUpload  className="cursor-pointer"  size="25px" />
                    </label>
                    <input type="file" id="file" className="hidden" />
                </div>

                <div className="w-full mt-3 mr-5">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods" className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none" />
                </div>
                <div className="w-full mt-3 mr-5">
                    <label>Stock</label>
                    <input type="text" placeholder="123" className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none" />
                </div>
                <div className="w-full mt-3 mr-5 flex flex-col">
                    <label htmlFor="active">Active</label>
                    <select name="active" id="active" className="w-24 border p-2 rounded-lg">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="mt-5 w-full bg-blue-600 hover:bg-blue-600 text-white py-2 rounded-lg">Create</button>
            </form>
        </div>
    )
}

export default NewProduct
