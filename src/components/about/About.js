import React from 'react';
import Paragraph from '../ui/Paragraph';
import Layout from '../ui/Layout';
import Heading from '../ui/Heading';
// data
import aboutData from '../../data/about-data';

const About = () => {
  const title = `About Us`;
  return (
    <div className='section'>
      <Layout>
        <Heading>{title}</Heading>
        <Paragraph data={aboutData} />
      </Layout>
    </div>
  );
};
export default About;
