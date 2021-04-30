import React from 'react';

const Paragraph = ({ data }) => (
  <>
    {data &&
      data.map((p, i) => (
        <p key={i} className='paragraph'>
          {p}
        </p>
      ))}
  </>
);

export default Paragraph;
