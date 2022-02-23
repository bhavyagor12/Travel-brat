import React from 'react';
import '../../App.css';
import Navbar from '../Navbar/Navbar'
import Store from './Store'
import "./Products.css"; 
import Footer from "../../Footer"
function Products() {

    
    return (
              <div>
                  <Navbar/>
                  <img className="products__image" src="https://www.smartertravel.com/wp-content/uploads/2020/03/nice-scaled.jpg" alt=""/>
              <div className="products__row"> 
            
              <Store
               id="12346"
               title="Duckback Rubberized Cotton Travel Pillow (Grey)"
               price={234}
               rating={3}
               image="https://m.media-amazon.com/images/I/61tgQVmTQDL._AC_UL320_.jpg" />


               <Store
               id="12346"
               title="Shoeshine Black & Beige Fabric Shoe Bag (Set of 12 Bags)"
               price={450 }
               rating={3}
               image="https://m.media-amazon.com/images/I/41hElnChvTL._AC_UL320_.jpg" />

                <Store
               id="12346"
               title="Trajectory 3 in 1 Travel Accessories Combo:"
               price={1200 }
               rating={3}
               image="https://m.media-amazon.com/images/I/71iUEiqc-sL._AC_UL320_.jpg" />
              
              </div>
              <div className="products__row"> 
              <Store
               id="12346"
               title="Travel Backpack"
               price={2997}
               rating={5}
               image="https://m.media-amazon.com/images/I/61GYrHDb6GS._AC_UL320_.jpg" />
                  <Store
               id="12346"
               title="Travel Passport Holder Wallet Case"
               price={2499}
               rating={4}
               image="https://m.media-amazon.com/images/I/81F2HF8VsGL._AC_UL320_.jpg" />
                 <Store
               id="12346"
               title="Portable Electronic Travel Gadgets & Accessories Organizer"
               price={1599}
               rating={4}
               image="https://m.media-amazon.com/images/I/71Sk7ltFiRL._AC_UL320_.jpg" />
                
               </div>
               
               
               <div className="products__row"> 
              <Store
               id="12346"
               title="InstaCuppa Stainless Steel Travel Mug"
               price={1199}
               rating={4}
               image="https://m.media-amazon.com/images/I/61thLuWqzAL._AC_UL320_.jpg" />
                  <Store
               id="12346"
               title="Trekking Bagpack"
               price={2500}
               rating={5}
               image="https://m.media-amazon.com/images/I/71GxZAYa6UL._AC_UL320_.jpg" />
               </div>
               <div className="products__row"> 
              <Store
               id="12346"
               title="Firstfly KEYSTREET Camera Lens "
               price={999}
               rating={3}
               image="https://m.media-amazon.com/images/I/71+9SFRW8NL._AC_UL320_.jpg" />
                  <Store
               id="12346"
               title="AREO (Grey) Travel Electronic Accessories Organizer Bag Case"
               price={799}
               rating={5}
               image="https://m.media-amazon.com/images/I/61dxuKnD61S._AC_UL320_.jpg" />
                <Store
               id="12346"
               title="Travel Jacket For colder locations"
               price={6999}
               rating={5}
               image="https://m.media-amazon.com/images/I/71D9Enojq9L._AC_UL320_.jpg" />
               </div>
               <Footer/>
          </div>
         
         
    )
}

export default Products
