import { React, lazy, Suspense, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { LoadScriptNext } from '@react-google-maps/api';
import '../css/App.css';
import NavBar from './Navbar';
import Home from './Home';
import FloorPlans from './FloorPlans';
import Loading from './Loading.js';
import Contact from './Contact.js';
import Directions from './Directions.js'
const CommunityInfo = lazy(() => import('./CommunityInfo.js'));
const API_KEY = "AIzaSyBb37nQzzMw7_9NBshKx5uOTCj9oe9pxq0";


function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="App">
      {isVideoModalOpen && (
        <div className='videoModalWrapper modalWrapper' onClick={() => setIsVideoModalOpen(false)}>
          <div className='videoModalContent modalContent' onClick={e => e.stopPropagation()}>
            <button className='closeModal' onClick={() => setIsVideoModalOpen(false)} aria-label="Close Facebook Video Modal">❌</button>
              <iframe src="https://listings.vibrantmediaco.com/videos/01964990-0342-7288-b25a-194d47d7fbe0" title='Front Street Townhome walkthrough video' 
                width="100%" height="100%" frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{border: 'none'}}>
              </iframe>
            </div>
        </div>
      )}
      <LoadScriptNext
        googleMapsApiKey={API_KEY}
        loadingElement={<div>Loading map...</div>}
      >
        <NavBar isVideoModalOpen={isVideoModalOpen} setIsVideoModalOpen={setIsVideoModalOpen} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/floor-plans" element={<FloorPlans />} />
            <Route exact path="/community-info" element={<CommunityInfo />} />
            <Route exact path="/directions" element={<Directions />} />
            <Route exact path="/contact-us" element={<Contact />} />
          </Routes>
        </Suspense>
      </LoadScriptNext>
    </div>
  );
}

export default App;