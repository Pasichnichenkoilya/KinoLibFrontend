import React, { useState } from 'react'

import { Card } from 'primereact/card';

import '../pages/MainPage.css'

const MainPage = () => {

  const [value, setValue] = useState<[number, number]>([0, 10]);
  return (
    <div className='bg-red-500 w-full'>MainPage
      
    </div>
      
  )
}

export default MainPage