import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieCarousel from './components/Carousel';
import Container from './components/parallax';
import Cookies from './Images/cookies.jpeg';
import TreatBox from './components/hoverBox';
import Tarts from './Images/tarts.jpeg';
import Brownies from './Images/brownies.jpeg';
import Carousel from './components/Blogcarousel';


function App() {
  return (
    
    <div className="App">
      <header>
      <h1>CC's Cookies and Sweets</h1>
      </header>
      
      <CookieCarousel/>
      <div className="NavBar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Account</a></li>
      </ul>
      </div>
      <div className="Logo">
        <p>Logo Placeholder</p>
        <button>Click here to get started!</button>
      </div>
      <Container/>
      
      <div className='categories'>
      <TreatBox Img={Cookies} content='Browse Cookies'/>
      <TreatBox Img={Tarts} content='Browse Tarts' />
      <TreatBox Img={Brownies} content='Browse Brownies' />
      </div>

      <div className='headliner'>
        <h2>Find your Flavor</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, itaque.</p>
      </div>
      <div className="subscription">
        <h3>Subscribe for deals and alerts!</h3>  <input/> <button>Subscribe</button>
      </div>
      <div className="social">
      <div className="Blog-area">
        <div className="recent">
        <h3>Recent Additions</h3>
        <Carousel/>
        </div>
        <div className="popular">
          <h3>Most Popular</h3>
          <TreatBox Img={Cookies} content='Chocolate Chip Cookies' />
          <TreatBox Img={Tarts} content='Apple Tarts' />
          <TreatBox Img={Brownies} content='Choclate Brownies' />
          <TreatBox Img={Cookies} content='Chocolate Chip Cookies' />
          <TreatBox Img={Tarts} content='Apple Tarts' />
          <TreatBox Img={Brownies} content='Choclate Brownies' />
        </div>
      </div>
      <div className="feed">
        <div className="review">
          <p>Some Person</p>
        <div class="talk-bubble tri-right left-in">
          <div class="talkclass">
            <p>Lorem ipsum sporidium cryptosporidium what is gonna go here who knows what is going on</p>
          </div>
        </div>
        </div>
      </div>
      </div>

      <div className="footer">

      </div>
      

    </div>
  );
}

export default App;




//pics of baked goods
//order options
//about me
//menu
//homepage
//cover images of bakery stuff
//contact us
//My account/Login
//Shipping details
//shopping cart


