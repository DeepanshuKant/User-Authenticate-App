import './Login.css'

import { Navbar } from '../../component/Navbar/Navbar'
import { useState } from 'react'
import axios from 'axios'
// import jwt from 'jsonwebtoken'


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const details = {
        "username": username,
        "password": password,
    }

    async function loginUser(event) {
        event.preventDefault();

        const response = await axios.post("https://user-authenticate-app-backend.herokuapp.com/user/login", details)

        const data = response.data;
        // console.log(data)

        if (data.user) {
            localStorage.setItem("token", data.user)
            alert("Login Successfull")
            window.location.href = '/mainpage'
        }
        else {
            alert('Please check your username and password')
        }
    }

    return (
        <>
            {<Navbar />}
            <div id="login__parent">
                <div className="login">
                    <form onSubmit={loginUser} >
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Name" className='input__field' />
                        <br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className='input__field' />
                        <br />
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login