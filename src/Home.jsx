import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context';
import Products from "./Products";
import Contact from './Contact';

const Home = () => {

  const {updateHomePage}=useGlobalContext();

  useEffect(()=> updateHomePage(),[]);

  return( 
  <>
  <HeroSection/>
  <Products/>
  <Contact/>
  </>
  );
};

export default Home