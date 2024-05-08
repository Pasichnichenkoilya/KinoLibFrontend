export type Media = {
  id: string;
  title: string;
  image: string;
  year: number | null;
  rating: number | null;
  genres: string[];
  type: string;
  lastEpisode: string | null;
};

export type MediaResponse = {
  media: Media[];
  countOfPages: number;
};

export type Suggestion = {
  label: string;
  value: string;
};

export type SeasonInfo = {
  seasonId: string;
  seasonNumber: string;
  episodes: string[];
};

export type Details = {
  filmPath: string[];
  titleUa: string;
  titleOriginal: string;
  description: string;
  image: string;
  rating: number;
  country: string;
  time: string;
  release: string;
  genres: string[];
  seasonsInfo: SeasonInfo[];
};
