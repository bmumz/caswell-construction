import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faPaintRoller, faScroll, faTools } from '@fortawesome/free-solid-svg-icons';

const serviceData = {
  duradek: {
    icon: <FontAwesomeIcon icon={faScroll} size='lg' className='service__icon' />,
    title: `Duradek Installation`,
    blurb: `A waterproof vinyl decking membrane that comes in various patterns, textures and colours.`,
  },
  painting: {
    icon: <FontAwesomeIcon icon={faPaintRoller} size='lg' className='service__icon' />,
    title: `Professional Painting`,
    blurb: `From small projects to large, interiors to exteriors, we offer it all when it comes to paint services!`,
  },
  flooring: {
    icon: <FontAwesomeIcon icon={faTools} size='lg' />,
    title: `Flooring Installation`,
    blurb: `We install it all— hardwood, vinyl, linoleum, laminate, ceramic, tile, and of course, more rustic options!`,
  },
  renos: {
    icon: <FontAwesomeIcon icon={faHammer} size='lg' className='service__icon' />,
    title: `Small Renovations`,
    blurb: `From bathrooms to basements— we offer services including reframing, drywalling and finishing.`,
  },
};

export default serviceData;
