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
  return (
    <div className="w-full h-10rem flex justify-content-between relative">
      <div className="w-4 h-full flex flex-column relative overflow-hidden align-items-center gap-3 pl-8">
        <DropdownChoices />
        <GenresSelect />
      </div>
      <div className="w-4 h-full flex flex-row relative pl-8 gap-5 pr-4">
        <KnobSlider mediaType={mediaType} />
        <SliderRate mediaType={mediaType} />
      </div>
    </div>
  );
};

export default Menu;
