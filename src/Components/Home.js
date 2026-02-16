import React, { useEffect, useState } from 'react'
import Logo from '../assets/mainPics/FrontStTownhomesLogo.png'
import ImageCarousel from './ImageCarousel'
import { homeImages } from '../images'


function Home({ isVideoModalOpen, setIsVideoModalOpen }) {
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 770px)').matches);
    };

    const handleResize = () => {
      checkIsMobile();
    };

    checkIsMobile();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='homeDiv'>
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
      <img src={Logo} alt='palomino ranch townhomes logo' className='palominoLogo' />
      <div className='homeImageGalleryWrapper'>
        <ImageCarousel pics={homeImages} />
      </div>
      <div className={`${isMobile ? 'mobile-circle' : 'circle'}`}>
        <p>
          Call to tour our model!<br />
          <a href="tel:7199643526">719-964-3526</a><br />
        </p>
      </div>
    </div>
  )
}

export default Home 