import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type SidebarState = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarState | undefined>(
  undefined
);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const sidebarState = useContext(SidebarContext);

  if (sidebarState === undefined) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }

  return sidebarState;
}
