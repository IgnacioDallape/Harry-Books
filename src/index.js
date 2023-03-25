import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import LibrosLista from './Components/Libros/LibrosLista';
import Nosotros from './Components/Nosotros/Nosotros';
import HarryPotter from './Components/Main/Personajes/HarryPotter';
import Hermione from './Components/Main/Personajes/Hermione';
import Ron from './Components/Main/Personajes/Ron';
import CartProvider from './Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>

      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path='/' element={<Main/>} />
            <Route exact path='/LibrosLista' element={<LibrosLista/>} />
            <Route exact path='/Nosotros' element={<Nosotros/>} />
            <Route exact path='/harrypotter' element={<HarryPotter/>} />
            <Route exact path='/hermione' element={<Hermione/>} />
            <Route exact path='/ron' element={<Ron/>} />

          

            

          </Routes>
        <Footer/>
      </BrowserRouter>  
    
    </CartProvider>
  </React.StrictMode>
);

