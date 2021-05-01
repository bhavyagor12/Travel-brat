import React, { Fragment } from 'react';
import '../../App.css';
import Navbar from '../Navbar'
import Banner from './Banner';

function Home() {
  return (
    <Fragment>
      <Navbar />
      
      <Banner/>
      <h1>Type of places</h1>
      <h1>Feed</h1>
      <h1>Recommendations</h1>
      <h1>Maps</h1>
      
      
    </Fragment>
  );
}

export default Home;