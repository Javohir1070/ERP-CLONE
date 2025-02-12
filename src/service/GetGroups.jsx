import React from 'react'
import { useEffect } from "react"
import { instance } from "../hooks/instance"
import { LineOutlined, MoreOutlined } from "@ant-design/icons"
import { Button } from "antd"

export const getGroups = (stackId, refresh, setGroups, teacherId ) => {
    useEffect(() => {
        instance().get(`/groups?stackId=${stackId}`, {
            params:{teacherId}
        }).then(res => {
            setGroups( res.data.map((item, index) => {
          item.key = index + 1
          item.name = item.name ? item.name : <LineOutlined/>
          item.status = item.status ? "Faol" : "Faol emas"
          item.studentCount = item.studentCount ? `${item.studentCount} ta` : `0 ta`
          item.action = <Button className='w-[32px] h-[32px]' type='primary' size='middle'><MoreOutlined className='rotate-90'/></Button>
          return item
        }))
        })
    },[refresh, teacherId])
} 