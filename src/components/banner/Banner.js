import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Banner = () => (
  <h2 className='banner'>
    <span>Have a project you keep putting off?!</span>
    <AnchorLink to='#contact'>Contact Us</AnchorLink>
    <span>Today for a free quote!</span>
  </h2>
);

export default Banner;
