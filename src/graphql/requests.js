import { request } from "graphql-request";
import { TEST } from "./queries";

export const API_URL = "https://graphql.anilist.co";
export const request_test = async (query = TEST) => {
  const variables = {
    id: 15125,
  };
  const req = await request(API_URL, query, variables);
  return req;
};
export const year_season = async (query, year) => {
  const variables = {
    seasonYear: year,
  };
  const req = await request(API_URL, query, variables);
  return req;
};
