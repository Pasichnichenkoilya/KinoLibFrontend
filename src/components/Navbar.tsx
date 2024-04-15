import React, { useState } from "react";
import '../componentscss/Navbar.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { InputSwitch } from 'primereact/inputswitch';

const Navbar = () => {

  const [checked, setChecked] = useState(false);

  return (
    <div className='flex flex-row justify-content-center bg-orange-500'>

      
      <div className='h-6rem width_nav nav_bg  borders flex flex-row align-items-center justify-content-between'>
        <div className='w-2 h-2rem flex flex-row align-items-center ml-6'>
          <img src = {require('../images/Instagram_icon.png')} className='h-2rem '/>
          <img src = {require('../images/Telegram.png')} className='h-2rem ml-3'/>
          <label className='text-white ml-5 text-base'>ПРО НАС</label>
        </div>
          <div className='w-6 h-5rem flex flex-column align-items-center '>
            <div>
              <img src = {require('../images/KinoLibLogo.png')} className='h-5rem  ml-auto mr-auto'/>
            </div>
            <div className="w-full mt-1">
              <div className=' ml-auto mr-auto'>
                <div className='test_under_2 ml-auto mr-auto justify-content-center flex '>
                  <div className='h-8rem width_nav ml-5 mr-5 align-items-center flex flex-rom justify-content-between pt-7'>
                    <Link to = "/">
                      <Button className='text-500 hover:bg-bluegray-400 border-none' label='ВСІ' text/>
                    </Link>
                    <Link to = "/movie">
                      <Button className='text-500' label='ФІЛЬМИ' text/>
                    </Link>
                    <Link to = "/serial">
                      <Button className='text-500' label='СЕРІАЛИ' text/>
                    </Link>
                    <Link to = "/cartoon-movie">
                      <Button className='text-500' label='МУЛЬТФІЛЬМИ  ' text/>
                    </Link>
                    <Link to = "/anime">
                      <Button className='text-500' label='АНІМЕ' text/>
                    </Link>
              
                  </div>  
                </div>
              </div> 
            </div>
        </div>

        <div className='w-2 h-4rem mr-6 flex justify-content-center '>
          <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} 
            className="mt-auto mb-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;