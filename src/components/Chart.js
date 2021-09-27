import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({title, data, dataKey, grid}) => {
    return (
        <div className="col-span-2">
            <div className="chart bg-white rounded-xl p-5 shadow-lg">
                <h3 className="mb-5">{title}</h3>

                <ResponsiveContainer width="100%" aspect={5/2}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#5550bd" />
                        <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                        <YAxis />
                        <Tooltip />
                        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart
