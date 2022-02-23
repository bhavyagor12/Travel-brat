import React from 'react';
import "../Itinerary/Itinerary.css";
import Navbar from "../Navbar/Navbar";
import { Button } from "@material-ui/core";
import ItineraryResults from "../Itinerary/ItineraryResults";
import Image2 from "../../Images/2.jpg";
import Footer from '../../Footer';
function Itinerary() {
    return (
        <div>
        <Navbar/>
        <div className="itinerary">
            <div className="itinerary__banner">
                <div className="itinerary__info">
                <h1>TRAVEL ITINERARY Your helpful guide
                </h1>
                <h2>..........................................</h2>
                <h5>
                Explore with us some locations
                where we help you plan your trip
                </h5>
                </div>
                
            </div>
            <div className="itinerary__content">
            <div className='itineraryPage__info'>
                <h1>Welcome to Travel Brat -- here we will present you info about your favourite location</h1>
                <p>(Excluding Travel Expenses)</p>
                <h1>Itinerary Options</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Number of Days</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Weather information</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <ItineraryResults
                img="https://images.newscientist.com/wp-content/uploads/2019/05/31115907/rexfeatures_10171955a.jpg"
                img1="https://s30876.pcdn.co/wp-content/uploads/New-Zealand.jpg"
                img2="https://ichef.bbci.co.uk/news/976/cpsprodpb/3DAD/production/_116698751_gettyimages-1211184973-1.jpg"
                location="5 Days in New-Zealand"
                title="This is how you should spend 5 days in New-Zealand"
                description="Arrival in Christchurch and Self-Guided Tour	Christchurch
                	Visit Mt. Cook National Park	Mount Cook Village"
                star={4.1}
                price="$250 / Day" 
                total="$1250 total"
            
            />

                <ItineraryResults
                img="https://blog.ipleaders.in/wp-content/uploads/2020/07/Top-Things-to-Do-in-Jammu-and-Kashmir.jpg"
                img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_UKnykqZzZxHwJ0WhVXiVSOmgwz8G6RDkQ&usqp=CAU"
                img2="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/Kashmir_snow_village_pti_1200x768.png?katM3.ZrgzVxxCwAorFUkTYtws5.rR_5&size=770:433"
                location="3/4 Days in Kashmir "
                title="This is how you should spend 3/4 days in Kashmir"
                description="Arrival in Pahalgam
             - Pahalgam
             - Pahalgam-Gulmarg
             - Gulmarg-Sonmarg
             -Sonmarg-
             Srinagar Local Sight seeing"
                star={4.5}
                price="Rs.3000 / Day" 
                total="Rs.12000 total"
            />

                <ItineraryResults
                img="https://i0.wp.com/carmensluxurytravel.com/wp-content/uploads/2019/12/AdobeStock_274717102.jpeg?fit=1024%2C677&ssl=1"
                img1="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Universal_Globe_Singapore.jpg/220px-Universal_Globe_Singapore.jpg"
                img2={Image2}
                location="3 Days in Singapore "
                title="This is how you should spend 3 crucial days in Singapore"
                description="Colonial District, The Quays & Marina Bay.
                 - Orchard Road, Little India, Kampong Glam & Night Safari.
                - Sentosa Island 
                - Singapore Zoo & Botanic Garden.
                 Thiong Bahru."
                star={4.5}
                price="$300 / Day" 
                total="$900 total"
            />


                <ItineraryResults
                img="https://media.istockphoto.com/photos/hindu-temple-in-bali-picture-id653953140?k=6&m=653953140&s=612x612&w=0&h=QetWsAkZJCF7zEXUaJuBl2ydbH69WvrVjTkM7tDE9v0="
                img1="https://cdn.getyourguide.com/img/location/58bfe5141caa9.jpeg/92.jpg"
                img2="https://santorinidave.com/wp-content/uploads/2020/10/bali-beach.jpeg"
                location="3 Days in Bali "
                title="This is how you should spend 3 days in Beautiful Bali"
                description="Day 1 – Arrival and Kuta · Day 2 – Uluwatu and Tanah Lot Temple 
                · Day 3 – Beach day
                · Explore Ubud and the rice fields
                "
                star={4.7}
                price="Rp 300000 / Day" 
                total="Rp 900000 total"
            />

               <ItineraryResults
                img="https://cdn.britannica.com/57/20057-004-404C9F85/Grand-Palace-Bangkok-Thailand.jpg"
                img1="https://www.worldtravelguide.net/wp-content/uploads/2017/04/shu-Thailand-Bangkok-WatPhraKaew-437755027-Travel-Mania-copy.jpg"
                img2="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
                location="A Week in Bangkok/Thailand "
                title="Walk through your week in Bangkok/Thailand"
                description="Day 1 – The Grand Palace · Wat Pho · Wat Arun · Day 2 – Siam Paragon 
                · Day 3 –Jim Thompson House
                · Night Bike Tours
                · Khlong Tours of Thonburi
                · Street Food at Chinatown or Silom Soi 20 and more .....
                "    
                star={5}
                price="฿ 3000 / Day" 
                total="฿ 21000 total"
            /> 

                <ItineraryResults
                img="https://pesweb.azureedge.net/spimg/geographicimages/newyork.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=480&h=480&mode=crop"
                img1="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg"
                img2="https://upload.wikimedia.org/wikipedia/commons/f/f6/Hudson_Yards_Plaza_March_2019_53.jpg"
                location="4 Days in New York"
                title="Magnificient 4 days in New York"
                description=" Lower Manhattan: Statue of Liberty, Financial District, Brooklyn Bridge
                 Lower Manhattan to Mid Town: Soho, Chinatown, LES, West Village, Empire State Building, Herald Square
                 
                "    
                star={5}
                price="$239 per day" 
                total="$956 / total"
            /> 

                <ItineraryResults
                img="https://static.toiimg.com/thumb/msid-51892205,width-748,height-499,resizemode=4,imgsize-266613/.jpg"
                img1="https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/Goa_Bars_Feature_Image.jpg"
                img2="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/overview/headmast-mobile/beach-experience.png"
                location="3 days in Goa"
                title="Goa adventure in 3 days"
                description=" Baga Beach · Fort Aguada
                ·Reis Magos Fort
                ·Deltin Royale
                ·Basilica of Bom Jesus
                ·Houses of Goa Museum
                "    
                star={5}
                price="Rs.2500 per day" 
                total="Rs.7500 / total"
            /> 
            </div>

            
        </div>
        <Footer/>
        </div>
    )
}

export default Itinerary
