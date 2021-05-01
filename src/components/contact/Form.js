import React, { useState } from 'react';
import axios from 'axios';
import Heading from '../ui/Heading';
//hook
import { useInput } from '../../hooks/use-input';
//data
import contactData from '../../data/contact-data';

const Form = () => {
  const title = 'Contact Us';

  const [status, setStatus] = useState('');
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: phone, bind: bindPhone, reset: resetPhone } = useInput('');
  const { value: subject, bind: bindSubject, reset: resetSubject } = useInput('');
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput('');

  const success = `Your email has been sent! We'll be in touch shortly!`;
  const err = `There was an unfortunate error! Please email/call us directly.`;

  const resetForm = () => {
    resetName();
    resetEmail();
    resetPhone();
    resetSubject();
    resetMessage();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8080/contact', {
        headers: { 'Content-Type': 'application/json' },
        data: { name, email, phone, subject, message },
      })
      .then((res) => {
        if (res.data.status === 'success') {
          setStatus(success);
          resetForm();
        } else {
          setStatus(err);
        }
      });
  };

  return (
    <div className='contact__container'>
      <Heading className='heading__dark'>{title}</Heading>
      <div className='contact'>
        <div>
          <h2>{contactData.heading}</h2>

          {contactData.blurb.map((s, i) => (
            <p key={i} className='contact__blurb'>
              {s}
            </p>
          ))}
        </div>
        <div>
          <p className={'contact__err ' + (status === err) || (status === success && 'succ')}>
            <span>{status}</span>
          </p>
          <form onSubmit={handleSubmit} className='contact__form'>
            <input
              type='text'
              id={contactData.fields.name}
              aria-label={contactData.fields.name}
              placeholder={contactData.fields.name}
              {...bindName}
              required
            />
            <input
              type='email'
              id={contactData.fields.email}
              aria-label={contactData.fields.email}
              placeholder={contactData.fields.email}
              {...bindEmail}
              required
            />
            <input
              type='tel'
              id={contactData.fields.phone}
              aria-label={contactData.fields.phone}
              placeholder={contactData.fields.phone}
              {...bindPhone}
              required
            />
            <input
              type='text'
              id={contactData.fields.subject}
              aria-label={contactData.fields.subject}
              placeholder={contactData.fields.subject}
              {...bindSubject}
              required
            />
            <textarea
              type='text'
              id={contactData.fields.message}
              aria-label={contactData.fields.message}
              placeholder={contactData.fields.message}
              rows={7}
              {...bindMessage}
              required
            />
            <input type='submit' value='Submit' className='contact__btn' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
