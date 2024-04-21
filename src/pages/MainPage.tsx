import React, { ReactNode, useEffect, useState } from "react";

import Menu from "../components/Menu";

import { Card } from "primereact/card";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";

import "../componentscss/MainPage.css";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { Media } from "../types";

const fetchAllCards = async (page: number): Promise<Media[]> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/all/${page}`
  );
  return response.data.media;
};

const MainPage = () => {
  const [page, setPage] = useState(1);
  const [mediaCards, setMediaCards] = useState<Media[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cards = await fetchAllCards(page);
      setMediaCards(cards);
    };
    fetchData();
  }, [page]);

  const listTemplate = (items: Media[]): ReactNode[] => {
    if (!items || items.length === 0) return [];

    let list = items.map((media, index) => {
      return <MovieCard entry={media} key={index} />;
    });

    return [
      <div className="grid grid-nogutter justify-content-center p-5 gap-5">
        {list}
      </div>,
    ];
  };

  // const filmsList: Media[] = [
  //   {
  //     id: "1",
  //     image:
  //       "https://i.guim.co.uk/img/media/c2fc5f6e70d6ac05b83b1f574f1e6e61bb27ef0d/0_48_2133_1280/master/2133.jpg?width=620&dpr=1&s=none",
  //     title: "On the Road",
  //     year: 2020,
  //     genres: ["Comedy"],
  //     rating: 9.5,
  //     type: "movie",
  //     lastEpisode: null,
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://i.guim.co.uk/img/media/c2fc5f6e70d6ac05b83b1f574f1e6e61bb27ef0d/0_48_2133_1280/master/2133.jpg?width=620&dpr=1&s=none",
  //     title: "On the Road",
  //     year: 2020,
  //     genres: ["Comedy"],
  //     rating: 9.5,
  //     type: "movie",
  //     lastEpisode: null,
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://i.guim.co.uk/img/media/c2fc5f6e70d6ac05b83b1f574f1e6e61bb27ef0d/0_48_2133_1280/master/2133.jpg?width=620&dpr=1&s=none",
  //     title: "On the Road",
  //     year: 2020,
  //     genres: ["Comedy"],
  //     rating: 9.5,
  //     type: "movie",
  //     lastEpisode: null,
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://i.guim.co.uk/img/media/c2fc5f6e70d6ac05b83b1f574f1e6e61bb27ef0d/0_48_2133_1280/master/2133.jpg?width=620&dpr=1&s=none",
  //     title: "On the Road",
  //     year: 2020,
  //     genres: ["Comedy"],
  //     rating: 9.5,
  //     type: "movie",
  //     lastEpisode: null,
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://i.guim.co.uk/img/media/c2fc5f6e70d6ac05b83b1f574f1e6e61bb27ef0d/0_48_2133_1280/master/2133.jpg?width=620&dpr=1&s=none",
  //     title: "On the Road",
  //     year: 2020,
  //     genres: ["Comedy"],
  //     rating: 9.5,
  //     type: "movie",
  //     lastEpisode: null,
  //   },
  //   {
  //     id: "1",
  //     image:
  //       "https://i.guim.co.uk/img/media/c2fc5f6e70d6ac05b83b1f574f1e6e61bb27ef0d/0_48_2133_1280/master/2133.jpg?width=620&dpr=1&s=none",
  //     title: "On the Road",
  //     year: 2020,
  //     genres: ["Comedy"],
  //     rating: 9.5,
  //     type: "movie",
  //     lastEpisode: null,
  //   },
  // ];

  return (
    <div className="bg-gray-900 w-full h-full flex flex-column">
      <div className="main_area_margin">
        <Menu />
      </div>
      <div className="flex">
        <DataView
          value={mediaCards}
          listTemplate={listTemplate}
          layout={"grid"}
        />
      </div>
    </div>
  );
};

export default MainPage;
