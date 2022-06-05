import './Register.css'

import { Navbar } from '../../component/Navbar/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const details = {
        "username": username,
        "password": password,
        "email": email
    }

    async function registerUser(event) {
        event.preventDefault();

        const response = await axios.post("https://user-authenticate-app-backend.herokuapp.com/user/register", details)

        const data = response.data;
        // console.log(data)

        if (data.status === 'ok') {
            alert("Registration Successfull please login now")
            window.location.href = '/login';
        }
        else {
            alert(`${data.error}`)
        }
    }

    return (
        <>
            {<Navbar />}
            <div id="registration__parent">
                <div className="registration">
                    <form onSubmit={registerUser} >
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Name" className='input__field' />
                        <br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className='input__field' />
                        <br />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className='input__field' />
                        <br />
                        <input type="submit" value="Register" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;