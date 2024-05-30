import { useRef, useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type HorizontalCarouselProps = {
  items: React.ReactNode[];
};

const TRANSLATE_AMOUNT = 200;

const HorizontalCarousel = ({ items }: HorizontalCarouselProps) => {
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isLeftVisible = translate > 0;
  const isRightVisible = containerRef.current
    ? translate + containerRef.current?.clientWidth <
      containerRef.current?.scrollWidth
    : true;

  function leftButtonClick() {
    setTranslate((translate) => {
      const newTranslate = translate - TRANSLATE_AMOUNT;
      if (newTranslate <= 0) return 0;
      return translate - TRANSLATE_AMOUNT;
    });
  }
  function rightButtonClick() {
    setTranslate((translate) => {
      if (containerRef.current == null) return translate;
      const newTranslate = translate + TRANSLATE_AMOUNT;
      const edge = containerRef.current.scrollWidth;
      const width = containerRef.current.clientWidth;
      if (newTranslate + width >= edge) return edge - width;
      return newTranslate;
    });
  }
  return (
    <div className="flex gap-1 align-items-center w-full">
      {isLeftVisible ? (
        <button
          onClick={leftButtonClick}
          className="border-none border-round-xl text-white text-xl lg:flex align-items-center justify-content-center cursor-pointer hidden"
          style={{
            background: "#292929",
            width: "42.39px",
            height: "42.39px",
          }}>
          <FaChevronLeft />
        </button>
      ) : null}
      <div
        ref={containerRef}
        className="w-full h-full border-round-xl p-2 lg:overflow-hidden overflow-y-auto"
        style={{
          background: "#292929",
        }}>
        <div
          className="flex align-items-center gap-2 w-max animation-duration-150"
          style={{
            transform: `translateX(-${translate}px)`,
            transition: "ease-in-out .125s",
          }}>
          {items}
        </div>
      </div>
      {isRightVisible ? (
        <button
          onClick={rightButtonClick}
          className="border-none border-round-xl text-white text-xl lg:flex align-items-center justify-content-center cursor-pointer hidden"
          style={{
            background: "#292929",
            width: "42.39px",
            height: "42.39px",
          }}>
          <FaChevronRight />
        </button>
      ) : null}
    </div>
  );
};

export default HorizontalCarousel;
