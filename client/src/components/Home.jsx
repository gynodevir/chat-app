import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logout } from './Logout'
export const Home = ({login,Setlogin}) => {
 
  return (
    <>
    <div>Dashboard</div>
    <Logout login={login} Setlogin={Setlogin}/>
    </>
  )
}
