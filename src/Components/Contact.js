import React from 'react'
import "../css/Contact.css"
import jimPhoto from "../assets/mainPics/jim.jpg"
import mbLogo from "../assets/mainPics/MB-logo.png"
import facebookLogo from "../assets/mainPics/Facebook_Logo_Primary.png"

function Contact() {
  return (
    <div className='aboutUsPage'>
      <div className='contactUsWrapper'>
        <img src={mbLogo} alt='Masterbilt-Logo' className='mbLogo' />
        <div className="about-us">
          <h2 className="about-us-title">Modern Townhome Living in the <br /> Heart of Monument</h2>

          <div className="about-us-card">
            <p>
              Discover a unique opportunity nestled in the charming town of Monument. These beautifully designed townhomes offer a perfect blend of comfort, style, and
              functionality — ideal for homeowners and investors alike.
            </p>

            <p>
              Each residence features a smart, spacious layout with an attached two-car garage on the main level and an expansive living area above. Inside, vaulted ceilings create
              an airy, open atmosphere complemented by abundant natural light pouring through large windows. Upscale finishes, including granite countertops in the kitchen and bathrooms,
              elevate the space with modern elegance.
            </p>

            <p>
              Located in a peaceful neighborhood, these townhomes offer convenient access to Limbach Park, Monument Lake, local restaurants, and boutique shops — all while maintaining
              quick connectivity to I-25. Enjoy the best of Colorado living with Denver and Colorado Springs just a short drive away.
            </p>

            <p>
              At MasterBilt Homes, Inc., we are proud to be a locally owned and operated builder serving El Paso County since 1991. Having constructed nearly 1,000 homes, we stand behind
              every residence we build with a steadfast commitment to quality craftsmanship, professionalism, and integrity you can trust.
            </p>

            <p className="about-us-emphasis">
              Don’t miss this exceptional opportunity to own a stylish, versatile home in one of Colorado’s most desirable communities.
            </p>
          </div>
        </div>
        <div className='socialsDiv'>
          <a
            href='https://www.facebook.com/MasterbiltHomes'
            target='_blank'
            rel="noopener noreferrer"
            className="facebookButton"
          >
            <img src={facebookLogo} alt="Masterbilt Townhomes Facebook Logo" className="facebookLogo" />
            <span>Visit Our Facebook Page</span>
          </a>
          <a href="https://www.bbb.org/us/co/palmer-lake/profile/building-contractors/masterbilt-homes-0785-5281152/#sealclick"
            target="_blank"
            rel="noreferrer"
            className='bbbRating'
          >
            <img src="https://seal-southerncolorado.bbb.org/seals/darkgray-seal-200-65-bbb-5281152.png"
              alt="Masterbilt Homes BBB Review" />
          </a>
        </div>
        <aside className='businessCard'>
          <img src={jimPhoto} alt="Jim's Masterbilt Profile" />
          <h2>James A. Stiltner</h2>
          <a href='tel:7199643526'>719-964-3526</a> <br />
          <a href='mailto:jim@masterbilt.com'>jim@masterbilt.com</a>
        </aside>
      </div>
    </div>
  )
}

export default Contact
