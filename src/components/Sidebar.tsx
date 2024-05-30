import { useEffect, useRef } from "react";

import MenuItems from "./MenuItems";
import DropdownChoices from "./DropdownChoices";
import { useSidebar } from "../hooks/useSidebar";
import { useMediaType } from "../hooks/useMediaType";

import "primeicons/primeicons.css";
import GenresSelect from "./GenresSelect";
import KnobSlider from "./KnobSlider";
import SliderRate from "./SliderRate";

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useSidebar();
  const { mediaType } = useMediaType();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (sidebarRef.current == null) return;

      if (!sidebarRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      style={{
        width: `${isOpen ? "70%" : "0"}`,
        background: "#222222",
      }}
      className={`md:hidden flex flex-column gap-2 absolute h-full text-white z-4 right-0 transition-duration-200 overflow-hidden pt-0 ${
        isOpen ? "p-2" : ""
      }`}>
      <span
        onClick={() => setIsOpen(false)}
        className="pi pi-bars text-4xl text-white p-2 md:hidden"></span>
      <MenuItems onItemClick={() => setIsOpen(false)} />
      <DropdownChoices mediaType={mediaType} />
      <GenresSelect mediaType={mediaType} />
      <KnobSlider mediaType={mediaType} />
      <SliderRate mediaType={mediaType} />
    </div>
  );
}
