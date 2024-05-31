import React from 'react'

import './App.css';

import Header from './assets/Header/Header';
import Footer from './assets/Footer/Footer';

import Curriculo from "./assets/Curriculo/Curriculo";
import Portfolio from './assets/Portfolio/Portfolio';
import Contato from "./assets/Contato/Contato";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Header></Header>



      <BrowserRouter>
      <nav>
        <ul>
          <li className='button'><Link to="/">curriculo</Link></li>
          <li className='button'><Link to="/Portfolio">Portfolio</Link></li>
          <li className='button'><Link to="/Contato">Contato</Link></li>
        </ul>
      </nav>

        <Routes>
          <Route index element={<Curriculo/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="contato" element={<Contato/>} />

        </Routes>
      </BrowserRouter>

      <Footer></Footer>


    </>
  )
}
export default App