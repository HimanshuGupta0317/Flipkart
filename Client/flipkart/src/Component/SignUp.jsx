import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Signup.css'


const SignUp = () => {

    let [input, SetInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    function fun1(e) {
        let { name, value } = e.target
        SetInput({ ...input, [name]: value })
        console.log(input);

    }
    async function done(e) {
        e.preventDefault();
        console.log('chal rha');
        let res  = await axios.post('http://localhost:5000/api/users',input)
        console.log(res);

    }

    return (
        <div class="form-box">
            <form className="form" action='' onSubmit={done}>
                <span className="title">Sign up</span>
                <span className="subtitle">Create a free account with your email.</span>
                <div class="form-container">
                    <input type="text" name='name' className="input"  placeholder="Name" onChange={fun1} value={input.name}/>
                    <input type="email" name='email' className="input" placeholder="Email" onChange={fun1} value={input.email}/>
                    <input type="password" name='password' className="input" placeholder="Password" onChange={fun1} value={input.password}/>
                </div>
                <button type='submit' >Sign up</button>
            </form>
            <div className="form-section">
                <p>Have an account? <a href="/Login">Log in</a> </p>
            </div>
        </div>
    )
}

export default SignUp