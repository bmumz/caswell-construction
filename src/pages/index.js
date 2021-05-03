import * as React from 'react';
import Nav from '../components/navigation';
import Hero from '../components/hero';
import About from '../components/about';
import Banner from '../components/banner';
import Services from '../components/services';
import Contact from '../components/contact';
import Footer from '../components/footer';

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
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
