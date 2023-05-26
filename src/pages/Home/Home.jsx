import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Testimonial from './Testimonial';
import Features from './Features';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <Features></Features>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;