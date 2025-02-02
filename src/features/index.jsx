import React from 'react'
import Navbar from '../modeules/Navbar'
import Header from '../modeules/Header'

const DashboardLeyaut = ({children}) => {
  return (
   <>
    <Header/>
    <div className='flex items-center justify-between'>
        <Navbar/>
        <div className='w-[78%] h-[100vh] overflow-y-auto'>
            {children}
        </div>
    </div>
   </>
  )
}

export default DashboardLeyaut