import React from 'react'
import "./ItineraryResults.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import {Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";
function ItineraryResults({
    img,
    img1,
    img2,
    location,
    title,
    description,
    star,
    price,
    total,
    button,
   
})

{
    
const history = useHistory(); 


    return (
        <div className='itineraryResult'>
            
            <img src={img} alt="" />
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
            <FavoriteBorderIcon className="itineraryResult__heart" />

            <div className='itineraryResult__info'>
                <div className="itineraryResult__infoTop">
                    <h2>{location}</h2>
                    <h4>{title}</h4>
                    <p>____________</p>
                    <p className="itineraryResult__infoP">{description}</p>
                   
                </div>
                
                <div className="itineraryResult__infoBottom">
                    <div className="itineraryResult__stars">
                        <StarIcon className="itineraryResult__star" />
                        <p>
                            <strong>{star}</strong>
        
                        </p>
                    </div>
                    
            
                    <div className='itineraryResults__price'>   
                        <h2>{price}</h2>
                        
                        <p>{total}</p>
                    
                    </div>
                </div>
                <div className="itinerary__button"><Button onClick={()=>history.push('/bookingPage')}>Book</Button></div>
            </div>
        </div>
    )
}

export default ItineraryResults
