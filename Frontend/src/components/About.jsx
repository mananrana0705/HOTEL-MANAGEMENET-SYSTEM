import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import './About.css'

const About = () => {
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
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Room'>Rooms</Link></li>
                    <li><Link to='/Booking'>Booking</Link></li>
                    <li><Link to='/Login'>Login</Link></li>
                </ul>
            </nav>

            {/* ABOUT CONTENT */}
            <div className='body2'>

                <h1 className='headaboutus'>ABOUT US</h1>

                {/* SECTION 1 */}
                <div className='divabout'>
                    <h2>🏠 Welcome to Luxury Stay</h2>
                    <p>
                        At Luxury Stay, we believe every journey deserves a perfect stay.
                        Our mission is to connect travelers with comfortable, reliable,
                        and high-quality hotels that feel like home.
                    </p>
                    <p>
                        We partner with premium hotels across Himachal to ensure
                        top-level comfort, cleanliness, and service.
                    </p>
                </div>

                <hr />

                {/* SECTION 2 */}
                <div className='divabout'>
                    <h2>🌍 Who We Are</h2>
                    <p>
                        Luxury Stay is a modern hotel booking platform designed to make
                        your travel experience smooth and stress-free.
                    </p>
                    <p>
                        Whether you're traveling for business or leisure, we help you
                        find the perfect stay every time.
                    </p>
                </div>

                <hr />

                {/* SECTION 3 */}
                <div className='divabout'>
                    <h2>🏨 Our Hotels</h2>
                    <ul className='ulabout'>
                        <li>Spacious & well-designed rooms</li>
                        <li>Modern facilities</li>
                        <li>Comfortable interiors</li>
                        <li>High-speed WiFi</li>
                        <li>24/7 support</li>
                    </ul>
                </div>

                <hr />

                {/* SECTION 4 */}
                <div className='divabout'>
                    <h2>✨ Quality & Cleanliness</h2>
                    <ul className='ulabout'>
                        <li>Daily housekeeping</li>
                        <li>Sanitized rooms</li>
                        <li>Fresh linens</li>
                        <li>Regular inspections</li>
                    </ul>
                </div>

                <hr />

                {/* SECTION 5 */}
                <div className='divabout'>
                    <h2>🍽️ Food & Dining</h2>
                    <ul className='ulabout'>
                        <li>Multi-cuisine meals</li>
                        <li>Fresh ingredients</li>
                        <li>Room service</li>
                        <li>Hygienic kitchens</li>
                    </ul>
                </div>

                <hr />

                {/* SECTION 6 */}
                <div className='divabout'>
                    <h2>💼 Why Choose Us</h2>
                    <ul className='ulabout'>
                        <li>Verified hotels</li>
                        <li>Easy booking</li>
                        <li>Affordable pricing</li>
                        <li>Great support</li>
                    </ul>
                </div>

                <hr />

                {/* SECTION 7 */}
                <div className='divabout'>
                    <h2>🚀 Our Vision</h2>
                    <p>
                        To become a trusted global hotel booking platform and deliver
                        exceptional experiences to every traveler.
                    </p>
                </div>

                <hr />

                {/* CTA */}
                <div className='divabout'>
                    <h2>❤️ Join Us</h2>
                    <p>
                        Book with us and experience comfort like never before.
                    </p>

                    <button 
                        className='buttonbook'
                        onClick={() => navigate('/Booking')}
                    >
                        BOOK NOW
                    </button>
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

export default About