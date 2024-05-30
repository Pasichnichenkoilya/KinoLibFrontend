import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Details } from "../types";
import Player from "../components/Player";
import Rating from "../components/Rating";
import { useTitle } from "../hooks/useTitle";
import { fetchDetails } from "../api/parseService";
import Breadcrumbs from "../components/Breadcrumbs";

const CardDetails = () => {
  useTitle("Details");
  const [details, setDetails] = useState<Details | undefined>();
  const { id, season, episode } = useParams();

  useEffect(() => {
    const seasonParam = season ? `/${season}` : "";

    fetchDetails(`${id}${seasonParam}`)
      .then((details) => {
        setDetails(details);
      })
      .catch((e) => console.log(e));
  }, [id, season, episode]);

  if (details === undefined) return null;

  return (
    <>
      <div
        style={{
          maxWidth: "80rem",
        }}
        className="mx-auto lg:px-5 px-2 text-white">
        <Breadcrumbs breadcrumbs={details.filmPath} />
        <div
          style={{
            background: "#1b1b1b",
          }}
          className="border-round-3xl lg:p-3 flex gap-3 flex-column lg:flex-row align-items-center lg:align-items-start">
          <div className="max-w-18rem w-full lg:pt-0 pt-2">
            <img
              src={details.image}
              alt="details"
              className="border-round-3xl shadow-5 w-full max-h-26rem"
            />
            <Rating rating={details.rating} />
            <div
              style={{
                background: "#2b2b2b",
              }}
              className="flex flex-column gap-1">
              <div
                style={{
                  background: "#1b1b1b",
                }}
                className="py-2 mt-1 flex justify-content-between">
                <span
                  style={{
                    color: "#aeaeae",
                  }}
                  className="flex-1">
                  Країна:
                </span>
                <span className="flex-1 flex align-items-center justify-content-center">
                  {details.country}
                </span>
              </div>
              <div
                style={{
                  background: "#1b1b1b",
                }}
                className="py-2 flex">
                <span
                  style={{
                    color: "#aeaeae",
                  }}
                  className="flex-1">
                  Дата релізу:
                </span>
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
              <p
                style={{
                  color: "#aeaeae",
                }}
                className="line-height-4">
                {details.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {details.genres.map((genre) => (
                <span
                  style={{
                    borderColor: "#2b2b2b",
                  }}
                  key={genre}
                  className="border-2 border-round-3xl py-2 px-3 genre-pill">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "80rem",
        }}
        className="lg:mx-auto lg:px-5 px-2 py-5 w-full">
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
