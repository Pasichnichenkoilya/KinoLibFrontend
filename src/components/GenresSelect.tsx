import { useState } from "react";

import { MultiSelect } from "primereact/multiselect";

const GenresSelect = () => {
  const [selectedGenres, setSelectedGenres] = useState(null);

  interface Genre {
    name: string;
  }

  const genres: Genre[] = [
    { name: "First" },
    { name: "Second" },
    { name: "Third" },
  ];

  return (
    <MultiSelect
      value={selectedGenres}
      onChange={(e) => setSelectedGenres(e.value)}
      options={genres}
      optionLabel="name"
      display="chip"
      placeholder="Select Cities"
      maxSelectedLabels={3}
      className="w-full md:w-20rem border-round-3xl"
    />
  );
};

export default GenresSelect;
