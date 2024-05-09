import { ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import { DataView } from "primereact/dataview";
import { Paginator } from "primereact/paginator";

import { Media } from "../types";
import MovieCard from "./MovieCard";

type CardGridProps = {
  cards: Media[];
  currentPage: number;
  countOfPages: number;
};

const CardsGrid = ({ cards, currentPage, countOfPages }: CardGridProps) => {
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

  return (
    <div className="bg-gray-900 w-full h-full flex flex-column">
      <div className="flex flex-column">
        <DataView value={cards} listTemplate={listTemplate} layout={"grid"} />
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

export default CardsGrid;
