import React, { useState } from 'react'
import {Button , Modal} from 'antd'
import RegistrationForm from '../Register/RegistrationForm'


const HomePage = () => {
  const [isModalOpen , setIsModalOpen] = useState(false)

  const modalClose = ()=>{setIsModalOpen(false)}
  return (
    <div>
      <Button onClick={()=>{setIsModalOpen(true)}}>Register as a driver</Button>
      <RegistrationForm 
        isModalOpen={isModalOpen}
        modalClose={modalClose}
      />
    </div>
  )
}

export default HomePage