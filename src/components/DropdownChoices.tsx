import { useEffect, useState } from "react";

import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

import "../styles/Dropdown.css";
import { SliderChangeEvent } from "primereact/slider";
import { MediaResponse } from "../types";
import axios from "axios";
import { useCardsContext } from "../hooks/useCards";

async function fetchPriority(
  priority: string,

  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/filter/?mediaType=${mediaType}&priority=${priority}`
  );
  return response.data;
}

type DropdownChoicesProps = {
  mediaType: string
}

const DropdownChoices = ({mediaType}:DropdownChoicesProps) => {
  const [selectChoises, setSelectChoises] = useState("popular");
  const { setCards, setCountOfPages } = useCardsContext();
  const choises = [
    { name: "⭐ За популярністю", value: "popular" },
    { name: "👀 За переглядами", value: "views" },
    { name: "💖 За рейтингом", value: "rating" },
    { name: "🔥 За новиною", value: "date" },
    { name: "⏰ Нещодавно додані", value: "added" },
  ];

  function onChange(e: DropdownChangeEvent) {
    const priority = e.value;
    fetchPriority(priority, mediaType)
      .then(({ media, countOfPages }) => {
        setCards(media);
        setCountOfPages(countOfPages);
      })
      .catch((error) => console.log(error));
     setSelectChoises(e.value)
     
  }
  useEffect(() => {
    setSelectChoises("popular");
  }, [mediaType]);

  return (
    <Dropdown
      value={selectChoises}
      onChange={onChange}
      options={choises}
      optionLabel="name"
      placeholder="🔎 Select a choise"
      className="w-full md:w-20rem border-round-3xl base_color border-transparent mt-1 "
    />
  );
};

export default DropdownChoices;
