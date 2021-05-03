import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

const contactData = {
  fields: {
    name: `Name`,
    email: `Email`,
    phone: `Phone Number`,
    contactPreference: `Preferred Contact Method`,
    subject: `Subject`,
    message: `Message`,
  },
  heading: `Request your free quote today!`,
  blurb: [
    `We'd be happy to answer any questions you may have about your next project!`,
    `Please fill out the contact form, or get in touch in any of the following ways:`,
  ],
  contact: [
    {
      method: `phone`,
      icon: <FontAwesomeIcon icon={faPhoneSquareAlt} size='lg' className='contact__icon' />,
      value: `226-206-0546`,
    },
    {
      method: `email`,
      icon: <FontAwesomeIcon icon={faEnvelopeOpenText} className='contact__icon' />,
      value: `caswellconstruction03@gmail.com`,
    },
    {
      method: `Facebook`,
      icon: <FontAwesomeIcon icon={faFacebookSquare} size='lg' className='contact__icon' />,
      value: `Caswell Construction`,
      path: `https://www.facebook.com/caswellconstruction03`,
    },
    {
      method: `instagram`,
      icon: <FontAwesomeIcon icon={faInstagram} size='lg' className='contact__icon' />,
      value: `@caswellconstruction03`,
      path: `https://www.instagram.com/caswellconstruction03`,
    },
  ],
};

export default contactData;
