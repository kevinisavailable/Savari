import React, { useEffect, useState } from 'react'
import {Button , Modal} from 'antd'
import RegistrationForm from '../Register/RegistrationForm'
import { deleteCurrentSession } from '../../Auth/AuthenticationServices'
import { useUserStore } from '../../state/user'
import LoginForm from '../Login/LoginForm'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
  const {doesSessionExists , storeSession , storeUser} = useUserStore()
  const navigate = useNavigate()

  const [isModalOpen , setIsModalOpen] = useState(false)
  const [isLoginModalOpen , setIsLoginModalOpen] = useState(false)

  const modalClose = ()=>{setIsModalOpen(false)}
  const loginModalClose = ()=>{setIsLoginModalOpen(false)}

  const logout = async()=>{await deleteCurrentSession(); storeSession(false) ; storeUser({})}

  useEffect(() => {
    if(doesSessionExists){
      navigate('/driver')
    }
  }, [doesSessionExists])
  
  return (
    <div>
      <Button onClick={()=>setIsLoginModalOpen(true)}>Login</Button>
      <Button onClick={()=>{setIsModalOpen(true)}}>Register as a driver</Button>
      <Button onClick={logout}>Logout</Button>
      <RegistrationForm 
        isModalOpen={isModalOpen}
        modalClose={modalClose}
        setIsModalOpen={setIsModalOpen}
      />
      <LoginForm 
        isLoginModalOpen = {isLoginModalOpen}
        setIsLoginModalOpen={setIsLoginModalOpen}
        loginModalClose = {loginModalClose}
      />
    </div>
  )
}

export default HomePage