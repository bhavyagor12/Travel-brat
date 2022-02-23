import React from 'react';
import './Card.css'
import { useHistory } from "react-router-dom";
import Fade from 'react-reveal/Fade';
function Card({ src, title, description}) {
    const history = useHistory();
    return (
        <div className='card'>
            <img src={src} alt="" />
            <Fade Right>
            <div className='card__info'>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <button onClick={()=>history.push('/itinerary')}>Itinerary</button>
            </div>
            </Fade>
            
        </div>
    )
}

export default Card
