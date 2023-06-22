import React , {useState , useEffect, useContext} from 'react';
import './HeroHome.css';
import {Link} from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const HeroHome = () => {

    const [cardsArray , setCardsArray] = useState([]);

    const {objectRet} = useContext(AppContext);

    const [objectRetreived , setObjectRetreived ] = objectRet;

 


  return (
    <div className='mt-4' >
  

    { /*  centerd text */ }  
    <div className="text-center">

    
    <h1 className="headline_main">  بطاقات معايدة </h1> 
    <h1 className="subheadline_main"> تيم فيوليت </h1>

    <div className="main_cards_section mt-3">

    
    <section class="hero-section">
  <div class="card-grid">
    <a href="#" class="card">
    <Link to={`/card/1`}>
    <div class="card__bg" style={{ background: "url(" + "/images/cards/card-6.png" + ") center / cover " }}  ></div>
    </Link>


    </a>

    <a href="#" class="card">
      <div class="card__bg" style={{ background: "url(" + "/images/cards/card-3.png" + ") center / cover " }}  ></div>
      
    </a>

    <a href="#" class="card">
      <div class="card__bg" style={{ background: "url(" + "/images/cards/card-2.png" + ") center / cover " }}  ></div>
     
    </a>

    <a href="#" class="card" style={{ background: "url(" + "/images/cards/card-1.png" + ") center / cover " }}  >
     
     
    </a>
  </div>
</section>

   


 


    </div>
           
    </div>

    </div>
  )
}

export default HeroHome