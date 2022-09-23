import React from 'react'
import {useNavigate} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Home.css'
const Home = () => {
  const navigate = useNavigate();

  const navigateToCreateTrip = () => {
    navigate('/cTrip');
  };
  return (
    <>
      <Navbar/>
      <div className="centre_body">
        <div className="hero-section"> 
        <div id="info-section">     
        <div className="hometitle">Easy Trip</div>
              <div className="homedesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam quae quas saepe earum neque. Culpa, sint asperiores? Dolore, maiores.</div>
        <div className="buttons">
          <button className="plan" onClick={navigateToCreateTrip}>Plan a trip</button>
          <button className="join">Join a room</button>
        </div>
        </div>
        <div className='side-img'>
        </div>
        </div>
      </div>
      <div className='steps'>
            <div className="step1">
                <div className='s-header1'>
                 Step 1:
                </div>
                <div className='step-info1'>
                lorem blah blah blah 
                </div>
            </div>
            <div className="step2">
                <div className='s-header'>
                  Step 2:
                </div>
                <div className='step-info'>
                lorem blah blah blah 
                </div>
            </div>
            <div className="step3">
                <div className='s-header'>
                  Step 3:
                </div>
                <div className='step-info'>
                lorem blah blah blah 
                </div>
            </div>
            <div className='navigate'>
                  <div className='c1'></div>
                  <div className='c2'></div>
            </div>
      </div>
      <div className='features'>
          <div className='features-header'>We help to plan your trip<br>
          </br>
          with.
          <span id="ease">Ease</span>
          </div>
          
          <div className='features-box'>
                <div id="f-head">Features</div>
                <div className='features-list'>
                <div className='f1-box'>
                <div className='feature1'>
                  <div className='f-icon'></div>
                  <span className='f-name'>Location Tracker</span>
                  <div className='f-info'>
                  lorem blah blah blah
                  lorem blah blah blah 
                  lorem   
                  </div>
                </div>
                <div className='feature2'>
                <div className='f-icon'></div>
                  <span className='f-name'>Location Tracker</span>
                  <div className='f-info'>
                  lorem blah blah blah
                  lorem blah blah blah 
                  lorem   
                  </div>
                </div>
                </div>
                <div className='f2-box'>
                <div className='feature3'>
                <div className='f-icon'></div>
                  <span className='f-name'>Location Tracker</span>
                  <div className='f-info'>
                  lorem blah blah blah
                  lorem blah blah blah 
                  lorem   
                  </div>
                </div>
                <div className='feature4'>
                <div className='f-icon'></div>
                  <span className='f-name'>Location Tracker</span>
                  <div className='f-info'>
                  lorem blah blah blah
                  lorem blah blah blah 
                  lorem   
                  </div>
                </div>             
                </div>
                </div>
                <div className='features-side-img'> </div>
          </div>
      </div>
      <footer>
        
      </footer>
    </>
  );
}

export default Home