import React from 'react'
import { useStateValue } from '../Functions/StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from  "./Subtotal";
import Navbar from "../Navbar/Navbar"
import Footer from '../../Footer';

function Checkout() {
    const [{basket}]= useStateValue();
    return (
        <div>
            <Navbar/>
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad"
            src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg" 
            alt="ad" />
        
        {basket?.length===0 ? (
            <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>You have no items in your basket.
            To buy one or more items click on 
                "Add to Basket " next to the item</p>
            </div>

        ):(
            <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
             {basket?.map(item =>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              
              />
            ))}
 
            </div>
        )}
            </div>
            {basket.length>0 &&(
                <div className="checkout__right">
                    <h2>SUBTOTAL</h2>
                    <Subtotal />
                </div>

            )}
        </div>
        <Footer/>
        </div>
        );
    
}

export default Checkout
