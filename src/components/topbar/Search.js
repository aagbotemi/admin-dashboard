import React from 'react'
import { CgClose } from 'react-icons/cg'

const Search = ({close}) => {
    return (
        <div className="absolute -top-1 right-0 ">
            <div className="relative">
                <input 
                    type="text"
                    className="w-96 px-4 py-5 bg-purple-50 h-11 rounded-3xl shadow-md focus:outline-none"
                    placeholder="Search for name, product..."
                />
                <CgClose className="absolute top-3 right-3" size="20px" color="gray" onClick={close} />
            </div>
        </div>
    )
}

export default Search
