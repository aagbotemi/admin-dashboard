import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { FiBarChart2 } from 'react-icons/fi';
import FeaturedInfo from '../components/FeaturedInfo'


const Home = () => {
    return (
        <div className="home bg-gray-100 py-7 sm:px-5 px-3">
            <FeaturedInfo />
        </div>
    )
}

export default Home