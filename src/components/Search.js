import React from 'react'

const Search = () => {
    return (
        <div className="search absolute top-12 -right-2 rounded-md ">
            <input 
                type="text"
                className="w-96 bg-purple-50 absolute -top-1 -right-1 h-10 rounded-3xl px-4 py-2 ml-16 shadow-md focus:outline-none"
                placeholder="Search for name, product..."
            />
        </div>
    )
}

export default Search
