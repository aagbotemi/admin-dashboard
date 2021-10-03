import React from 'react'
import Chart from '../components/Chart'
import FeaturedInfo from '../components/FeaturedInfo'
import LatestTransaction from '../components/LatestTransaction'
import { userData } from './../dummyData'
import { latestTransactionData } from './../dummyData'
import TopSellingProduct from '../components/TopSellingProduct'
import { topSellingData } from './../dummyData'
import { featuredInfo } from './../dummyData.js';

const Home = () => {
    
    return (
        <div className="home bg-gray-100 pt-3 sm:px-5 px-3">
            <h1 className="mb-4 text-xl sm:text-2xl font-medium border-b-2 border-gray-300">Dashboard</h1>

            <FeaturedInfo data={featuredInfo} />

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-3 lg:gap-3 mt-5">
                <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
                <TopSellingProduct data={topSellingData} title="Top Selling Products"/>
            </div>

            <LatestTransaction data={latestTransactionData} title="Latest Transactions" />
        </div>
    )
}

export default Home