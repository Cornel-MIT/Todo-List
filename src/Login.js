import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/toDo')
    }
  return (
<div className='containe' style={{ marginTop: '10vh' }}>
            <form >
                <h2>Login to your account</h2>
                <div>
                    <label htmlFor='email' >Email address :</label>
                    <input onChange={e => { setEmail(e.target.value) }} type='email' id='email' />
                </div>
                <div >
                    <label htmlFor='password' >Password :</label>
                    <input onChange={e => { setPassword(e.target.value) }} type='password' id='password' />
                </div>
                <button onClick={handleLogin} >LOG IN</button>
            </form>
        </div>
  )
}
