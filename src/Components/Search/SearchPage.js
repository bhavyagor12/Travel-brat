import React, { Fragment } from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import Navbar from '../Navbar/Navbar';
import SearchResult from "./SearchResults";
import Footer from '../../Footer';

function SearchPage() {
    return (
        <Fragment>

        <Navbar />

        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>This is our some stay recommendations at different locations</h1>
                <h2>Hotels/Restaurants/Stays to explore</h2>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://digital.ihg.com/is/image/ihg/holiday-inn-new-york-4204280071-2x1"
                location="New York"
                title="Stay at NYC-Times Square"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="From 96.60 USD / night"
                total="$450"
            />

            <SearchResult
                img="https://pix10.agoda.net/hotelImages/10673/0/d047670a65824749301de303b4e8026f.jpg?s=1024x768"
                location="Bali"
                title="Tijili Benoa "
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="Rp 30000 / night"
                total="Rs 4945"
            />

            <SearchResult
                img="https://pix10.agoda.net/hotelImages/478581/-1/b56f4a1b9cf8bdba497306b69b9612aa.jpg"
                location="New Zealand"
                title="Rainforest Retreat"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="Rs 1840 / night"
                total="Rs. 3600"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpsn22f3Xk2MZ0q3cnPZQU4xGpQIzvG1iug&usqp=CAU"
                location="Bangkok/Thailand"
                title="Millenium Hilton Bangkok Located on the banks of the Chao Phraya River"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="Rs 2013 / night"
                total="Rs 4096 "
            />
            <SearchResult
                img="https://media-cdn.tripadvisor.com/media/photo-s/0f/7c/05/97/deluxe-suite.jpg"
                location="Kashmir"
                title="Hotel Heevan  Pahalgam"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="Rs2500 / night"
                total="Rs 11000"
            />
            <SearchResult
                img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F03%2F24%2Fpriyanka-chopra-restaurant-food-FT-BLOG0321.jpg"
                location="NYC"
                title="Sona "
                description="Restaurant"
                star={4.23}
                price="$76 per dish"
                total="$560"
            />
            <SearchResult
                img="https://www.meghanlaurie.com/wp-content/uploads/2020/10/001-bali-restaurants.jpg"
                location="Bali"
                title="Gooseberry Restaurant"
                description="Gg. Pirta, Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali 80361, Indonesia"
                star={3.85}
                price="Rp30000 per dish"
                total="Rp200000 total"
            />
               <SearchResult
                img="https://b.zmtcdn.com/data/pictures/4/7003224/faea205ef6c5cb3657ac32a18c52abc1.jpg"
                location="
                New Zealand
                "
                title="KAZUYA restaurant"
                description="193 Symonds Street, Eden Terrace, Auckland 1010, New Zealand"
                star={4.85}
                price="$300 per dish"
                total="$3000 total"
            />
            <SearchResult
                img="https://media-cdn.tripadvisor.com/media/photo-s/17/3f/60/ee/raja-dhaba.jpg"
                location="
                Kashmir
                "
                title="Raja Dhaba"
                description="Gulamarg"
                star={4.5}
                price="Rs.500 per dish"
                total="Rs.4500 total"
            />
            </div>

            <Footer />

            </Fragment>
            )
}

export default SearchPage

