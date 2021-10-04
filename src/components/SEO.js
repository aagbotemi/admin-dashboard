import React from 'react'
import {Helmet} from 'react-helmet'
import Logo from '../assets/images/logo.svg';
import Favicon from '../assets/images/logo.svg';

const SEO = ({title}) => {
    return (
        <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | Admin Dashboard`}>
            <meta name="description" content="aagbotemi is an admin dashboard where you can see updates about the daily activities in an organization" />
            <meta name="keywords" content="admin, dashboard, users, products, transactions &amp; details" />
            <meta name="image" content={Logo} />
            <link rel="shortcut icon" href={Favicon}/>
        </Helmet>
    )
}

export default SEO