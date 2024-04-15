import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';
import SerialPage from './pages/SerialPage';
import CartoonMoviePage from './pages/CartoonMoviePage';
import AnimePage from './pages/AnimePage';

import Navbar from './components/Navbar';
import Menu from './components/Menu';

import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css';
import "primereact/resources/themes/tailwind-light/theme.css";

import '../src/normalize.css'


const App = () => {
  return (
   <BrowserRouter>
    <Navbar/>
    <Menu/>
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/movie" element={<MoviePage/>}/>
      <Route path="/serial" element={<SerialPage/>}/>
      <Route path="/cartoon-movie" element={<CartoonMoviePage/>}/>
      <Route path="/anime" element={<AnimePage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App