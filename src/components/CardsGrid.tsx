import { ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import { DataView } from "primereact/dataview";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";

import { Media } from "../types";
import MovieCard from "./MovieCard";

type CardGridProps = {
  cards: Media[];
  currentPage: number;
  countOfPages: number;
  navigateUrl: string;
};

const CardsGrid = ({
  cards,
  currentPage,
  countOfPages,
  navigateUrl,
}: CardGridProps) => {
  const navigate = useNavigate();

  const listTemplate = (items: Media[]): ReactNode[] => {
    if (!items || items.length === 0) return [];

    return [
      <div
        key={"cards-container"}
        className="grid grid-nogutter justify-content-center p-5 gap-3 bg-gray-900 cards-grid mx-auto">
        {items.map((media) => (
          <MovieCard entry={media} key={media.id} />
        ))}
      </div>,
    ];
  };

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    navigate(`/${navigateUrl}/${event.page + 1}`);
  };

  return (
    <div className="bg-gray-900 w-full h-full flex flex-column">
      <div className="flex flex-column">
        <DataView value={cards} listTemplate={listTemplate} layout={"grid"} />
        {countOfPages ? (
          <Paginator
            first={(currentPage - 1) * 20}
            rows={20}
            totalRecords={countOfPages * 20}
            onPageChange={onPageChange}
            pageLinkSize={6}
            className="bg-gray-900 p-paginator-page:flex flex-row"
          />
        ) : null}
      </div>
    </div>
  );
};

export default CardsGrid;
