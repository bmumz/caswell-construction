import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

//data
import SectionData from '../../data/section-data.js';

const MenuItem = () => (
  <nav>
    {SectionData &&
      Object.values(SectionData).map((section, index) => (
        <AnchorLink href={section.id} key={index}>
          <h3>{section.title}</h3>
        </AnchorLink>
      ))}
  </nav>
);

export default MenuItem;
