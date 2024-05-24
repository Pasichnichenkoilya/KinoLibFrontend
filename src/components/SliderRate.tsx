import { useEffect, useState } from "react";

import axios from "axios";

import { Slider, SliderChangeEvent } from "primereact/slider";

import { MediaResponse } from "../types";
import { useCards } from "../hooks/useCards";

import "../styles/Menu.css";

async function fetchRating(
  from: number,
  to: number,
  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/filter/?mediaType=${mediaType}&rating=${from}-${to}`
  );
  return response.data;
}

const SliderRate = ({ mediaType }: { mediaType: string }) => {
  const [value, setValue] = useState<[number, number]>([0, 10]);
  const { setCards, setCountOfPages } = useCards();

  function onSlideEnd(e: SliderChangeEvent) {
    const [from, to] = e.value as [number, number];
    fetchRating(from, to, mediaType)
      .then(({ media, countOfPages }) => {
        setCards(media);
        setCountOfPages(countOfPages);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    setValue([0, 10]);
  }, [mediaType]);

  return (
    <div className="flex flex-column align-items-center gap-2">
      <Slider
        value={value}
        max={10}
        min={0}
        onSlideEnd={onSlideEnd}
        onChange={(e) => setValue(e.value as [number, number])}
        range
        className="w-14rem relative mt-6 md:w-13rem"
      />
      <div className="text-white relative flex flex-row gap-1 justify-content-center align-items-center">
        <label className="text-white">Рейтинг:</label>
        <span className="handle-value">
          {value[0]} - {value[1]}
        </span>
      </div>
    </div>
  );
};

export default SliderRate;
