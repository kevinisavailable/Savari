import React from 'react'
import { useUserStore } from '../../state/user'

const Profile = () => {
  const {userStore} = useUserStore()
  return (
    <div>{userStore.$id}</div>
  )
}

export default Profile