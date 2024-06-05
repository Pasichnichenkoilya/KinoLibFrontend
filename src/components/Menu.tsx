import KnobSlider from "./KnobSlider";
import SliderRate from "./SliderRate";
import GenresSelect from "./GenresSelect";
import DropdownChoices from "./DropdownChoices";

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
    <div
      style={{
        maxWidth: "105rem",
      }}
      className="hidden justify-content-between lg:flex h-10rem mx-auto pt-3 px-5">
      <div className="flex flex-column gap-3">
        <DropdownChoices mediaType={mediaType} />
        <GenresSelect mediaType={mediaType} />
      </div>

      <div className="xl:flex gap-3">
        <KnobSlider mediaType={mediaType} />
        <SliderRate mediaType={mediaType} />
      </div>
    </div>
  );
};

export default Menu;
