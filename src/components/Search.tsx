import React, { useState } from 'react'
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import '../componentscss/Search.css'

const Search = () => {
    const [value, setValue] = useState<string>('');
  return (
    <IconField iconPosition="left">
        <InputIcon className="pi pi-search text-white"> </InputIcon>
        <InputText
        v-model="value1"
        placeholder="Пошук &#8201; фільмів, серіалів, аніме, мультфільмів тощо..."
        className='w-full border-round-3xl search_bg border-none placeholder-color h-3rem custom-input'
        style={{ color: 'white' }}
    />
    </IconField>
  )
}

export default Search
