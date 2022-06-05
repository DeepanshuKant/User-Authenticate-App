import './Navbar.css'
export const Navbar = () => {


    return (
        <>
            <div id="navbar__parent">
                <div className="navbar">
                    <button className='nav__button' onClick={() => window.location.href = '/register'} >
                        Register
                    </button>
                    <button className="nav__button" onClick={() => window.location.href = '/login'} >
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}
