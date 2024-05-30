import axios from "axios";

import { Details, MediaResponse } from "../types";

const HOST = "https://kinolib-backend-homer.fly.dev/parse";

export async function fetchCards(
  mediaType: string,
  page: number
): Promise<MediaResponse> {
  const response = await axios.get(`${HOST}/${mediaType}/${page}`);
  return response.data;
}

export async function fetchPriority(
  priority: string,
  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `${HOST}/filter/?mediaType=${mediaType}&priority=${priority}`
  );
  return response.data;
}

export async function fetchGenres(
  genres: string,
  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `${HOST}/filter/?mediaType=${mediaType}&genre=${genres}`
  );
  console.log(`${HOST}/filter/?mediaType=${mediaType}&genre=${genres}`);

  return response.data;
}

export async function fetchYears(
  year: string,
  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `${HOST}/filter/?mediaType=${mediaType}&date=${year}`
  );
  return response.data;
}

export async function fetchPlayer(
  id: string,
  season: string,
  episode: string
): Promise<string> {
  const response = await axios.get(
    `${HOST}/player-url/${id}/${season}/${episode}`
      .replaceAll("//", "/")
      .replaceAll(":/", "://")
  );
  return response.data.playerUrl;
}

export async function fetchSearch(search: string): Promise<MediaResponse> {
  const response = await axios.get(`${HOST}/search/${search}`);
  return response.data;
}

export async function fetchRating(
  from: number,
  to: number,
  mediaType: string
): Promise<MediaResponse> {
  const response = await axios.get(
    `${HOST}/filter/?mediaType=${mediaType}&rating=${from}-${to}`
  );
  return response.data;
}

export async function fetchDetails(mediaId: string): Promise<Details> {
  const response = await axios.get(`${HOST}/details/${mediaId}`);
  return response.data;
}
