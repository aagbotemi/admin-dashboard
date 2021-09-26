import { RiDashboardLine } from 'react-icons/ri';
import { CgProductHunt } from 'react-icons/cg';
import { AiOutlineTransaction } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GiSellCard } from 'react-icons/gi';

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