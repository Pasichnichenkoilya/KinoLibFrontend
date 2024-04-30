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
