import { dashboard, expenses, trancations, trend } from "./Icons"

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        links: '/dashboard',
    },
    {
        id: 2,
        title: 'View Transactions',
        icon: trancations,
        links: '/dashboard',
    },
    {
        id: 3,
        title: 'Incomes',
        icon: trend,
        links: '/dashboard',
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses,
        links: '/dashboard',
    },
]