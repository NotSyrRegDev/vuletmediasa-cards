import React from 'react';
import './Navbar.css';
// import {   Twitter , Instagram  , YouTube , LinkedIn  , WhatsApp  } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

  return (
    <>

<img src="/images/icons/logo-transparent.png" alt="" className="icon_mid" />
        <div className="mt-1 d-flex-c icons_section">

    {/* <Twitter className='grounded-radiants' onClick={() => openInNewTab('https://twitter.com/vuletmedia')} />

        <Instagram onClick={() => openInNewTab('https://www.instagram.com/vuletmedia.sa/')} /> */}
        
        
        
        
    </div>

  

    </>

  )
}

export default Navbar