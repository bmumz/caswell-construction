import React from 'react';

const Heading = ({ children, className }) => (
  <h1 className={className || `heading`}>
    <span>{children}</span>
  </h1>
);

export default Heading;
