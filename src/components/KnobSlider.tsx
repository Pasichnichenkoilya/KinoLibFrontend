import { useEffect, useState } from "react";

import { Knob } from "primereact/knob";

import { useCards } from "../hooks/useCards";
import useDebounce from "../hooks/useDebounce";
import { fetchYears } from "../api/parseService";

import "../styles/KnobSlider.css";

const YEARS = [
  "1800-2009",
  "2010-2015",
  "2016-2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];

export default function KnobSlider({ mediaType }: { mediaType: string }) {
  const [value, setValue] = useState<number | undefined>(undefined);
  const { setCards, setCountOfPages } = useCards();

  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    if (value === undefined) return;

    fetchYears(YEARS[value], mediaType)
      .then(({ media, countOfPages }) => {
        setCards(media);
        setCountOfPages(countOfPages);
      })
      .catch((error) => console.log(error));
  }, [debouncedValue]);

  return (
    <div className="flex flex-column align-items-center relative">
      <Knob
        min={0}
        max={YEARS.length - 1}
        valueColor="#93ABFF"
        rangeColor="#333333"
        value={value === undefined ? YEARS.length - 1 : value}
        onChange={(e) => {
          setValue(e.value);
        }}
        className="h-6rem"
        style={{
          color: "#18181B",
        }}
      />
      <div
        style={{
          background: "#18181B",
          width: "63px",
          height: "63px",
          top: "18px",
          zIndex: "1",
          borderRadius: "100%",
        }}
        className="absolute"></div>
      <span
        style={{
          width: "63px",
          top: "44px",
          fontSize: "12px",
          zIndex: "2",
        }}
        className="absolute flex align-items-center justify-content-center text-white">
        {YEARS[value === undefined ? YEARS.length - 1 : value]}
      </span>
      <label className="text-white">Вибери рік</label>
    </div>
  );
}
