import { useEffect, useState } from "react";

import axios from "axios";

import { SeasonInfo } from "../types";
import CarouselPill from "./CarouselPill";
import HorizontalCarousel from "./HorizontalCarousel";

type PlayerProps = {
  id: string;
  season: string;
  episode: string;
  seasonsInfo: SeasonInfo[];
};

const fetchPlayer = async (
  id: string,
  season: string,
  episode: string
): Promise<string> => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/player-url/${id}/${season}/${episode}`.replaceAll(
      "//",
      "/"
    )
  );
  return response.data.playerUrl;
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
  }, []);

  return (
    <div className="w-full details-wrapper border-round-3xl p-5 flex flex-column align-items-center">
      {seasons.length > 0 ? (
        <div className="w-full max-w-48rem pb-4">
          <HorizontalCarousel items={seasons} />
        </div>
      ) : null}
      <iframe
        src={playerUrl}
        className="w-full aspect-video max-w-48rem"></iframe>
      {episodes.length > 0 ? (
        <div className="w-full max-w-48rem pt-4">
          <HorizontalCarousel items={episodes} />
        </div>
      ) : null}
    </div>
  );
};

export default Player;
