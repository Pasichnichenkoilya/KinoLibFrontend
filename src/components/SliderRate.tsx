import { useState } from "react";

import { Slider } from "primereact/slider";

import "../styles/Menu.css";

const SliderRate = () => {
  const [value, setValue] = useState<[number, number]>([0, 10]);

  return (
    <div className="flex flex-column align-items-center gap-2">
      <Slider
        value={value}
        max={10}
        min={0}
        onChange={(e) => setValue(e.value as [number, number])}
        range
        className="w-14rem relative mt-6 md:w-13rem"
      />
      <div className="text-white relative flex flex-row gap-1 justify-content-center align-items-center">
        <label className="text-white">Рейтинг:</label>
        <span className="handle-value">
          {value[0]} - {value[1]}
        </span>
      </div>
    </div>
  );
};

export default SliderRate;
