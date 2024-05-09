type HorizontalCarouselProps = {
  items: React.ReactNode[];
};

const HorizontalCarousel = ({ items }: HorizontalCarouselProps) => {
  return (
    <div
      className="w-full h-full flex align-items-center gap-2 border-round-xl p-2 overflow-auto"
      style={{
        background: "#292929",
      }}>
      {items.map((item) => item)}
    </div>
  );
};

export default HorizontalCarousel;
