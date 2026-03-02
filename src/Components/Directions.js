import React from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';


function Directions() {

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    transition: '0'
  };

  const center = {
    lat: 39.09225312264767,
    lng: -104.87473018436863
  };
  return (
    <div className='directionsPage'>  
      <div className='directionsWrapper'>
        <h1>Directions</h1>

        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <MarkerF position={center} />
        </GoogleMap>
        <a
          href='https://maps.app.goo.gl/mSxxnJv4vmKMaUaU8'
          target='_blank'
          rel="noopener noreferrer"
          className='mapDirectionsATag'
          aria-label="Open Google Maps for Front Street Townhomes"
        >
          Front Street Townhomes<br />
          241 Front St, Monument, CO 80132<br />
          Colorado Springs, Monument, CO 80132
        </a>
      </div>
    </div>
  )
}

export default Directions
