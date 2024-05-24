import { useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import Menu from "../components/Menu";
import { MediaResponse } from "../types";
import { useCards } from "../hooks/useCards";
import { useTitle } from "../hooks/useTitle";
import CardsGrid from "../components/CardsGrid";
import { MediaType, useMediaType } from "../hooks/useMediaType";

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
  title: string;
  mediaType: MediaType;
};

export default function CardsGridPage({
  title,
  mediaType,
}: CardsGridPageProps) {
  useTitle(title);
  const { cards, setCards, countOfPages, setCountOfPages } = useCards();
  const { page: page } = useParams();
  const { setMediaType } = useMediaType();

  useEffect(() => {
    fetchCards(mediaType, parseInt(page || "1"))
      .then(({ media, countOfPages }) => {
        setCards(media);
        setCountOfPages(countOfPages);
      })
      .catch((error) => console.log(error));
    window.scrollTo(0, 0);
    setMediaType(mediaType);
  }, [page, mediaType]);

  return (
    <div className="h-full overflow-y-auto flex-1">
      <Menu mediaType={mediaType} />
      <CardsGrid
        cards={cards}
        countOfPages={countOfPages}
        currentPage={parseInt(page || "1")}
        navigateUrl={mediaType}
      />
    </div>
  );
}
