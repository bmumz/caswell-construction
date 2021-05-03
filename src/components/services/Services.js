import React from 'react';
import serviceData from '../../data/service-data';
import Layout from '../ui/Layout';
import Heading from '../ui/Heading';

const Services = () => {
  const title = 'Our Services';

  return (
    <section id='services'>
      <Layout>
        <Heading>{title}</Heading>
        <div className='services'>
          {Object.values(serviceData).map((s, i) => (
            <div key={i} className='service'>
              <h3>
                <span>{s.title}</span>
              </h3>
              <p>{s.blurb}</p>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default Services;
