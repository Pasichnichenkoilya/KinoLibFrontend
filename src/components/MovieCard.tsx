import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Card } from 'primereact/card';

const MovieCard = () => {
    const [cardData, setCardData] = useState([]);

    // useEffect(async () => {
    //     const response = await axios.get(
    //         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    //     );
    //     setCardData(response.data)
    // }, []);

  return (
    <div>
        <Card className='card_size'>

        </Card>
    </div>
  )
}

export default MovieCard

