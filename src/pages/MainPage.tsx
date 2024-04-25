import { ReactNode, useEffect, useState } from "react";
import Menu from "../components/Menu";
import { DataView } from "primereact/dataview";
import { Paginator } from "primereact/paginator";
import "../styles/MainPage.css";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { Media } from "../types";
import "primeicons/primeicons.css";
import { useParams, useNavigate } from "react-router-dom";

const fetchAllCards = async (page: number): Promise<Media[]> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/all/${page}`
  );
  return response.data.media;
};

const MainPage = () => {
  const { page: pageParam } = useParams();
  const navigate = useNavigate();
  const [mediaCards, setMediaCards] = useState<Media[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (pageParam === undefined || pageParam === "1") {
      setCurrentPage(1);
      navigate("/");
    } else {
      setCurrentPage(Number(pageParam));
    }
  }, [pageParam, navigate]);

  useEffect(() => {
    fetchAllCards(currentPage)
      .then((cards) => setMediaCards(cards))
      .catch((error) => console.log(error));
  }, [currentPage]);

  const listTemplate = (items: Media[]): ReactNode[] => {
    if (!items || items.length === 0) return [];

    const list = items.map((media, index) => {
      return <MovieCard entry={media} key={index} />;
    });

    return [
      <div className="grid grid-nogutter justify-content-center p-5 gap-3 bg-gray-900">
        {list}
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
          rows={10}
          totalRecords={5730} // need to make it auto
          onPageChange={(e) => {
            setCurrentPage(e.page);
            navigate(`/${e.page}`); // Update URL when page changes
          }}
          pageLinkSize={6}
          className="bg-gray-900 border-none"
        />
      </div>
    </div>
  );
};

export default MainPage;
