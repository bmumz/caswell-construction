import React from 'react';
import serviceData from '../../data/service-data';
import Layout from '../ui/Layout';

const Services = () => (
  <div className='section'>
    <Layout>
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
  </div>
);

export default Services;
