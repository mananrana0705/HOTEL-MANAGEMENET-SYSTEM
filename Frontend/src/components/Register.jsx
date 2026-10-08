import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { useState } from 'react'
import API from '../API'   // make sure path is correct

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    // ✅ handle input change
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // ✅ submit form
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await API.post("/Register", user)

            alert("User Registered Successfully")

            // reset form
            setUser({
                username: "",
                email: "",
                password: ""
            })

            // redirect to login
            navigate("/login")

        } catch (error) {
            console.log(error)
            alert("Registration Failed")
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
                    <li><Link to="/Room">Products</Link></li>
                    <li><Link to="/Booking">Booking</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </nav>

            <div className="form-wrapper">
    <div className="form-card">

        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-heading">REGISTER</h2>

            <label className="form-label">Name</label>
            <input
                className="form-input"
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
            />

            <label className="form-label">Email</label>
            <input
                className="form-input"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
            />

            <label className="form-label">Password</label>
            <input
                className="form-input"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
            />

            <button type="submit" className="btn-primary">Register</button>
            <button type="reset" className="btn-secondary">Reset</button>
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

export default Register