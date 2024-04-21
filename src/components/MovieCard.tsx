import React from 'react';
import { Card } from 'primereact/card';
import { Media } from '../types/index'
import '../componentscss/Card.css';

const MovieCard: React.FC<{ entry: Media }> = ({ entry }) => {
  return (
    <Card className='card_size'>
      <img src={entry.image} alt={entry.title} /> {/* Добавляем src и alt для тега img */}
      <span>{entry.rating}</span>
      <span>{entry.title}</span>
      <span>{entry.year}</span>
      <span>{entry.genres.join(', ')}</span> {/* Преобразуем массив жанров в строку с разделителем */}
    </Card>
  );
};

export default MovieCard;