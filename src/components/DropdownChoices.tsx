import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

const DropdownChoices = () => {
  const [selectChoises, setSelectChoises] = useState(null);

  const choises = [
    { name: "⭐ За популярністю" },
    { name: "За переглядами" },
    { name: "За рейтингом" },
    { name: "За новиною" },
    { name: "Нещодавно додані" },
  ];

  return (
    <Dropdown
      value={selectChoises}
      onChange={(e) => setSelectChoises(e.value)}
      options={choises}
      optionLabel="name"
      placeholder="Select a choise"
      className="w-full md:w-20rem border-round-3xl"
    />
  );
};

export default DropdownChoices;
