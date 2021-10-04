import React, { useState } from 'react'
import { useHistory } from 'react-router';
import BaseButton from '../../components/BaseButton';
import BaseInput from '../../components/BaseInput'
import { BaseOption, BaseSelect } from '../../components/BaseSelect';
import { Helmet } from 'react-helmet';

const NewUser = () => {
    let history = useHistory();
    
    const [form, setForm] = useState({
        username: '',
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        password: '',
        address: '',
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
        alert('New User Created Successful')
        history.push('/users')
    }

    return (
        <div className="new-user bg-gray-100 pt-3 pb-8 sm:px-5 px-3">
            <Helmet>
                <title>New User | Admin Dashboard</title>
                <meta name="description" content="Add New User page of Admin Dashboard" />
            </Helmet>
            <h1 className="mb-4 text-xl sm:text-2xl font-medium border-b-2 border-gray-300">New User</h1>
            <form onSubmit={handleSubmit} className="flex flex-wrap bg-white p-5 pb-10 rounded-xl shadow-lg">
                <div className="w-96 mt-3 mr-5">
                    <BaseInput 
                        label="Username" 
                        name="username" 
                        value={form.username}
                        placeholder="John Smith"
                        onChange={handleChange}
                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                    />
                </div>
                <div className="w-96 mr-5">
                    <BaseInput 
                        label="Full Name" 
                        name="fullName" 
                        value={form.fullName}
                        placeholder="John Smith"
                        onChange={handleChange}
                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                    />
                </div>
                <div className="w-96 mr-5">
                    <BaseInput 
                        type="email" 
                        label="Email" 
                        name="emailAddress" 
                        value={form.emailAddress}
                        placeholder="admin@gmail.com"
                        onChange={handleChange}
                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                    />
                </div>
                <div className="w-96 mr-5">
                    <BaseInput 
                        type="password" 
                        label="Password" 
                        name="password" 
                        value={form.password}
                        placeholder="password"
                        onChange={handleChange}
                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                    />
                </div>
                <div className="w-96 mr-5">
                    <BaseInput 
                        label="Phone" 
                        name="phoneNumber" 
                        value={form.phoneNumber}
                        placeholder="+234 813 518 7981"
                        onChange={handleChange}
                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                    />
                </div>
                <div className="w-96 mt-3 mr-5">
                    <BaseInput 
                        label="Address" 
                        name="address" 
                        value={form.address}
                        placeholder="Lagos | Nigeria"
                        onChange={handleChange}
                        className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none"
                    />
                </div>
                <div className="w-96 mt-3 mr-5">
                    <label>Gender</label>
                    <div className="flex flex-col">
                        <div>
                            <input type="radio" name="gender" id="male" value="male" />
                            <label htmlFor="male" className="ml-2">Male</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" id="female" value="female" />
                            <label htmlFor="female" className="ml-2">Female</label>
                        </div>
                        
                        <div>
                            <input type="radio" name="gender" id="other " value="other" />
                            <label htmlFor="other" className="ml-2">Other</label>
                        </div>
                    </div>
                </div>
                <div className="w-96 mt-3 mr-5 flex flex-col">
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
                    className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md mt-5 w-52"
                />
            </form>
        </div>
    )
}

export default NewUser
