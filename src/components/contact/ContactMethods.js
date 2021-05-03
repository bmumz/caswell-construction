import React from 'react';
import contactData from '../../data/contact-data';

const ContactMethods = () => (
  <ul>
    {contactData.contact.map((m, i) => (
      <li key={i}>
        {m.icon}
        {m.path && <a href={m.path}>{m.value}</a>}
        {!m.path && <p>{m.value}</p>}
      </li>
    ))}
  </ul>
);

export default ContactMethods;
