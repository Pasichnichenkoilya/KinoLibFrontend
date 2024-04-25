import React, { useState } from "react";
import '../componentscss/Navbar.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { InputSwitch } from 'primereact/inputswitch';
import Search from "./Search";

import axios from "axios";

const Navbar = () => {

 

  const [checked, setChecked] = useState(false);

  return (
    <div className='flex flex-row justify-content-center w-full '>
      <div className='h-6rem width_nav nav_bg  borders flex flex-row align-items-center justify-content-between fixed'>
        <div className='w-2 h-2rem flex flex-row align-items-center ml-6'>
          <img src = {require('../images/Instagram_icon.png')} className='h-2rem '/>
          <img src = {require('../images/Telegram.png')} className='h-2rem ml-3'/>
          <label className='text-white ml-5 text-base uppercase'>про нас</label>
        </div>
          <div className='w-6 h-5rem flex flex-column align-items-center '>
            <div>
              <img src = {require('../images/KinoLibLogo.png')} className='h-5rem  ml-auto mr-auto'/>
            </div>
            <div className="w-full mt-1">
              <div className=' ml-auto mr-auto'>
                <div className='test_under_2 ml-auto mr-auto'>
                  <div className='h-8rem  ml-5 mr-5  flex flex-column justify-content-center gap-3'>
                    <div>
                      <Search/>
                    </div>
                    <div className="flex flex-rom justify-content-between">
                      <Link to = "/">
                        <Button className='text-500 hover:bg-bluegray-400 border-none uppercase' label='всі' text/>
                      </Link>
                      <Link to = "/movie">
                        <Button className='text-500 uppercase' label='фільми' text/>
                      </Link>
                      <Link to = "/serial">
                        <Button className='text-500 uppercase' label='серіали' text/>
                      </Link>
                      <Link to = "/cartoon-movie">
                        <Button className='text-500 uppercase' label='мультфільми  ' text/>
                      </Link>
                      <Link to = "/anime">
                        <Button className='text-500 uppercase' label='аніме' text/>
                      </Link>
                    </div>
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