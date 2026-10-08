import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
import API from '../API'

const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    // handle input
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // submit login
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await API.post("/Login", user)

            alert("Login Successful ✅")

            console.log(res.data)

            // OPTIONAL: store token/user
            localStorage.setItem("user", JSON.stringify(res.data))

            navigate("/") // redirect to home

        } catch (error) {
            console.error(error.response?.data || error.message)
            alert(error.response?.data?.message || "Invalid Credentials ❌")
        }
    }

    return (
        <>
        <div>
            <nav>
                <div className="head">
                    <h1>LUXURY STAY</h1>
                </div>

                <ul className='links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Room">Rooms</Link></li>
                    <li><Link to="/Booking">Booking</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </nav>

            <div className='login-page'>
                <div className='login-card'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div className='login-box'>

                            <h2 className='login-title'>LOGIN</h2>

                            <label className='login-label'>EMAIL</label>
                            <input
                                className='login-input'
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />

                            <label className='login-label'>PASSWORD</label>
                            <input
                                className='login-input'
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                required
                            />

                            <button type='submit' className='login-btn'>
                                LOGIN
                            </button>

                            <button
                                type='button'
                                className='reset-btn'
                                onClick={() => setUser({ email: "", password: "" })}
                            >
                                RESET
                            </button>

                            <p className='login-text'>Don't have an account?</p>
                            <Link to="/Register" className='register-link'>REGISTER</Link>

                        </div>
                    </form>
                </div>
            </div>

            <footer>
                <h4>© 2026 Luxury Stay | All Rights Reserved</h4>
            </footer>
        </div>
        </>
    )
}

export default Login