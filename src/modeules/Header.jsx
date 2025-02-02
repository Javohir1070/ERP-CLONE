import React, { useState } from 'react'
import {Logo} from "../assets/icons"
import { BellOutlined, InfoCircleOutlined, LogoutOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Badge, Button, Modal, Tooltip } from 'antd'
import { useNavigate } from 'react-router-dom'
import GetToken from "../hooks/GetToken"

const Header = () => {
    const [logOut, setLogOut] = useState(false)
    const [isLoading, setIsloading] = useState(false)
    const {setToken} = GetToken()
    const navigate = useNavigate()

    function handleLogOut(){
        setIsloading(true)
        setTimeout(() => {
            localStorage.clear
            navigate("/")
            setToken(null)
            setIsloading(false)
        },1000)
    }
  return (
    <div className='flex items-center justify-between bg-[#01152a]'>
        <div className='w-[22%] flex items-center gap-5 p-4 main-color'>
            <Logo/>
            <span className='text-white text-[20px]' >Administratsita</span>
        </div>
        <div className='w-[78%] flex items-center justify-between text-white px-[10px]'>
            <MenuFoldOutlined className='text-[28px]'/>
            <div className='flex gap-5'>
                <Tooltip placement='bottom' title={"Oxirgi ma'lumot yangilanish vaqti: 2 Fev, 2025 00:05"}>
                    <Button size='middle' icon={<InfoCircleOutlined/>} iconPosition='left' type='default' >Sinxronlash</Button>
                </Tooltip>
                <Badge count={5} color='red' size='default'>
                     <Button size='middle' icon={<BellOutlined />} iconPosition='left' type='default' ></Button>
                </Badge>
                <button onClick={() => setLogOut(true)} className='flex items-center justify-between gap-2 cursor-pointer'>
                    <span>Chiqish</span>
                    <LogoutOutlined />
                </button>
            </div>
        </div>
        <Modal confirmLoading={isLoading} open={logOut} onCancel={() => setLogOut(false)} onOk={handleLogOut} title="Chiqish">
            <p className='text-[16px]'>Siz aniq chiqishni hohlaysizmi</p>
        </Modal>
    </div>
  )
}

export default Header