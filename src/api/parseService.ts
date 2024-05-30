import axios from "axios";

import { Details, MediaResponse } from "../types";

export async function fetchCards(
  mediaType: string,
  page: number
): Promise<MediaResponse> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/${mediaType}/${page}`
  );
  return response.data;
}

export async function fetchPriority(
  priority: string,
  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/filter/?mediaType=${mediaType}&priority=${priority}`
  );
  return response.data;
}

export async function fetchGenres(
  genres: string,
  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/filter/?mediaType=${mediaType}&genre=${genres}`
  );
  console.log(
    `https://kinolib-backend-homer.fly.dev/parse/filter/?mediaType=${mediaType}&genre=${genres}`
  );

  return response.data;
}

export async function fetchYears(
  year: string,
  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/filter/?mediaType=${mediaType}&date=${year}`
  );
  return response.data;
}

export async function fetchPlayer(
  id: string,
  season: string,
  episode: string
): Promise<string> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/player-url/${id}/${season}/${episode}`
      .replaceAll("//", "/")
      .replaceAll(":/", "://")
  );
  return response.data.playerUrl;
}

export async function fetchSearch(search: string): Promise<MediaResponse> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/search/${search}`
  );
  return response.data;
}

export async function fetchRating(
  from: number,
  to: number,
  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/filter/?mediaType=${mediaType}&rating=${from}-${to}`
  );
  return response.data;
}

export async function fetchDetails(mediaId: string): Promise<Details> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/details/${mediaId}`
  );
  return response.data;
}
