import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import { Media, MediaResponse } from "../types";
import CardsGrid from "../components/CardsGrid";

const fetchAnime = async (page: number): Promise<MediaResponse> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/anime/${page}`
  );
  return response.data;
};

const AnimePage = () => {
  const [media, setMedia] = useState<Media[]>([]);
  const [countOfPages, setCountOfPages] = useState(0);
  const { page: page } = useParams();

  useEffect(() => {
    fetchAnime(parseInt(page || "1"))
      .then(({ media, countOfPages }) => {
        setMedia(media);
        setCountOfPages(countOfPages);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="pt-14rem">
      <CardsGrid
        cards={media}
        countOfPages={countOfPages}
        currentPage={parseInt(page || "1")}></CardsGrid>
    </div>
  );
};

export default AnimePage;
