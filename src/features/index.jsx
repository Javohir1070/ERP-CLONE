import React from 'react'
import Navbar from '../modeules/Navbar'
import Header from '../modeules/Header'
import GetToken from '../hooks/GetToken'

const DashboardLeyaut = ({children}) => {
  const {collapsed} = GetToken()
  return (
   <>
    <Header/>
    <div className='flex items-center '>
        <Navbar/>
        <div className={`${collapsed ? "w-full":"w-[80%] "} h-[89vh] overflow-y-auto`}>
            {children}
        </div>
    </div>
   </>
  )
}

export default DashboardLeyaut