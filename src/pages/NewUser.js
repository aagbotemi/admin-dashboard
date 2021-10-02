import React from 'react'

const NewUser = () => {
    return (
        <div className="new-user bg-gray-100 pt-3 pb-8 sm:px-5 px-3">
            <h2 className="mb-4 text-3xl font-semibold border-b-2 border-gray-300">New User</h2>


            <form action="" className="flex flex-wrap bg-white p-5 pb-10 rounded-xl shadow-lg">
                <div className="w-96 mt-3 mr-5">
                    <label>Username</label>
                    <input type="text" placeholder="John Smith" className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none" />
                </div>
                <div className="w-96 mt-3 mr-5">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none" />
                </div>
                <div className="w-96 mt-3 mr-5">
                    <label>Email</label>
                    <input type="email" placeholder="admin@gmail.com" className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none" />
                </div>
                <div className="w-96 mt-3 mr-5">
                    <label>Password</label>
                    <input type="password" placeholder="password" className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none" />
                </div>
                <div className="w-96 mt-3 mr-5">
                    <label>Phone</label>
                    <input type="text" placeholder="+234 813 518 7981" className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none" />
                </div>
                <div className="w-96 mt-3 mr-5">
                    <label>Address</label>
                    <input type="text" placeholder="Lagos | Nigeria" className="w-full bg-gray-100 py-2 px-3 rounded-md outline-none" />
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
                    <label htmlFor="active">Active</label>
                    <select name="active" id="active" className="w-24 border p-2 rounded-lg">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="mt-5 w-96 bg-blue-500 text-white py-2 rounded-lg">Create</button>
            </form>
        </div>
    )
}

export default NewUser
