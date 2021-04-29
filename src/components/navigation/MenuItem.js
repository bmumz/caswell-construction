import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

//data
import PageData from '../../data/page-data.js';

const MenuItem = () => (
  <nav>
    {PageData &&
      PageData.map((page, index) => (
        <AnchorLink href={page.id} key={index}>
          <h3>{page.title}</h3>
        </AnchorLink>
      ))}
  </nav>
);

export default MenuItem;
