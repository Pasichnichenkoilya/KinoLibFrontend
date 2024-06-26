import { useEffect, useState } from "react";

import { SeasonInfo } from "../types";
import CarouselPill from "./CarouselPill";
import { fetchPlayer } from "../api/parseService";
import HorizontalCarousel from "./HorizontalCarousel";

type PlayerProps = {
  id: string;
  season: string;
  episode: string;
  seasonsInfo: SeasonInfo[];
};

const Player = ({ id, season, episode, seasonsInfo }: PlayerProps) => {
  const [playerUrl, setPlayerUrl] = useState("");

  const seasons = seasonsInfo.map((info) => {
    return (
      <CarouselPill
        active={`/${id}/${season || ""}` === info.seasonId}
        key={info.seasonId}
        title={`Сезон ${info.seasonNumber}`}
        url={`/details${info.seasonId}`}
      />
    );
  });

  const currentSeason = seasonsInfo.find(
    (info) => `/${id}/${season || ""}` === info.seasonId
  );

  const episodes = currentSeason
    ? currentSeason.episodes.map((ep) => {
        return (
          <CarouselPill
            active={episode === `episode-${ep}`}
            key={`episode-${ep}`}
            title={`Серiя ${ep}`}
            url={`${season}/episode-${ep}`}
          />
        );
      })
    : [];

  useEffect(() => {
    fetchPlayer(id, season, episode)
      .then((playerUrl) => setPlayerUrl(playerUrl))
      .catch((e) => console.log(e));
  }, [id, season, episode]);

  return (
    <div
      style={{
        background: "#1b1b1b",
      }}
      className="w-full border-round-3xl lg:p-5 flex flex-column align-items-center">
      {seasons.length > 0 ? (
        <div
          style={{
            maxWidth: "48rem",
          }}
          className="w-full pb-4">
          <HorizontalCarousel items={seasons} />
        </div>
      ) : null}
      <iframe
        title={id + season}
        style={{
          aspectRatio: "16 / 9",
          maxWidth: "48rem",
        }}
        src={playerUrl}
        className="w-full border-none"></iframe>
      {episodes.length > 0 ? (
        <div
          style={{
            maxWidth: "48rem",
          }}
          className="w-full pt-4">
          <HorizontalCarousel items={episodes} />
        </div>
      ) : null}
    </div>
  );
};

export default Player;
