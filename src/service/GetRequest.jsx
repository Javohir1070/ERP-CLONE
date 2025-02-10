import React, { useEffect, useState } from 'react'
import { instance } from '../hooks/instance'

const GetRequest = (api, isObj) => {
    const [data, setData] = useState(isObj ? {} : [])
    useEffect(() => {
        instance().get(api).then(res => setData(res.data))
    },[])
    
  return data
  
}

export default GetRequest