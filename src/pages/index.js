import * as React from 'react';
import Nav from '../components/navigation/Nav';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Banner from '../components/banner/Banner';
import Services from '../components/services/Services';
import Form from '../components/contact/Form';

// styles
import '../styles/app.scss';

const Home = () => {
  return (
    <main>
      <Nav />
      <Hero />

      <About />
      <Banner />
      <Services />
      <Form />
      {/* // SEO component
    // Nav
    //About
    //Quote Banner
    //Services
    //Work
    //Contact
    //Footer */}
    </main>
  );
};

export default Home;
