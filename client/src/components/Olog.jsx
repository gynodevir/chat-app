import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const Olog = ({login,Setlogin}) => {
 
  const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const regUser=async(event)=>{
          Setlogin(true)
          event.preventDefault()
          const response=await fetch('http://localhost:1337/api/login',{
            method : 'POST',
            headers : {
             'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
             
                email,
                password,
            })
          })
          const data=await response.json()
          if(data.user){
            alert("login sucessfull")
            console.log(data.name)
            navigate("/home")
          }
          else{
            alert("please check the email id and password")
          }
          
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={regUser}>
           
            <input type='email' placeholder='Enter youe email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
            <p onClick={()=>{ navigate('/reg')}}>Want to go reg click</p>
             <button type='submit'>Login</button>
        </form>
        
    </div>
  )
}
