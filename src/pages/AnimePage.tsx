import { useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import { MediaResponse } from "../types";
import CardsGrid from "../components/CardsGrid";
import { useCardsContext } from "../hooks/useCards";

const fetchAnime = async (page: number): Promise<MediaResponse> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/anime/${page}`
  );
  return response.data;
};

const AnimePage = () => {
  const { cards, setCards, countOfPages, setCountOfPages } = useCardsContext();
  const { page: page } = useParams();

  useEffect(() => {
    fetchAnime(parseInt(page || "1"))
      .then(({ media, countOfPages }) => {
        setCards(media);
        setCountOfPages(countOfPages);
      })
      .catch((error) => console.log(error));
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="">
      <CardsGrid
        cards={cards}
        countOfPages={countOfPages}
        currentPage={parseInt(page || "1")}
        navigateUrl="/anime"></CardsGrid>
    </div>
  );
};

export default AnimePage;
