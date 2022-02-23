import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Products from './Components/Checkout/Products';
import SignUp from './Components/SignUp/SignUp';
import SearchPage from './Components/Search/SearchPage';
import Itinerary from './Components/Itinerary/Itinerary';
import BookingPage from './Components/BookingPage/BookingPage';
function App() {
  return (
    
    

    <>   
      <Router>
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/products' component={Products} />
          <Route path='/search' component={SearchPage} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/signup' component={SignUp} />
          <Route path='/bookingPage' component={BookingPage}/>
          <Route path='/itinerary' component={Itinerary}/>
        </Switch>
        
              </Router>
    </>
  );
}

export default App;