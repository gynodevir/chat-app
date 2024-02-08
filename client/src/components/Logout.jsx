import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Logout = ({login,Setlogin}) => {
    const naigate=useNavigate()
  const solve=async()=>{
   try{
    const response = await fetch('http://localhost:1337/api/home', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();

            if (response.ok) {
                Setlogin(false);
                console.log(data);
                naigate("/")
            } else {
                console.error('Logout failed:', data.error);
            }
        } 

   
   catch (error) {
    console.error('Error during logout:', error);
}
   

  }
  return (
    <button onClick={solve}>Logout</button>
  )
}
