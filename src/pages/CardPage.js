import React, { useState , useContext } from 'react';
import './CardPage.css';
import Navbar from '../components/Navbar';
import {Link, useNavigate, useParams} from 'react-router-dom';
import { RemoveRedEye } from '@material-ui/icons';
import { AppContext } from '../context/AppContext';

const CardPage = () => {
  

    let navigate = useNavigate();

  const [name , setName] = useState('');

  const [error , setError] = useState('');

  const {nameRet} = useContext(AppContext);

  const [nameRetrevied , setNameRetrevied ] = nameRet;

    let { cardId } = useParams();

    const nextStep = () => {

      if (name === '') {
        setError('يرجى كتابة اسمك على المعايدة');
      }
     else if (name !== '') {
      setNameRetrevied(name);
      navigate(`/showCard/${cardId}`);
      }

      
    

      setTimeout(() => {
        setError('');
      }, 1500);

    }

  return (
    <div className='main_get_started' >
   

    <div className="flex_center_col h-100">

    <Navbar />

    <div className="mt-5"></div>

     
    
    <h1 className="subheadline_main"> إكتب اسمك وكل عام وأنت الى الله أقرب  </h1>

    {error && (
      <h1 className="error_headline"> {error} </h1>
    )}

  <div className="mt-3"></div>
    <div className="forming_action">
        
        <div className="action_div">
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value) }  placeholder='سلطان احمد' className="input_form" />
        </div>

       

    </div>

   
   
    
    <button className="show_btn mt-2 " onClick={() => nextStep() } >  
    <div className="d-flex-c" >
    <RemoveRedEye className='eye_btn'  />
    <span>  عرض المعايدة </span>
    </div>
   
   </button>
    
   

 

    
   
   
  

    </div>

  
    
    </div>
  )
}

export default CardPage