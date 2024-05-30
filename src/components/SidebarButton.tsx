import { useSidebar } from "../hooks/useSidebar";

export default function SidebarButton() {
  const { isOpen, setIsOpen } = useSidebar();

  if (isOpen) return null;

  return (
    <span
      onClick={() => setIsOpen(true)}
      className="pi pi-bars text-4xl text-white p-2 absolute md:hidden z-5 right-0"></span>
  );
}
