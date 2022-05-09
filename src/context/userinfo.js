import React from 'react'
import {useAuth} from './authContext'

export default function Userinfo() {
    const {user}=useAuth();
  return (
    <div>
        <h1>
        {user && user.email}
        </h1>
    </div>
  )
}
