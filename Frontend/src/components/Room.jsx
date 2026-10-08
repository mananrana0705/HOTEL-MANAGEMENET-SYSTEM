import { Link, useNavigate } from 'react-router-dom'
import './Room.css'

import Room1 from '../assets/Room1.jpg'
import Room2 from '../assets/Room2.jpg'
import Room3 from '../assets/Room3.jpg'
import Room4 from '../assets/Room4.jpg'
import Sroom1 from '../assets/Sroom1.jpg'
import Sroom2 from '../assets/Sroom2.jpg'
import Sroom3 from '../assets/Sroom3.jpg'
import Sroom4 from '../assets/Sroom4.jpg'

const Room = () => {

    const navigate = useNavigate();

    const rooms = [
        { img: Room1, price: "₹10,000", type: "Suite" },
        { img: Room2, price: "₹10,000", type: "Suite" },
        { img: Room3, price: "₹10,000", type: "Suite" },
        { img: Room4, price: "₹10,000", type: "Suite" },
        { img: Sroom1, price: "₹8,000", type: "Deluxe" },
        { img: Sroom2, price: "₹8,000", type: "Deluxe" },
        { img: Sroom3, price: "₹8,000", type: "Deluxe" },
        { img: Sroom4, price: "₹8,000", type: "Deluxe" },
    ];

    return (
        <>
        <div>

            {/* NAVBAR */}
            <nav>
                <div className="head">
                    <h1>LUXURY STAY</h1>
                </div>

                <ul className='links'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Room'>Rooms</Link></li>
                    <li><Link to='/Booking'>Booking</Link></li>
                    <li><Link to='/Login'>Login</Link></li>
                </ul>
            </nav>

            {/* BODY */}
            <div className='body1'>

                <h1 className='headhome'>WE PROVIDE BEST ROOMS</h1>

                <div className='room-grid'>
                    {rooms.map((room, index) => (
                        <div className='room-card' key={index}>
                            <img src={room.img} alt="" />

                            <div className='room-info'>
                                <p><strong>Price:</strong> {room.price} / day</p>
                                <p><strong>Capacity:</strong> 2 Person</p>
                                <p><strong>Type:</strong> {room.type}</p>

                                <button 
                                    onClick={() => navigate('/Booking')}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* FOOTER */}
            <footer>
                <h4>© 2026 Luxury Stay | All Rights Reserved</h4>
            </footer>

        </div>
        </>
    )
}

export default Room