import React from 'react'
import "./BookingPage.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../../Footer"
import Fade from 'react-reveal/Fade';

function BookingPage({
    img,
    img1,
    img2,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div>
            <Navbar />
        <div className="bookingPage">
        <div className="bookingPage__banner">
                
                <div className="bookingPage__info">
                
                <h1>Booking Page for your Favourite Location
                </h1>
                <h2>..........................................</h2>
                <h5>
                Explore with us some locations
                where we help you plan your trip
                </h5>
                </div>
               
               
                
            </div>
            <div className="bookingPage__content">
            <div className='bookingPage1__info'>
                
                <h1>Welcome to Travel Brat -- here we will help you book your trip</h1>
                <Fade left> <img  className = "bookingPage__image" src="https://cdn4.iconfinder.com/data/icons/colicon/24/checkmark_done_complete-512.png" alt=""/></Fade>
                <Fade right> <h2>Your booking has been confirmed</h2></Fade>
               

               
            </div>
            
            
            
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default BookingPage
