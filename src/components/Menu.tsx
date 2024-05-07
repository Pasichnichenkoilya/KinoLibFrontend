import { useState } from "react";
import DropdownChoices from "./DropdownChoices";
import GenresSelect from "./GenresSelect";
import KnobSlider from "./KnobSlider";
import SliderRate from "./SliderRate";

import "../styles/Menu.css";

const Menu = () => {
  const [value1, setValue1] = useState(1990);
  const [value, setValue] = useState<[number, number]>([0, 10]);

  return (
    <div className="w-full h-10rem flex flex-row justify-content-center justify-content-between relative">
      <div className="w-4 h-full flex flex-column relative overflow-hidden align-items-center gap-3 pl-8">
        <DropdownChoices />
        <GenresSelect />
      </div>
      <div className="center_div h-full relative"></div>
      <div className="w-4 h-full flex flex-row relative pl-8 gap-5 pr-4">
        <KnobSlider value={value1} onChange={(e) => setValue1(e.value)} />
        <SliderRate />
      </div>
    </div>
  );
};

export default Menu;
