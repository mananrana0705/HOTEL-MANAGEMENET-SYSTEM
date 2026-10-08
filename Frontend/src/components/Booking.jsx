import { Link, useNavigate } from 'react-router-dom'
import './Booking.css'
import { useState } from 'react'
import API from '../API'

const Booking = () => {

    const navigate = useNavigate()

    const [booking, setBooking] = useState({
        name: "",
        email: "",
        roomType: "",
        checkInDate: "",
        checkOutDate: "",
        guests: ""
    })

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value ?? ""
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await API.post("/booking", booking) // ✅ lowercase

            console.log(res.data)

            alert("Booking Successful ✅")

            // ✅ FIX RESET
            setBooking({
                name: "",
                email: "",
                roomType: "",
                checkInDate: "",
                checkOutDate: "",
                guests: ""
            })

            navigate("/")

        } catch (error) {
            console.error(error)
            alert("Booking Failed ❌")
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

            <div className='body4'>
                <div className='Loginback'>
                    <form className='Form1' onSubmit={handleSubmit}>
                        <div className='login'>

                            <h2>BOOK ROOM</h2>

                            <label>FULL NAME</label>
                            <input
                                type="text"
                                name="name"
                                value={booking.name || ""}
                                onChange={handleChange}
                                required
                            />

                            <label>EMAIL</label>
                            <input
                                type="email"
                                name="email"
                                value={booking.email || ""}
                                onChange={handleChange}
                                required
                            />

                            <label>ROOM TYPE</label>
                            <select
                                name="roomType"
                                value={booking.roomType || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Room</option>
                                <option value="Single">Single</option>
                                <option value="Double">Deluxe</option>
                                <option value="Deluxe">Suite</option>
                            </select>

                            {/* ✅ FIXED FIELD NAMES */}
                            <label>CHECK-IN</label>
                            <input
                                type="date"
                                name="checkInDate"
                                value={booking.checkInDate || ""}
                                onChange={handleChange}
                                required
                            />

                            <label>CHECK-OUT</label>
                            <input
                                type="date"
                                name="checkOutDate"
                                value={booking.checkOutDate || ""}
                                onChange={handleChange}
                                required
                            />

                            <label>GUESTS</label>
                            <input
                                type="number"
                                name="guests"
                                value={booking.guests || ""}
                                onChange={handleChange}
                                required
                            />

                            <button type="submit" className='Sub1'>BOOK NOW</button>

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

export default Booking