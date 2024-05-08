import React, { useState } from 'react'
import { Knob } from 'primereact/knob';
//need to check

interface KnobSliderProps {
  value: number;
  onChange: (e: { value: number }) => void;
}

const KnobSlider: React.FC<KnobSliderProps> =({ value, onChange }) => {
  return (
    <div className='flex flex-column align-items-center'>
      <Knob 
        min = {1980} 
        max = {2024}
        valueColor = "#93ABFF" 
        rangeColor = "#333333"
        value={value}
        onChange={(e) => onChange(e)}
        className='h-6rem '
      />
      <label className='text-white'>Вибери рік</label>
    </div>
  )
}

export default KnobSlider