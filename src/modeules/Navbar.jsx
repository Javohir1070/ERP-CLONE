import React, { useState } from 'react'
import { dashboardRoutesList } from '../hooks/routes';
import {  Menu } from 'antd';
import { Link } from 'react-router-dom';
import GetToken from '../hooks/GetToken';

const Navbar = () => {
    const {collapsed} = GetToken()
  const listMenu = dashboardRoutesList.map(item => {
    const data = {
      key:item.id,
      label:<Link className='pl-2 text-[16px]' to={item.path} >{item.title}</Link>,
      icon:item.icon
    }
    return data
  })
  return (
        <Menu
        className={`${collapsed ? "":"!w-[20%]" } bg-[#01152a] h-[100vh] overflow-y-auto`}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={listMenu}
        />
  )
}

export default Navbar