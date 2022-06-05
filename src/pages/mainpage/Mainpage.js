import './Mainpage.css'

import { useEffect } from 'react'

export const Mainpage = () => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = JSON.parse(window.atob(token.split('.')[1]));
            // console.log(user)
            if (!user) {
                localStorage.removeItem('token')
                window.location.href = '/login'
            }
        }

    }, [])
    return (
        <>
            <div className="main__section">
                <button className='main__btns' onClick={() => window.location.href = '/dashboard'} >Dashboard</button>
                <button className='main__btns' onClick={() => window.location.href = "/kyc"} >KYC</button>
            </div>
        </>
    )
}