import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { Media } from "../types";

export type CardsState = {
  cards: Media[];
  countOfPages: number;
  setCountOfPages: Dispatch<SetStateAction<number>>;
  setCards: Dispatch<SetStateAction<Media[]>>;
};

export const CardsContext = createContext<CardsState | undefined>(undefined);

export function useCardsContext() {
  const cardsState = useContext(CardsContext);

  if (cardsState === undefined) {
    throw new Error("useCardsContext must be used within a CardsContext");
  }

  return cardsState;
}
