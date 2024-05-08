import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./CardDetails.css";
import { Details } from "../../types";

const fetchDetails = async (mediaId: string): Promise<Details> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/details${mediaId}`
  );
  return response.data;
};

const fetchPlayer = async (mediaId: string): Promise<string> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/player-url${mediaId}`
  );
  return response.data.playerUrl;
};

const CardDetails = () => {
  const [details, setDetails] = useState<Details>({
    filmPath: [],
    titleUa: "",
    titleOriginal: "",
    description: "",
    image: "",
    rating: 0,
    country: "",
    time: "",
    release: "",
    genres: [],
    seasonsInfo: [],
  });
  const [playerUrl, setPlayer] = useState("");
  const location = useLocation();

  const mediaId = location.pathname.replace("details/", "");
  const [mainBreadcrumb, mediaBreadcrumb, idBreadcrumb] = details.filmPath;

  useEffect(() => {
    fetchDetails(mediaId)
      .then((details) => setDetails(details))
      .catch();

    fetchPlayer(mediaId)
      .then((playerUrl) => setPlayer(playerUrl))
      .catch();
    window.scrollTo(0, 0);
  }, []);

  function getBreadcrumbUrl(breadcrumbName: string) {
    if (breadcrumbName === "Фільми") return "/movies";
    if (breadcrumbName === "Аніме") return "/anime";
    if (breadcrumbName === "Серіали") return "/series";
    if (breadcrumbName === "Мультфільми" || breadcrumbName === "Мультсеріали")
      return "/cartoons";
    return "/";
  }

  return (
    <div className="details-container mx-auto lg:px-5 px-2">
      <p className="flex flex-wrap gap-1 lg:ml-5">
        <Link to={"/"} className="breadcrumb-previous hover:text-white">
          {mainBreadcrumb}
        </Link>
        <span className="breadcrumb-previous select-none">{" > "}</span>
        <Link
          to={getBreadcrumbUrl(mediaBreadcrumb)}
          className="breadcrumb-previous hover:text-white">
          {mediaBreadcrumb}
        </Link>
        <span className="breadcrumb-previous select-none">{" > "}</span>
        <Link to={""}>{idBreadcrumb}</Link>
      </p>
      <div className="details-wrapper border-round-3xl md:p-3 flex gap-3 flex-column lg:flex-row align-items-center lg:align-items-start">
        <div className="max-w-18rem w-full lg:pt-0 pt-2">
          <img
            src={details.image}
            alt="details image"
            className="border-round-3xl shadow-5 w-full max-h-26rem"
          />
          <div className="my-3">
            <div className="flex justify-content-center">
              {[...Array(10)].map((_, index) => (
                <span
                  key={index}
                  className={`${
                    index + 1 > Math.floor(details.rating || 0)
                      ? "opacity-20"
                      : ""
                  }`}>
                  {"⭐"}
                </span>
              ))}
            </div>
            <div className="flex justify-content-center mt-2">
              {"Рейтинг: "}
              {details.rating}
              {"/10"}
            </div>
          </div>
          <div className="separator-container flex flex-column gap-1">
            <div className="separatable py-2 mt-1 flex justify-content-between">
              <span className="flex-1 left-separatable">Країна:</span>
              <span className="flex-1 flex align-items-center justify-content-center">
                {details.country}
              </span>
            </div>
            <div className="separatable py-2 flex">
              <span className="flex-1 left-separatable">Дата релізу:</span>
              <span className="flex-1 flex align-items-center justify-content-center">
                {details.release}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 pb-5">
          <div className="h-min min-h-26rem pt-4">
            <div className="flex justify-content-between flex-wrap">
              <p className="text-2xl font-bold mb-2 m-0">{details.titleUa}</p>
              <p className="font-bold mb-2 m-0">
                {"🕓"}
                {details.time}
              </p>
            </div>
            <p className="mt-0">{details.titleOriginal}</p>
            <p className="line-height-3 description">{details.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {details.genres.map((genre) => (
              <span
                key={genre}
                className="border-2 border-round-3xl py-2 px-3 genre-pill">
                {genre}
              </span>
            ))}
          </div>
          <iframe
            src={playerUrl}
            className="w-full player-container mt-4 border-none"></iframe>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
