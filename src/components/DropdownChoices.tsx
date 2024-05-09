import { useState } from "react";

import { Dropdown } from "primereact/dropdown";
import "../styles/Dropdown.css";

const DropdownChoices = () => {
  const [selectChoises, setSelectChoises] = useState(null);
  const choises = [
    { name: "⭐ За популярністю", value: "popular " },
    { name: "👀 За переглядами", value: "views" },
    { name: "💖 За рейтингом", value: "rating" },
    { name: "🔥 За новиною", value: "date" },
    { name: "⏰ Нещодавно додані", value: "added" },
  ];

  return (
    <Dropdown
      value={selectChoises}
      onChange={(e) => setSelectChoises(e.value)}
      options={choises}
      optionLabel="name"
      placeholder="🔎 Select a choise"
      className="w-full md:w-20rem border-round-3xl base_color border-transparent mt-1 "
    />
  );
};

export default DropdownChoices;
