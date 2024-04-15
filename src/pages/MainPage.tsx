import React, { useEffect, useState } from "react";

import { Card } from "primereact/card";

import "../componentscss/MainPage.css";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { Media } from "../types";

const fetchAllCards = async (page: number) => {
  const response = await fetch(
    `https://kinolib-backend-homer.fly.dev/parse/all/${page}`
  );
  return await response.json();
};

const MainPage = () => {
  // const [value, setValue] = useState<[number, number]>([0, 10]);
  const [page, setPage] = useState(1);
  const [mediaCards, setMediaCards] = useState<Media[]>();

  useEffect(() => {
    const fetchData = async () => {
      const cards = await fetchAllCards(page);
      console.log(cards);
    };
    fetchData();
  }, [page]);

  return (
    <div className="bg-red-500 w-full h-10rem flex flex-row">
      {/* <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard /> */}

      {mediaCards?.map((card) => (
        <div>
          <p>
            <span>id:</span>
            <span>{card.id}</span>
          </p>
          <p>
            <span>title:</span>
            <span>{card.title}</span>
          </p>
          <p>
            <span>image:</span>
            <span>{card.image}</span>
          </p>
          <p>
            <span>year:</span>
            <span>{card.year}</span>
          </p>
          <p>
            <span>rating:</span>
            <span>{card.rating}</span>
          </p>
          <p>
            <span>genres:</span>
            <span>{card.genres}</span>
          </p>
          <p>
            <span>type:</span>
            <span>{card.type}</span>
          </p>
          <p>
            <span>lastEpisode:</span>
            <span>{card.lastEpisode}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
