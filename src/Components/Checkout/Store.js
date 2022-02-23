import React from 'react'
import { useStateValue } from '../Functions/StateProvider';
import "./Store.css";
function Store({id,title,image,price,rating}) {


    const [{}, dispatch] = useStateValue();
    const addToBasket =() => {
        dispatch({
          type:'ADD_TO_BASKET',
          item:{
              id:id,
              title:title,
              image:image,
              price:price,
              rating:rating,
          },
        });
    };
    return (
        <div className="store">
            <div className="store__info">
            <p>{title}</p>
            <p className="store__price">
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
            
            <div className="store__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            </div>


            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
         
    )
        
}

export default Store
