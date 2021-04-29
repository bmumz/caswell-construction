import * as React from 'react';
import Nav from '../components/navigation/Nav';
import Hero from '../components/hero/Hero';
// styles
import '../styles/app.scss';

const Home = () => {
  return (
    <main>
      <Nav>
        <Hero />
      </Nav>
      {/* // SEO component
    // Nav
    //About
    //Quote Banner
    //Services
    //Work
    //Contact
    //Footer */}
      <h1>Test</h1>
      <h2> Test</h2>
      <h3>Test</h3>
    </main>
  );
};

export default Home;
