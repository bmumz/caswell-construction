import React from 'react';
// components
import ContactMethods from './ContactMethods';
import Form from './Form';
import Heading from '../ui/Heading';
//data
import contactData from '../../data/contact-data';

const Contact = () => {
  const title = 'Contact Us';

  return (
    <section className='contact__container' id='contact'>
      <Heading className='heading__dark'>{title}</Heading>
      <div className='contact'>
        <span>
          <h2>{contactData.heading}</h2>

          {contactData.blurb.map((s, i) => (
            <p key={i} className='contact__blurb' id='work'>
              {s}
            </p>
          ))}
          <ContactMethods />
        </span>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
