import React from 'react'
import Chart from '../components/Chart'
import FeaturedInfo from '../components/FeaturedInfo'
import { userData } from './../dummyData'
import TopSellingProduct from '../components/TopSellingProduct'
import Abiodun from '../assets/images/abiodun.jpg'

const Home = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="home bg-gray-100 pt-3 sm:px-5 px-3">
            <h1 className="mb-4 text-3xl font-semibold border-b-2 border-gray-300">Dashboard</h1>
            <FeaturedInfo />

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-3 lg:gap-3 mt-5">
                <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
                <TopSellingProduct />
            </div>


            <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>

            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="flex">
                        <img src={Abiodun} alt="" className="w-12" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="flex">
                        <img src={Abiodun} alt="" className="w-12" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Abiodun} alt="" className="w-12" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Abiodun} alt="" className="w-12" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"></Button>
                    </td>
                </tr>

            </table>
        </div>
    
        </div>
    )
}

export default Home