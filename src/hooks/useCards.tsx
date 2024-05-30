import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { Media } from "../types";

export type CardsState = {
  cards: Media[];
  countOfPages: number;
  setCountOfPages: Dispatch<SetStateAction<number>>;
  setCards: Dispatch<SetStateAction<Media[]>>;
};

export const CardsContext = createContext<CardsState | undefined>(undefined);

export function CardsProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Media[]>([]);
  const [countOfPages, setCountOfPages] = useState(0);

  return (
    <CardsContext.Provider
      value={{
        cards,
        setCards,
        countOfPages,
        setCountOfPages,
      }}>
      {children}
    </CardsContext.Provider>
  );
}

export function useCards() {
  const cardsState = useContext(CardsContext);

  if (cardsState === undefined) {
    throw new Error("useCardsContext must be used within a CardsProvider");
  }

  return cardsState;
}
