import React  from 'react';
import './App.css';
import {   BrowserRouter,   Route,   Routes, } from "react-router-dom";
import  Home  from './pages/Home';
import CardPage from './pages/CardPage';
import { ShowCard } from './pages/ShowCard';
import { AppProvider } from './context/AppContext';




const App = () => {


  return (
 
   <AppProvider>

<div className="container-mid " >
   <BrowserRouter>

          <Routes>
            
            
              <Route
                path="/"
                element={
                  <Home />
                }
              />
              <Route
                path="/card/:cardId"
                element={
                  <CardPage />
                }
              />

              <Route
                path="/showCard/:cardId"
                element={
                  <ShowCard />
                }
              />

            
           
          </Routes>
       
        </BrowserRouter>

</div>
    

   </AppProvider>

 


  )
}

export default App