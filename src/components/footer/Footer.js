import React from 'react';
// hook
import { useSiteMetadata } from '../../hooks/use-site-metadata';

const Footer = () => {
  const { title, copyright } = useSiteMetadata();

  return (
    <footer>
      <div>
        © {copyright} {title}
      </div>
    </footer>
  );
};

export default Footer;
