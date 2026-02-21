import React from 'react'
import { useFormik } from 'formik';
import * as yup from "yup"
import emailjs from '@emailjs/browser';
import "../css/Contact.css"
import jimPhoto from "../assets/mainPics/jim.jpg"
import mbLogo from "../assets/mainPics/MB-logo.png"
import facebookLogo from "../assets/mainPics/Facebook_Logo_Primary.png"

function Contact() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const formSchema = yup.object().shape({
    userFirstName: yup.string().required("Name is not valid.").max(25),
    userLastName: yup.string().required("Last name is not valid").max(30),
    userEmail: yup.string().email().required("Email is not valid"),
    userPhoneNum: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    userMessage: yup.string().required("Message is not valid").max(300)
  })

  const formik = useFormik({
    initialValues: {
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userPhoneNum: "",
      userMessage: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      const formElement = document.querySelector('form');
      emailjs
        .sendForm('service_pda4dyn', 'template_4npi60d', formElement, 'JiyFMUBN4XcgzPCpE')
        .then((result) => {
          console.log(result.text);
          window.alert("Your message was sent successfully")
          formik.resetForm();
        })
        .catch((error) => {
          console.log(error.text);
          window.alert("Something went wrong")
        });
    },
  });

  return (
    <div className='contactUsWrapper'>
      <div className='businessCard'>
        <img src={jimPhoto} alt="Jim's Masterbilt Profile" />
        <h2>James A. Stiltner</h2>
        <a href='tel:7199643526'>719-964-3526</a> <br />
        <a href='mailto:jim@masterbilt.com'>jim@masterbilt.com</a>
      </div>
      <img src={mbLogo} alt='Masterbilt-Logo' className='mbLogo' />
      <div className="about-us">
        <h2 className="about-us-title">Modern Townhome Living in the Heart of Monument</h2>

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
    </div>
  )
}

export default Contact
