import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type MediaType =
  | "all"
  | "movies"
  | "series"
  | "cartoons"
  | "cartoon-series"
  | "anime";

export type MediaTypeState = {
  mediaType: MediaType;
  setMediaType: Dispatch<SetStateAction<MediaType>>;
};

export const MediaTypeContext = createContext<MediaTypeState | undefined>(
  undefined
);

export function MediaTypeProvider({ children }: { children: ReactNode }) {
  const [mediaType, setMediaType] = useState<MediaType>("all");

  return (
    <MediaTypeContext.Provider
      value={{
        mediaType,
        setMediaType,
      }}>
      {children}
    </MediaTypeContext.Provider>
  );
}

export function useMediaType() {
  const mediaTypeState = useContext(MediaTypeContext);

  if (mediaTypeState === undefined) {
    throw new Error(
      "useMediaTypeContext must be used within a MediaTypeProvider"
    );
  }

  return mediaTypeState;
}
