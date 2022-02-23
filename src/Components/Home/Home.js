import React, { Fragment } from 'react';
import '../../App.css';
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Footer from '../../Footer'
import "./Home.css";
function Home() {
  return (
    <Fragment>
      <Navbar />
      
      <Banner/>
      <div className='home__card'>
      <div className='home__title'><h2>Explore according to choice:</h2></div>
      <div className='home__section'>
      
        <Card
          src="https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_full/mountains-hero.jpg?1345838509"
          title="Mountains"
          description="Explore the epic Mountains and their grandeur."
         
        />
        <Card
          src="http://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/beaches/pagePropertiesImage/samui-beaches.jpg.jpg"
          title="Beaches"
          description="Visit the beautiful beaches across the world."
         
        />
        <Card
          src="https://www.skydivecsc.com/hubfs/solo-skydiving-license-requirements.jpg"
          title="Adventure"
          description="The most thrilling and exciting places to explore."
          
        />
      
      </div>
      </div>
      <div className='home__card'>
      <div className='home__title'><h2>You may wanna try:</h2></div>
      <div className='home__section'>
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTP27BWXENTKoT7cBQVIaYLGClDP65l9lKtw&usqp=CAU"
          title="Cities"
          description="Holidays in the most scintillating and prolific cities on the globe."
        />
        <Card
          src="https://webunwto.s3.eu-west-1.amazonaws.com/styles/article_main_image/s3/2019-08/cultura.jpg?itok=-FR7bIae"
          title="Culture"
          description="Explore the places filled with cultural galore."
        />
        <Card
          src="https://www.travelanddestinations.com/wp-content/uploads/2020/05/Quiz-Landmarks.jpg"
          title="Attractions."
          description="Places worth a visit."
        />
        </div>
      </div>
      <div className='home__card'>
      <div className='home__title'><h2>Trending Locations:</h2></div>
      <div className='home__section'>
        <Card
          src="https://cdn.britannica.com/25/180825-050-B4693350/Wellington-Harbour-New-Zealand.jpg"
          title="New-Zealand"
          description="Explore this beauty"
        />
        <Card
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg"
          title="New York"
          description="Explore this beauty"
        />
        <Card
          src="https://static.toiimg.com/photo/81849918/kashmir-valley.jpg?width=748&resize=4"
          title="Kashmir"
          description="Heaven on Earth"
        />
         <Card
          src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg?fit=scale-down&source=next&width=700"
          title="Goa"
          description="Go crazy and party in Goa"
        />
        </div>
      </div>
      <div className='home__card'>
      <div className='home__title'><h2>Evergreen Locations:</h2></div>
      <div className='home__section'>
        <Card
          src="https://deih43ym53wif.cloudfront.net/bali-indonesia-shutterstock_459773704_0dd494ecf7.jpeg"
          title="Bali"
          description="What a place worth every penny!"
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Deif2Rh79eMWIi20Lq_sB1bqDcXix_yS8g&usqp=CAU"
          title="Bangkok/Thailand"
          description="Magnificient place!"
        />
        <Card
          src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          title="Singapore"
          description="Could any place be better?"
        />
    
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default Home;