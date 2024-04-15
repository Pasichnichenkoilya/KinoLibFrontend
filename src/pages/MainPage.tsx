import React, { useState } from 'react'

import { Card } from 'primereact/card';

import '../componentscss/MainPage.css'
import MovieCard from '../components/MovieCard';

const MainPage = () => {

  const [value, setValue] = useState<[number, number]>([0, 10]);
  return (
    <div className='bg-red-500 w-full h-10rem flex flex-row'>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
    </div>
      
  )
}

export default MainPage