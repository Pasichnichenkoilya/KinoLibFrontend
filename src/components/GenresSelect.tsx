import { useState } from "react";

import axios from "axios";

import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";

import { MediaResponse } from "../types";
import { useCards } from "../hooks/useCards";

import "../styles/MultiSelect.css";

async function fetchGenre(
  genre: string,
  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/filter/?mediaType=${mediaType}&genre=${genre}`
  );
  return response.data;
}

type GenresSelectProps = {
  mediaType: string;
};

const GenresSelect = ({ mediaType }: GenresSelectProps) => {
  const [selectedGenres, setSelectedGenres] = useState(null);
  const { setCards, setCountOfPages } = useCards();

  const genres = [
    { name: "біографія", value: "biography" },
    { name: "бойовик", value: "action" },
    { name: "вестерн", value: "western" },
    { name: "воєний", value: "military" },
    { name: "детектив", value: "detective" },
    { name: "документальний", value: "documentary" },
    { name: "дорами", value: "dorams" },
    { name: "драма", value: "drama" },
    { name: "екшн", value: "action-1" },
    { name: "історичний", value: "historical" },
    { name: "жахи", value: "horrors" },
    { name: "комедія", value: "comedy" },
    { name: "короткометражні", value: "short-movies" },
    { name: "крімінальний", value: "kriminalnij" },
    { name: "мелодрами", value: "melodramy" },
    { name: "пригоди", value: "adventure" },
    { name: "романтичний", value: "romantychnyi" },
    { name: "сімейний", value: "family" },
    { name: "спорт", value: "sport" },
    { name: "трилер", value: "thriller" },
    { name: "фантастика", value: "fantasy" },
    { name: "фентезі", value: "fantasy-1" },
  ];
  function onChangeGenre(e: MultiSelectChangeEvent) {
    const genre = e.value;
    fetchGenre(genre, mediaType)
      .then(({ media, countOfPages }) => {
        setCards(media);
        setCountOfPages(countOfPages);
      })
      .catch((error) => console.log(error));
    setSelectedGenres(e.value);
  }

  return (
    <MultiSelect
      value={selectedGenres}
      onChange={onChangeGenre}
      options={genres}
      optionLabel="name"
      display="chip"
      placeholder="🎭 Обери жанр"
      maxSelectedLabels={3}
      className="w-full md:w-20rem border-round-3xl border-none"
    />
  );
};

export default GenresSelect;
