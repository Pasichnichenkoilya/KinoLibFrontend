import React from "react";
import { Media } from "../types/index";

import "../styles/Card.css";
import "primeicons/primeicons.css";
import { Link, useNavigate } from "react-router-dom";

const MovieCard: React.FC<{ entry: Media }> = ({ entry }) => {
  const navigate = useNavigate(); // Import and use useNavigate hook

  const handleCardClick = () => {
    navigate(`/detail${entry.id}`); 
  };
  let ratingColorStyle = {};

  if (entry.rating !== null) {
    if (entry.rating >= 8) {
      ratingColorStyle = { color: "green" };
    } else if (entry.rating >= 5) {
      ratingColorStyle = { color: "yellow" };
    } else {
      ratingColorStyle = { color: "red" };
    }
  }

  return (
    <div
      className="card_size relative cursor-pointer"
      onClick={handleCardClick}>
      <img src={entry.image} alt={entry.title} className="card_img relative" />
      <div className="w-3rem h-1rem bg-gray-900 absolute top-0 right-0 m-2 flex flex-row justify-content-center align-items-center border-round opacity-70 gap-1">
        <span style={ratingColorStyle}>{entry.rating}</span>
        <span className="pi pi-star-fill" style={ratingColorStyle}></span>
      </div>

      <div className="w-10rem h-1rem bg-gray-900 top-0 left-0 absolute m-2 flex flex-row align-items-center justify-content-center gap-1 border-round opacity-70">
        <img src={require("../images/film-outline.png")} className="h-1rem"></img>
        <span className="text-white text-overflow-ellipsis white-space-nowrap overflow-hidden">
          {entry.lastEpisode}
        </span>
      </div>

      <div className="w-full h-4rem bg-gray-900 absolute bottom-0 shadow-6 opacity-70 p-2 flex flex-column gap-1 ">
        <span className="text-white white-space-nowrap overflow-hidden text-overflow-ellipsis">
          {entry.title}
        </span>
        <div className="flex flex-row gap-1">
          <span className="text_title_color">{entry.year} |</span>
          <span className="text_title_color">{entry.genres.join(" • ")}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
