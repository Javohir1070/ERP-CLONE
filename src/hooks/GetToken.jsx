
import React from 'react'
import { useContext } from 'react'
import { Context } from "../context/Context"

const GetToken = () => {
    const {token, setToken} = useContext(Context)
  return { token, setToken }
}

export default GetToken