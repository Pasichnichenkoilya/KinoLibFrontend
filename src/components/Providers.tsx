import { ReactNode } from "react";

import { CardsProvider } from "../hooks/useCards";
import { SidebarProvider } from "../hooks/useSidebar";
import { MediaTypeProvider } from "../hooks/useMediaType";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CardsProvider>
      <SidebarProvider>
        <MediaTypeProvider>{children}</MediaTypeProvider>
      </SidebarProvider>
    </CardsProvider>
  );
}
