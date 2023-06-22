import React, { useEffect, useState , useRef, useContext }  from 'react';
import './Home.css';
import ThreeDots from '../components/ThreeDots';
import { Link, useParams } from 'react-router-dom';
import { CloudDownload } from '@material-ui/icons';
import Navbar from '../components/Navbar';
import { AppContext } from '../context/AppContext';



export const ShowCard = () => {

    let { cardId } = useParams();

    const {nameRet} = useContext(AppContext);
    const {objectRet} = useContext(AppContext);

  const [nameRetrevied ] = nameRet;
  const [objectRetreived ] = objectRet;

    const canvasRef = useRef(null);
    
  const [showEmail  , setShowEmail] = useState(true);

  const [showGift  , setShowGift ] = useState(false);

  const [showGifts  , setShowGifts ] = useState(true);

  const [threeDotsShow  , setThreeDotsShow ] = useState(true);


  useEffect(() => {
    async function drawCanvasImage() {
      // Create a new canvas context
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Load an image onto the canvas
      const img = new Image();
      img.src = objectRetreived.image;
      img.crossOrigin = 'anonymous'; // set the crossorigin attribute to enable CORS

      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const canvasWidth = canvas.width;
        const canvasHeight = canvasWidth / aspectRatio;
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

        
        // Add some text to the canvas
        ctx.font = '35px Mirza';
        ctx.fillStyle = objectRetreived.color;
        const text = nameRetrevied;
        const textWidth = ctx.measureText(text).width;
        const textHeight = parseInt(ctx.font);
        const x = canvas.width / 2 - -80 + nameRet.length;
        const y = canvas.height - textHeight - objectRetreived.y;
        ctx.fillText(text, x, y);
      
      }
    }

    if (!threeDotsShow) {
      drawCanvasImage();
    }

   
  }, [threeDotsShow]);


  


  useEffect(() => {

    setTimeout(() => {
      
      setShowEmail(!showEmail);
      setShowGift(!showGift);
     
      document.querySelector('.main_get_started').classList.add('ready');
    
    

    }, 1200);

    setTimeout(() => {
      setThreeDotsShow( !threeDotsShow );
    }, 2200);

    setTimeout(() => {
        setShowGifts(!showGifts);
    }, 5500);

 

  } , []);


  const downloadCanvasImage = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'canvas-image.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

 
  return (
    <div className='main_get_started over_y_hidden' >

  
      
     <div className="flex_center_col  overflow_x_hidden ">

     <Navbar />
   

    <div className="email_opened_div">
    
    <div className="show_card">
    <canvas ref={canvasRef} className='canva_image' width={800} height={800} />

    </div>
  
  
  
      </div>


    <button className="show_btn mt-2 w-50" onClick={() => downloadCanvasImage() } >  
    <div className="d-flex-c">
    <CloudDownload className='eye_btn' />
    <span>  تحميل المعايدة </span>
    </div>
   
   </button>

   <Link to="/" className='w-50 mt-4 mb-2' >
          <p className="underlined_para"> تجربة مرة ثانية </p>
    </Link>

  



      
   
       
      

     </div>

 


    </div>
  )
}
