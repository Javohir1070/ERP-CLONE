import React from 'react'
import { PATH } from "../hooks/path"
import { Groups, Home, Market, Students, Teachers } from "../pages/Dashboard"
import { CodeSandboxOutlined, HomeOutlined, ShoppingCartOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons'
export const  dashboardRoutesList = [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
        title:"Asosiy",
        icon:<HomeOutlined className='!text-[22px]' />
    },
    {
        id:2,
        path:PATH.techesrs,
        element:<Teachers/>,
        title:"Ustozlar",
        icon:<UserOutlined  className='!text-[22px]'/>
    },
    {
        id:3,
        path:PATH.students,
        element:<Students/>,
        title:"O'quvchilar",
        icon:<UsergroupAddOutlined  className='!text-[22px]'/>
    },
    {
        id:4,
        path:PATH.groups,
        element:<Groups/>,
        title:"Guruhlar",
        icon:<CodeSandboxOutlined className='!text-[22px]'/>
    },
    {
        id:5,
        path:PATH.market,
        element:<Market/>,
        title:"Do'kon",
        icon:<ShoppingCartOutlined className='!text-[22px]'/>
    }
]