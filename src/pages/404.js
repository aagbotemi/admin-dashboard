import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div className="error-page bg-gray-100 pt-3 sm:px-5 px-3">
            <Helmet>
                <title>Error | Admin Dashboard</title>
                <meta name="description" content="Error page of Admin Dashboard" />
            </Helmet>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl sm:mt-20 mt-12">Page Not Found</h1>
                <Link to='/' className="text-2xl hover:text-blue-700 text-blue-600 font-medium">Back to home</Link>
            </div>
        </div>
    )
}

export default NotFound