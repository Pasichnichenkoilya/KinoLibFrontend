import { Link } from "react-router-dom";

type CarouselPillProps = {
  title: string;
  url: string;
  active?: boolean;
};

const CarouselPill = ({ title, url, active }: CarouselPillProps) => {
  return (
    <Link
      to={url}
      className="px-4 py-1 text-white w-max border-round-xl hover:surface-500"
      style={{
        background: active ? "#7D7D7D" : "#333333",
        flexShrink: "0",
      }}>
      {title}
    </Link>
  );
};

export default CarouselPill;
