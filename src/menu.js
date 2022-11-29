import Footer from './footer';
import icon from './esp1.png'

import icon2 from './bell3.png'
import icon3 from './app4.png'
import icon4 from './search3.png'
import iconm from './moon1.png'
import Grid from './grid';
import './style.css'
import { Link } from 'react-router-dom';
function Menue() {
    return (  
<div className='row'>


<nav className="navbar navbar-expand-lg bg-light"  style={{paddingBottom: 0, paddingTop: 0 ,}}>
  <div className="container-fluid" style={{backgroundColor:'#1597E5', height:'7vh'}}>

    <img src={icon} style={{height:'13vh', width:'25vh',paddingTop:8, marginLeft:'1vh'}} />

   
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">


        <li className="nav-item" id ="main" style={{color:'white'}}>
          <b>Live Scores</b>
          

          <ul id="submain" style={{ listStyle: "none", color: "black" }}>
                  <li >
                    <Link to="/live score home" className="submainChild">Score Home</Link>
                  </li>
                  <li>
                    <Link to="/result" className="submainChild">Result</Link>
                  </li>
                  <li>
                    <Link to="/season" className="submainChild">Season view</Link>
                  </li>
                  <li>
                    <Link to="/desktop scoreborad" className="submainChild">Desktop Scoreboard</Link>
                  </li>
                </ul>
        </li>

        <li  className="nav-item" style={{color:'white',marginLeft:'3vw'}}>
       <b>Series</b>
        </li>



        <li  className="nav-item" style={{color:'white', marginLeft:'3vw'}}>
          <b>Teams</b>
        </li>
        <li  className="nav-item" style={{color:'white',marginLeft:'3vw'}}>
       <b>News</b>
        </li>
        <li  className="nav-item" style={{color:'white',marginLeft:'3vw'}}>
       <b>Features</b>
        </li>

        <li  className="nav-item" style={{color:'white',marginLeft:'3vw'}}>
       <b>Videos</b>
        </li>
        <li  className="nav-item" style={{color:'white',marginLeft:'3vw'}}>
       <b>Status</b>
        </li>
      

        
        <img src={iconm} style={{height:'4vh', width:'3vh',paddingTop:4, marginLeft:'47vh'}} />
        <img src={icon2} style={{height:'4vh', width:'4vh',paddingTop:4, marginLeft:'4vh', Color:"white"}} />
    <img src={icon3} style={{height:'4vh', width:'4vh',paddingTop:4, marginLeft:'4vh'}} />
    <img src={icon4} style={{height:'4vh', width:'4vh',paddingTop:4, marginLeft:'4vh'}} />





      </ul>
    </div>
  </div>
</nav>





</div>


    );
}

export default Menue;