import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { FiBarChart2 } from 'react-icons/fi';
import FeaturedInfo from '../components/FeaturedInfo'


const Home = () => {
    return (
        <div className="home bg-gray-100 pt-3 sm:px-5 px-3">
            <h1 className="mb-4 text-3xl font-semibold border-b-2 border-gray-300">Dashboard</h1>
            <FeaturedInfo />
        </div>
    )
}

export default Home