import React, { useEffect } from 'react'
import { useUserStore } from '../state/user'
import { useNavigate } from 'react-router-dom'

const Protected = ({children}) => {
  const {doesSessionExists} = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    if(!doesSessionExists){
      navigate('/')
    }
  
  }, [doesSessionExists])
  
  return (
    <div>
        {children}
    </div>
  )
}

export default Protected