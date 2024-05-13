import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import Menu from "../components/Menu";
import { MediaResponse } from "../types";
import CardsGrid from "../components/CardsGrid";
import { useCardsContext } from "../hooks/useCards";

import "primeicons/primeicons.css";

import "../styles/MainPage.css";
import "../styles/Paginator.css";

const fetchAllCards = async (page: number): Promise<MediaResponse> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/all/${page}`
  );
  return response.data;
};

const MainPage = () => {
  const { cards, setCards, countOfPages, setCountOfPages } = useCardsContext();
  const { page: page } = useParams();

  useEffect(() => {
    fetchAllCards(parseInt(page || "1"))
      .then(({ media, countOfPages }) => {
        setCards(media);
        setCountOfPages(countOfPages);
      })
      .catch((error) => console.log(error));
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="bg-gray-900 w-full h-full flex flex-column">
      <div className="main_area_margin relative">{/* <Menu /> */}</div>
      <CardsGrid
        cards={cards}
        countOfPages={countOfPages}
        currentPage={parseInt(page || "1")}
        navigateUrl=""></CardsGrid>
    </div>
  );
};

export default MainPage;
