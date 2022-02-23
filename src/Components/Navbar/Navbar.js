// eslint-disable-next-line 

import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.jpg';
import {useStateValue} from "../Functions/StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import './Navbar.css';
import {auth} from "../Functions/firebase";

function Navbar() {

    const [{basket,user} ] = useStateValue();
  
    const login =() =>{
      if(user){
        auth.signOut();
      }
    }
 
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
     
    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

   useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    
    

    return(
        <Fragment>
        <div className= "navbar">
            <div className="navbar-container">
                
                <div className="navbar__left">
                <Link to="/home" className="navbar-travelBrat" onClick={closeMobileMenu}>
                TravelBrat <img className="navbar-travelBrat-logo" src={Logo} alt="travel-brat"/>         
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                </div>
            
            </div>
            <div className="navbar__right">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                        Explore Locations
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/checkout' className='nav-links' onClick={closeMobileMenu}>
                    <div className="header__optionBasket">
                    Cart <ShoppingBasketIcon/>
                    <span className="header__optionlineTwo" className="header__basketCount">{basket?.length}</span>
                    </div>
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to={!user && "/signup"} className='nav-links'  onClick={closeMobileMenu}>
                    <div onClick={login} className="header__option">
                    Sign in/Sign Up
                 </div>
                    </Link>
                </li>


            </ul>
            </div>
            
        </div>
        </Fragment>
    );
}

export default Navbar;
