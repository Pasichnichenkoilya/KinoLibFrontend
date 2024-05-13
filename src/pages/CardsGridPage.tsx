import { useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import Menu from "../components/Menu";
import { MediaResponse } from "../types";
import CardsGrid from "../components/CardsGrid";
import { useCardsContext } from "../hooks/useCards";

import "../styles/Menu.css";
import "../styles/Paginator.css";

const fetchCards = async (
  mediaType: string,
  page: number
): Promise<MediaResponse> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/${mediaType}/${page}`
  );
  return response.data;
};

type CardsGridPageProps = {
  mediaType:
    | "all"
    | "movies"
    | "series"
    | "cartoons"
    | "cartoon-series"
    | "anime";
};

export default function CardsGridPage({ mediaType }: CardsGridPageProps) {
  const { cards, setCards, countOfPages, setCountOfPages } = useCardsContext();
  const { page: page } = useParams();

  useEffect(() => {
    fetchCards(mediaType, parseInt(page || "1"))
      .then(({ media, countOfPages }) => {
        setCards(media);
        setCountOfPages(countOfPages);
      })
      .catch((error) => console.log(error));
    window.scrollTo(0, 0);
  }, [page, mediaType]);

  return (
    <>
      <Menu mediaType={mediaType} />
      <CardsGrid
        cards={cards}
        countOfPages={countOfPages}
        currentPage={parseInt(page || "1")}
        navigateUrl={mediaType}
      />
    </>
  );
}
