import React from 'react'
import { dashboardRoutesList } from '../../hooks/routes'
import { Route, Routes } from 'react-router-dom'
import DashboardLeyaut from '../../features'

const DashboardRoutes = () => {
  return (
    <DashboardLeyaut>
      <Routes> {dashboardRoutesList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)} </Routes>
    </DashboardLeyaut>
  )
}

export default DashboardRoutes