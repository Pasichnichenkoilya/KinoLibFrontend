import { useState } from "react";

import { Link } from "react-router-dom";

type MenuItemsProps = {
  onItemClick?: () => void;
};

export default function MenuItems({ onItemClick }: MenuItemsProps) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const itemTextColor = (isActive: boolean) =>
    isActive ? "text-white" : "text-500";

  const menuItems = [
    { label: "всі", url: "/" },
    { label: "фільми", url: "/movies" },
    { label: "серіали", url: "/series" },
    { label: "мультфільми", url: "/cartoons" },
    { label: "мультсеріали", url: "/cartoon-series" },
    { label: "аніме", url: "/anime" },
  ];

  return (
    <>
      {menuItems.map((menuItem, index) => (
        <Link
          key={menuItem.url}
          onClick={() => {
            setActiveItemIndex(index);
            if (onItemClick) onItemClick();
          }}
          to={menuItem.url}
          className={`hover:text-white uppercase ${itemTextColor(
            activeItemIndex === index
          )}`}>
          {menuItem.label}
        </Link>
      ))}
    </>
  );
}
