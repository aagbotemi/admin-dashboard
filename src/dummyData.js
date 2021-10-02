import { RiDashboardLine } from 'react-icons/ri';
import { CgProductHunt } from 'react-icons/cg';
import { AiOutlineShoppingCart, AiOutlineTransaction, AiOutlineUserAdd } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GiSellCard } from 'react-icons/gi';
import { FiBarChart2 } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';
import Abiodun from './assets/images/abiodun.jpg'

import airpod from './assets/images/airpod.jpg'
import casualShoe from './assets/images/casualShoe.jpg'
import casualWear from './assets/images/casualWear.jpg'
import flatShoes from './assets/images/flatShoes.jpg'
import formalShoe from './assets/images/formalShoe.jpg'
import incerunVintageMen from './assets/images/incerunVintageMen.jpg'
import menTravelTrekkingShirt from './assets/images/menTravelTrekkingShirt.jpg'
import shoeHeels from './assets/images/shoeHeels.jpg'
import springLeather from './assets/images/springLeather.jpg'
import womenTop from './assets/images/womenTop.jpg'
import wrinkleFreePinPoint from './assets/images/wrinkleFreePinPoint.jpg'

export const SidebarData = [
    {
        id: 1,
        name: "Dashboard",
        path: "/",
        icon: <RiDashboardLine size="25px" />,
    },
    {
        id: 2,
        name: "Products",
        path: "/products",
        icon: <CgProductHunt size="25px" />,
    },
    {
        id: 3,
        name: "Transactions",
        path: "/transactions",
        icon: <AiOutlineTransaction size="25px" />,
    },
    {
        id: 4,
        name: "Users",
        path: "/users",
        icon: <BiUser size="25px" />,
    },
    {
        id: 5,
        name: "Sales",
        path: "/sales",
        icon: <GiSellCard size="25px" />,
    }

];

export const featuredInfo = [
    {
        id: 1,
        name: "Revenue",
        subName: "Monthly",
        amount: "40000",
        percentage: 4.48,
        timeline: "Since last month",
        iconLg: <FiBarChart2 size="40px" color="green" />,
        iconBgClr: "bg-green-100",
        increase: true,
    },
    {
        id: 2,
        name: "Sales",
        amount: "2250",
        percentage: 1.4,
        timeline: "Since last month",
        iconLg: <AiOutlineShoppingCart size="40px" color="blue" />,
        iconBgClr: "bg-blue-100",
        increase: false,
    },
    // {
    //     id: 3,
    //     name: "Cost",
    //     amount: "5800",
    //     percentage: 2.4,
    //     timeline: "Since last month",
    //     iconLg: <MdPayment size="40px" color="blue" />,
    //     iconBgClr: "bg-blue-100",
    //     increase: true,
    // },
    {
        id: 4,
        name: "New User",
        count: "223",
        percentage: 10.5,
        timeline: "Since last month",
        iconLg: <AiOutlineUserAdd size="40px" color="gold" />,
        iconBgClr: "bg-yellow-100",
        increase: true,
    }

];

export const userData = [
    {
        name: "Jan",
        "Active User": 4000,
    },
    {
        name: "Feb",
        "Active User": 3000,
    },
    {
        name: "Mar",
        "Active User": 5000,
    },
    {
        name: "Apr",
        "Active User": 4000,
    },
    {
        name: "May",
        "Active User": 3000,
    },
    {
        name: "Jun",
        "Active User": 2000,
    },
    {
        name: "Jul",
        "Active User": 4000,
    },
    {
        name: "Aug",
        "Active User": 3000,
    },
    {
        name: "Sep",
        "Active User": 4000,
    },
    {
        name: "Oct",
        "Active User": 1000,
    },
    {
        name: "Nov",
        "Active User": 4000,
    },
    {
        name: "Dec",
        "Active User": 3000,
    },
];

export const topSellingData = [
    {
        id: 1,
        name: "Carter's Shirt",
        amount: 290,
        image: Abiodun,
    },
    {
        id: 2,
        name: "Carter's Shirt",
        amount: 290,
        image: Abiodun,
    },
    {
        id: 3,
        name: "Carter's Shirt",
        amount: 290,
        image: Abiodun,
    },
    {
        id: 4,
        name: "Carter's Shirt",
        amount: 290,
        image: Abiodun,
    },
    {
        id: 5,
        name: "Carter's Shirt",
        amount: 290,
        image: Abiodun,
    }
];

export const latestTransactionData = [
    {
        id: 1,
        name: "Lekan Israel",
        amount: 7250,
        image: Abiodun,
        date: "28 Sep, 2021",
        status: "Approved"
    },
    {
        id: 2,
        image: Abiodun,
        name: "AbdulRhaman Afaraetu",
        amount: 300,
        date: "28 Sep, 2021",
        status: "Approved"
    },
    {
        id: 3,
        image: Abiodun,
        name: "Chisom Amarachi",
        amount: 300,
        date: "28 Sep, 2021",
        status: "Pending"
    },
    {
        id: 4,
        image: Abiodun,
        name: "Gideon Emeka",
        amount: 400,
        date: "28 Sep, 2021",
        status: "Declined"
    },
    {
        id: 5,
        amount: 3500,
        name: "Mariam Opeyemi",
        image: Abiodun,
        date: "28 Sep, 2021",
        status: "Pending"
    },
    {
        id: 6,
        image: Abiodun,
        name: "Andrew Praise",
        amount: 500,
        date: "28 Sep, 2021",
        status: "Approved"
    }
];

export const productData = [
    {
        id: 1,
        name: "Apple Airpods",
        image: airpod,
        stock: 23,
        status: "In Stock",
        amount: 120,
    },
    {
        id: 2,
        name: "Casual Shoe",
        image: casualShoe,
        stock: 13,
        status: "In Stock",
        amount: 1200,
    },
    {
        id: 3,
        name: "Casual Wear",
        image: casualWear,
        stock: 32,
        status: "In Stock",
        amount: 500,
    },
    {
        id: 4,
        name: "Flat Shoe",
        image: flatShoes,
        stock: 53,
        status: "In Stock",
        amount: 1250,
    },
    {
        id: 5,
        name: "Formal Shoe",
        image: formalShoe,
        stock: 0,
        status: "Out of Stock",
        amount: 120,
    },
    {
        id: 6,
        name: "Vintage Men",
        image: incerunVintageMen,
        stock: 46,
        status: "In Stock",
        amount: 850,
    },
    {
        id: 7,
        name: "Trekking Shirt",
        image: menTravelTrekkingShirt,
        stock: 3,
        status: "Almost Out of Stock",
        amount: 420,
    },
    {
        id: 8,
        name: "Shoe Heels",
        image: shoeHeels,
        stock: 39,
        status: "In Stock",
        amount: 5000,
    },
    {
        id: 9,
        name: "Spring Leather",
        image: springLeather,
        stock: 27,
        status: "In Stock",
        amount: 600,
    },
    {
        id: 10,
        name: "Women Top",
        image: womenTop,
        stock: 0,
        status: "Out of Stock",
        amount: 4000,
    },
    {
        id: 11,
        name: "Wrinkle Free",
        image: wrinkleFreePinPoint,
        stock: 20,
        status: "In Stock",
        amount: 1500,
    }
];

export const usersData = [
    {
        id: "53ef42-ab",
        image: Abiodun,
        name: "Godstime Michael",
        email: "admin1@gmail.com",
        isAdmin: true
    },
    {
        id: "67ga86-ab",
        image: Abiodun,
        name: "Kenny Solomon",
        email: "admin3@gmail.com",
        isAdmin: true
    },
    {
        id: "38aj85-ab",
        image: Abiodun,
        name: "Abigael Joshua",
        email: "admin2@gmail.com",
        isAdmin: true
    },
    {
        id: "53eb42-ab",
        image: Abiodun,
        name: "Bola Cynthia",
        email: "user1@gmail.com",
        isAdmin: false
    },
    {
        id: "78ya56-ab",
        image: Abiodun,
        name: "Andrew Impact",
        email: "user2@gmail.com",
        isAdmin: false
    },
    {
        id: "24yh67-ab",
        image: Abiodun,
        name: "Dayo Bright",
        email: "user3@gmail.com",
        isAdmin: false
    },
    {
        id: "67ki89-ab",
        image: Abiodun,
        name: "Victor Tayo",
        email: "user4@gmail.com",
        isAdmin: false
    },
    {
        id: "43ra00-ab",
        image: Abiodun,
        name: "Janet Josiah",
        email: "user5@gmail.com",
        isAdmin: false
    },
    {
        id: "65gb78-ab",
        image: Abiodun,
        name: "Shams Abayomi",
        email: "user6@gmail.com",
        isAdmin: false
    },
    {
        id: "91bv56-ab",
        image: Abiodun,
        name: "John Doe",
        email: "user7@gmail.com",
        isAdmin: false
    },
    {
        id: "78oj09-ab",
        image: Abiodun,
        name: "Sally Sarah",
        email: "user8@gmail.com",
        isAdmin: false
    },
    {
        id: "12hg67-ab",
        image: Abiodun,
        name: "Kelly Rufus",
        email: "user9@gmail.com",
        isAdmin: false
    },
    {
        id: "34th67-ab",
        image: Abiodun,
        name: "Jonathan Lucky",
        email: "tester1@gmail.com",
        isAdmin: false
    },
    {
        id: "34ks78-ab",
        image: Abiodun,
        name: "Esther Oriyomi",
        email: "tester2@gmail.com",
        isAdmin: false
    },
    {
        id: "56ed89-ab",
        image: Abiodun,
        name: "Emmanuel Yemisi",
        email: "tester3@gmail.com",
        isAdmin: false
    },
    {
        id: "38hy89-ab",
        image: Abiodun,
        name: "Tammy Doe",
        email: "tester4@gmail.com",
        isAdmin: false
    }
];
