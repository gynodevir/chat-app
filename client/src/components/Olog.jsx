import React,{useState} from 'react'

export const Olog = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const regUser=async(event)=>{
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
          console.log(data)
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={regUser}>
           
            <input type='email' placeholder='Enter youe email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
             <button type='submit'>Login</button>
        </form>
    </div>
  )
}
