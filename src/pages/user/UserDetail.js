import React, { useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiUpload, BiUser } from 'react-icons/bi'
import { FaPhoneAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import { userDetailsData } from '../../dummyData'
import { Link, useHistory } from 'react-router-dom'
import FormInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton'
import AddNewItemButton from '../../components/AddNewItemButton'


const UserDetail = () => {
    const [data, setData] = useState(userDetailsData)

    let history = useHistory();
    
    const [form, setForm] = useState({
        username: '',
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        address: '',
        file: ''
    });

    const handleChange = (event) => {
        // Get the name of the field that caused this change event
        // Get the new value of this field
        const { name, value } = event.target;
        // Assign new value to the appropriate form field
        const updatedForm = {
            ...form,
            [name]: value
        };
        console.log('Form changed: ', updatedForm);
        // alert('Form changed: ', JSON.parse(updatedForm));
        // Update state
        console.log(setForm(updatedForm));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Update Successful')
        history.push('/users')
    }

    return (
        <div className="user-detail bg-gray-100 pt-3 sm:px-5 px-3">
            <div className="mb-3 pb-1 border-b-2 border-gray-300 flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-medium">User Details</h1>
                <Link to="/new-user">
                    <AddNewItemButton />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-5 pb-8">
                <div className="bg-white shadow-md rounded-xl p-5 pb-10">
                    <div className="">
                        <div className="flex items-center">
                            <img src={data.image} alt="" className="w-10 h-10 rounded-full" />
                            <div className="ml-2">
                                <div className="font-medium">
                                    {data.name}
                                </div>
                                <div className="font-medium text-gray-500">
                                    {data.title}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="font-medium text-gray-500 mt-4">Account Details
                            </div>

                            <div className="flex items-center my-2">
                                <BiUser />
                                <span className="ml-2">{data.username}
                                </span>
                            </div>
                            <div className="flex items-center mb-2">
                                <AiOutlineCalendar />
                                <span className="ml-2">{data.date}
                                </span>
                            </div>
                            <div className="font-medium text-gray-500 mt-4">Contact Details
                            </div>
                            <div className="flex items-center my-2">
                                <FaPhoneAlt />
                                <span className="ml-2">{data.phone}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <FiMail />
                                <span className="ml-2">{data.email}</span>
                            </div>
                            <div className="flex items-center my-2">
                                <BiUser />
                                <span className="ml-2">{data.username}</span>
                            </div>
                            <div className="flex items-center">
                                <GrLocation />
                                <span className="ml-2">{data.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-xl p-5 pb-10 md:mt-0 mt-2">
                    <div className="text-2xl mb-2">Edit</div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between flex-col lg:flex-row">
                            <div className="lg:mr-2">
                                <div className="mb-2">
                                    <FormInput 
                                        label="Username" 
                                        name="username" 
                                        value={form.username}
                                        placeholder="abiodun99"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                                    />
                                </div>
                                <div className="mb-2">
                                    <FormInput 
                                        label="Full Name"
                                        name="fullName" 
                                        value={form.fullName}
                                        placeholder="Abiodun Awoyemi"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                                    />
                                </div>
                                <div className="mb-2">
                                    <FormInput 
                                        label="Email"
                                        type="email"
                                        name="emailAddress" 
                                        value={form.emailAddress}
                                        placeholder="user@gmail.com"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                                    />
                                </div>
                                <div className="mb-2">
                                    <FormInput 
                                        label="Phone"
                                        name="phoneNumber" 
                                        value={form.phoneNumber}
                                        placeholder="+1 123 456 67"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                                    />
                                </div>
                                <div className="mb-2">
                                    <FormInput 
                                        label="Address"
                                        name="address" 
                                        value={form.address}
                                        placeholder="Lagos | Nigeria"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                                    />
                                </div>
                            </div>
                            <div className="lg:ml-2 lg:mt-0 mt-3">
                                <div className="flex items-center">
                                    <img src={data.image} alt="" className="w-20 h-20 rounded-md" />
                                    {/* <FormInput 
                                        label={<BiUpload className="" size="25px" />}
                                        type="file"
                                        name="file" 
                                        value={form.file}
                                        onChange={handleChange}
                                        className="hidden"
                                    /> */}
                                    <label htmlFor="file">
                                        <BiUpload className="cursor-pointer" size="25px" />
                                    </label>
                                    <input type="file" id="file" className="hidden" />
                                </div>
                            </div>
                        </div>
                        <BaseButton
                            type="submit"
                            name="Update"
                            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md mt-5 w-full"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserDetail
