import React, { useState } from 'react'

import "../componentscss/Menu.css"

import { Knob } from 'primereact/knob';
import { Slider } from 'primereact/slider';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';

const Menu = () => {

  const [value1, setValue1] = useState(1990);
  const [selectedGenres, setSelectedGenres] = useState(null);
  const [selectChoises, setSelectChoises] = useState(null);
  const [value, setValue] = useState<[number, number]>([0, 10]);


  const genres = [
    { name : 'First'},
    { name : 'Second'},
    { name : 'Third'}
  ]

  const choises = [
    { name : 'За популярністю'},
    { name : 'За переглядами'},
    { name : 'За рейтингом'},
    { name : 'За новиною'},
    { name : 'Нещодавно додані'}

  ]

  return (
    <div className='w-full h-10rem flex flex-row justify-content-center justify-content-between pt-2 '>
        <div className='flex flex-column w-3 h-9rem  ml-8 mt-2 gap-3 pt-2 bg-red-500 '>
            <Dropdown value={selectChoises} onChange={(e) => setSelectChoises(e.value)} 
                options={choises} 
                optionLabel="name" 
                placeholder="Select a choise" 
                className="w-full md:w-20rem genres border-round-3xl ml-8 relative " 
            />

            <MultiSelect value={selectedGenres} onChange={(e) => setSelectedGenres(e.value)} 
                options={genres} 
                optionLabel="name"
                display="chip"
                placeholder="Select Cities" maxSelectedLabels={3}
                className="w-full md:w-20rem genres border-round-3xl ml-8"
            />
            
        </div>
        <div className='flex flex-row w-3 h-9rem mt-2 mr-4 '>
          <div className='flex flex-column align-items-center'>
            <Knob value={value1} onChange={(e) => setValue1(e.value)}
              min = {1980} 
              max = {2024}
              valueColor = "#93ABFF" 
              rangeColor = "#333333"
            />
            <label className='text-white'>Вибери рік</label>
          </div>
            
            
        
        </div>
    </div>
  )
}

export default Menu