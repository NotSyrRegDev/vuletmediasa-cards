import React from 'react';
import Navbar from '../components/Navbar';
import HeroHome from '../components/HeroHome';
import {   Twitter , Instagram  , YouTube , LinkedIn  , WhatsApp  } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Home = () => {

  
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className='main_home_section mt-2' >

    {/* <img src="/images/bg/banner-vulet.jpg" alt="" className="banner" /> */}

    <div className="flex_center_col">


    <Navbar />

   <HeroHome />

    </div>

   



    </div>
  )
}

export default Home