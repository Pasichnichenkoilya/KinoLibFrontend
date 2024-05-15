import { useState } from "react";

import KnobSlider from "./KnobSlider";
import SliderRate from "./SliderRate";
import GenresSelect from "./GenresSelect";
import DropdownChoices from "./DropdownChoices";

import "../styles/Menu.css";

type MenuProps = {
  mediaType:
    | "all"
    | "movies"
    | "series"
    | "cartoons"
    | "cartoon-series"
    | "anime";
};

const Menu = ({ mediaType }: MenuProps) => {
  const [value1, setValue1] = useState(1990);

  return (
    <div className="w-full h-10rem flex justify-content-around relative">
      <div className="w-3 h-full flex flex-column relative overflow-hidden align-items-start gap-3  mr-8">
        <DropdownChoices mediaType={mediaType}/>
        <GenresSelect mediaType={mediaType}/>
      </div>
      <div className="w-3 h-full flex flex-row relative gap-5 justify-content-end ml-8 overflow-hidden">
        <KnobSlider value={value1} onChange={(e) => setValue1(e.value)} />
        <SliderRate mediaType={mediaType} />
      </div>
    </div>
  );
};

export default Menu;
