import React from 'react';
// import logo from './logo.svg';
import my from './my.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
   
        <header>
        
          <div className="fn">
              <ul class= "logoo">
                   <li> <a href = "#" > book </a> </li>
                   < img className="ik" src={my} height="20px" width="20px" ></img>
                   <li> <a href = "#" > show </a> </li>
              </ul> 
            
        

              <nav className="Firstnav">
                  <ul className="nav_links" >
                       <li> <a href = "#" > Mumbai </a></li>
                       <li> <a href = "#" > English </a></li>
                  </ul>
              </nav>

              <a href="#" > <button> Sign In </button> </a>
          </div>
           
        
           <div className="sn">
            
              <ul className="nav_links1">
                <li> <a href="#" > Movies </a> </li>
                <li> <a href="#" > Event</a> </li>
                <li> <a href="#" > Plays</a> </li>
                <li> <a href="#" > Sports</a> </li>
                <li> <a href="#" > Activities</a> </li>
                <li> <a href="#" > Monuments</a> </li>
                <li> <a href="#" > Fanhood</a> </li>
                <li> <a href="#" > Buzz</a> </li>
              </ul>

              <ul className="nav_links1">
                 <li> <a href="#" > ListYourShow</a> </li>
                 <li> <a href="#" > Corporates</a> </li>
                 <li> <a href="#" > Offers</a> </li>
                 <li> <a href="#" > Gift Cards</a> </li>
              </ul>
            
            </div>
        
        </header>

        <div>
            
        </div>

    </div>
  );
}

export default App;
