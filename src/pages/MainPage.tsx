import { ReactNode, useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { DataView } from "primereact/dataview";
import { Paginator } from "primereact/paginator";

import Menu from "../components/Menu";
import MovieCard from "../components/MovieCard";
import { Media, MediaResponse } from "../types";
import MovieSkeleton from "../components/MovieSkeleton";
import "../styles/Paginator.css";

import "primeicons/primeicons.css";

import "../styles/MainPage.css";

const fetchAllCards = async (page: number): Promise<MediaResponse> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/all/${page}`
  );
  return response.data;
};

const fetchFilter = async (page: number): Promise<MediaResponse> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/filter/?rating=1-5`
  );
  return response.data;
};

const MainPage = () => {
  const { page: pageParam } = useParams();
  const navigate = useNavigate();
  const [mediaCards, setMediaCards] = useState<Media[]>([]);
  const [filterCards, setFilterCards] = useState<Media[]>([]); //..
  const [countOfPages, setCountOfPages] = useState(0);
  const currentPage = parseInt(pageParam || "1");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetchAllCards(currentPage)
      .then(({ media, countOfPages }) => {
        setMediaCards(media);
        setCountOfPages(countOfPages);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

  const listTemplate = (items: Media[]): ReactNode[] => {
    if (!items || items.length === 0) return [];

    return [
      <div
        key={"cards-container"}
        className="grid grid-nogutter justify-content-center p-5 gap-3 bg-gray-900 cards-grid mx-auto">
        {items.map((media) =>
          isLoading ? (
            <MovieSkeleton key={`skeleton-${media.id}`} />
          ) : (
            <MovieCard entry={media} key={media.id} />
          )
        )}
      </div>,
    ];
  };

  return (
    <div className="bg-gray-900 w-full h-full flex flex-column">
      <div className="main_area_margin relative">
        <Menu />
      </div>
      <div className="flex flex-column">
        <DataView
          value={mediaCards}
          listTemplate={listTemplate}
          layout={"grid"}
        />
        <Paginator
          first={(currentPage - 1) * 20}
          rows={20}
          totalRecords={countOfPages * 20}
          onPageChange={(e) => {
            navigate(`/${e.page + 1}`);
          }}
          pageLinkSize={6}
          className="bg-gray-900 p-paginator-page:flex flex-row"
        />
      </div>
    </div>
  );
};

export default MainPage;
