import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// components
import Nav from '../navigation/Nav';

const Hero = () => {
  const alt = 'Various tools laid out on a yellow background.';
  return (
    <>
      <StaticImage src='../../images/toolsDesktop.png' alt={alt} className='hero__img--desktop' />
      <StaticImage src='../../images/toolsMobile.png' alt={alt} className='hero__img--mobile' />
    </>
  );
};

export default Hero;
