import { useEffect, useState } from "react";

import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { Details } from "../../types";
import Player from "../../components/Player";

import "./CardDetails.css";
import { useTitle } from "../../hooks/useTitle";
import Breadcrumbs from "../../components/Breadcrumbs";
import Rating from "../../components/Rating";

const fetchDetails = async (mediaId: string): Promise<Details> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/details/${mediaId}`
  );
  return response.data;
};

const CardDetails = () => {
  useTitle("Details");
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
  const { id, season, episode } = useParams();

  useEffect(() => {
    const seasonParam = season ? `/${season}` : "";

    fetchDetails(`${id}${seasonParam}`)
      .then((details) => {
        setDetails(details);
      })
      .catch((e) => console.log(e));
  }, [id, season, episode]);

  return (
    <>
      <div className="details-container pt-14rem mx-auto lg:px-5 px-2">
        <Breadcrumbs breadcrumbs={details.filmPath} />
        <div className="details-wrapper border-round-3xl md:p-3 flex gap-3 flex-column lg:flex-row align-items-center lg:align-items-start">
          <div className="max-w-18rem w-full lg:pt-0 pt-2">
            <img
              src={details.image}
              alt="details image"
              className="border-round-3xl shadow-5 w-full max-h-26rem"
            />
            <Rating rating={details.rating} />
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
              <p className="line-height-4 description">{details.description}</p>
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
          </div>
        </div>
      </div>
      <div className="details-container mx-auto lg:px-5 px-2 pt-5">
        <Player
          id={id || ""}
          season={season || ""}
          episode={episode || "episode-1"}
          seasonsInfo={details.seasonsInfo}
        />
      </div>
    </>
  );
};

export default CardDetails;
