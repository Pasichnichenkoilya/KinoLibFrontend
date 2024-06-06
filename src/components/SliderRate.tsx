import { useEffect, useState } from "react";

import { Slider, SliderChangeEvent } from "primereact/slider";

import { useCards } from "../hooks/useCards";
import { fetchRating } from "../api/parseService";

import "../styles/Menu.css";

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
        className="relative mt-1 w-9rem xl:mt-6"
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
