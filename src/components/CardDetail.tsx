import React from 'react'
import { useParams } from 'react-router-dom';

const CardDetail = () => {
  const { id } = useParams();
  console.log(id)
  
  return (
    <div>CardDetail
    
    </div>
  )
}

export default CardDetail