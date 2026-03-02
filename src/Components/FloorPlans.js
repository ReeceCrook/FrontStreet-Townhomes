import React from 'react';
import '../css/FloorPlan.css';
import { floorPlanImages } from '../images';
import ImageCarousel from './ImageCarousel';

function FloorPlans() {
  return (
    <div className="floorPlansPage">
      <div className="floorPlanWrapper">
        <article className="floorPlanCard FPCard1">
          <div className="cardText">
            <h2>2 Bedroom <span className="pipe">|</span> 1 Bath <span className="pipe">|</span> 2 Car Garage</h2>
          </div>
          <hr className="divider" />
          <ImageCarousel pics={floorPlanImages[0]} showFullscreenButton={true} />
        </article>

        <article className="floorPlanCard FPCard2">
          <div className="cardText">
            <h2>3 Bedroom <span className="pipe">|</span> 3 Bath <span className="pipe">|</span> 2 Car Garage</h2>
          </div>
          <hr className="divider" />
          <ImageCarousel pics={floorPlanImages[1]} showFullscreenButton={true} />
        </article>
      </div>
    </div>
  );
}

export default FloorPlans;
