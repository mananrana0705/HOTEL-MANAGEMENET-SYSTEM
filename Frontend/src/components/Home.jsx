import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
import Room1 from '../assets/Room1.jpg'
import Room2 from '../assets/Room2.jpg'
import Room3 from '../assets/Room3.jpg'

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
        <div>

            {/* NAVBAR */}
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

            {/* HERO SECTION */}
            <div className='body3'>
                <div className='hero-text'>
                    <h1>WE PROVIDE BEST ROOMS</h1>
                    <h2>Luxury & Comfort at One Place</h2>
                    <button onClick={() => navigate("/About")}>
                        ABOUT US
                    </button>
                </div>
            </div>

            {/* ROOMS SECTION */}
            <div className="rooms-section">
                <h2>OUR ROOMS</h2>

                <div className="room-cards">

                    <div className="card">
                        <img src={Room1} alt="room" />
                        <h3>Single Room</h3>
                        <p>Perfect for solo travelers</p>
                    </div>

                    <div className="card">
                        <img src={Room2} alt="room" />
                        <h3>Deluxe</h3>
                        <p>Comfort for couples</p>
                    </div>

                    <div className="card">
                        <img src={Room3} alt="room" />
                        <h3>Suite</h3>
                        <p>Luxury experience</p>
                    </div>

                </div>
            </div>

            {/* SERVICES */}
            <div className="services">
                <h2>WHY CHOOSE US</h2>

                <div className="service-box">
                    <div>🏨 Premium Rooms</div>
                    <div>🍽️ Free Breakfast</div>
                    <div>📶 Free WiFi</div>
                    <div>🚗 Parking</div>
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

export default Home