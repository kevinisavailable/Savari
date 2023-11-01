import React, { useEffect, useState } from 'react'
import { useUserStore } from '../state/user'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import { driverMenuItems } from '../Layout/SidebarMenuItems'

const Protected = ({children}) => {
  const {doesSessionExists , role} = useUserStore()
  const navigate = useNavigate()
  const [menuItems , setMenuItems] = useState(driverMenuItems)
  useEffect(() => {
    if(!doesSessionExists){
      navigate('/')
    }
  
  }, [doesSessionExists])
  
  useEffect(() => {
    //Here also with respect to the role provide a sidebar menu items layout
    if(role === 'Driver'){
      setMenuItems(driverMenuItems)
    }
  }, [role])
  
  return (
      <MainLayout menuItems={menuItems}>
        {children}
      </MainLayout>
  )
}

export default Protected