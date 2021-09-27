import { RiDashboardLine } from 'react-icons/ri';
import { CgProductHunt } from 'react-icons/cg';
import { AiOutlineShoppingCart, AiOutlineTransaction, AiOutlineUserAdd } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GiSellCard } from 'react-icons/gi';
import { FiBarChart2 } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';

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
        iconLg: <AiOutlineShoppingCart size="40px" color="pink" />,
        iconBgClr: "bg-yellow-100",
        increase: false,
    },
    {
        id: 3,
        name: "Cost",
        amount: "5800",
        percentage: 2.4,
        timeline: "Since last month",
        iconLg: <MdPayment size="40px" color="blue" />,
        iconBgClr: "bg-blue-100",
        increase: true,
    },
    {
        id: 4,
        name: "New User",
        amount: "223",
        percentage: 10.5,
        timeline: "Since last month",
        iconLg: <AiOutlineUserAdd size="40px" color="gold" />,
        iconBgClr: "bg-yellow-100",
        increase: true,
    }
];
