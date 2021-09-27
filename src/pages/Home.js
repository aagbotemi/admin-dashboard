import React from 'react'
import Chart from '../components/Chart'
import FeaturedInfo from '../components/FeaturedInfo'
import { userData } from './../dummyData'

const Home = () => {
    return (
        <div className="home bg-gray-100 pt-3 sm:px-5 px-3">
            <h1 className="mb-4 text-3xl font-semibold border-b-2 border-gray-300">Dashboard</h1>
            <FeaturedInfo />

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-5">
                <div className="col-span-2">
                    <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
                </div>
                <div className="">1</div>
            </div>
        </div>
    )
}

export default Home