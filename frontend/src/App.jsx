import React, { useEffect } from 'react'
import {RouterProvider} from 'react-router-dom'
import { routes } from './Router/router'
import { getCurrentUser } from './Auth/AuthenticationServices'
import { useUserStore } from './state/user'


const App = () => {
  const {storeUser , storeSession ,doesSessionExists } = useUserStore()

  useEffect(() => {
    const getUser = async()=>{
      try {
        var user = await getCurrentUser()
        storeUser(user)
        storeSession(true)
      } catch (error) {
        storeSession(false)
      }
    }
    getUser()
  }, [doesSessionExists])
  
  return(<>
    <RouterProvider router={routes} />
    </>)
}

export default App
