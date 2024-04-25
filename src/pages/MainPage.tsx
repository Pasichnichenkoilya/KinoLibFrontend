import { ReactNode, useEffect, useState } from "react";
import Menu from "../components/Menu";
import { DataView } from "primereact/dataview";
import { Paginator } from "primereact/paginator";
import "../styles/MainPage.css";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { Media, MediaResponse } from "../types";
import "primeicons/primeicons.css";
import { useParams, useNavigate } from "react-router-dom";

const fetchAllCards = async (page: number): Promise<MediaResponse> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/all/${page}`
  );
  return response.data;
};

const MainPage = () => {
  const { page: pageParam } = useParams();
  const navigate = useNavigate();
  const [mediaCards, setMediaCards] = useState<Media[]>([]);
  const [countOfPages, setCountOfPages] = useState(0);
  const currentPage = parseInt(pageParam || "1");

  useEffect(() => {
    fetchAllCards(currentPage)
      .then(({ media, countOfPages }) => {
        setMediaCards(media);
        setCountOfPages(countOfPages);
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

  const listTemplate = (items: Media[]): ReactNode[] => {
    if (!items || items.length === 0) return [];

    return [
      <div className="grid grid-nogutter justify-content-center p-5 gap-3 bg-gray-900 cards-grid mx-auto">
        {items.map((media, index) => (
          <MovieCard entry={media} key={index} />
        ))}
      </div>,
    ];
  };

  return (
    <div className="bg-gray-900 w-full h-full flex flex-column">
      <div className="main_area_margin">
        <Menu />
      </div>
      <div className="flex flex-column">
        <DataView
          value={mediaCards}
          listTemplate={listTemplate}
          layout={"grid"}
        />
        <Paginator // need to fix or change
          first={currentPage * 10} // Calculate first record index based on current page
          rows={20}
          totalRecords={countOfPages}
          onPageChange={(e) => {
            navigate(`/${e.page + 1}`);
          }}
          pageLinkSize={6}
          className="bg-gray-900 border-none"
        />
      </div>
    </div>
  );
};

export default MainPage;
