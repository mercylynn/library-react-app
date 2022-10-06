
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Login() {

    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    //Redirect to home page
    function handleSubmit(e) {
        e.preventDefault()
        setFormData({
            email: "",
            password: ""
        })
        return navigate('/')
    }

    return (
        <div>

            <form className='loginForm' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input className='inputform' placeholder='Email' type='text' name='email' value={formData.email} onChange={handleChange} />
                <input className='inputform' placeholder='Password' type='password' name='password' value={formData.password} onChange={handleChange} />
                <button type='submit' value='Log in' className='button'>login </button>
            </form>
        </div>
    )
}

export default Login