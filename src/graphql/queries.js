import { gql } from "graphql-request";

export const TEST = gql`
  query($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
`;
// season has only four options, which are: FALL, WINTER, SPRINIG, SUMMER
// type has only two options, which are: ANIME, MANGA
export const BY_YEAR_AND_SEASON = gql`
  query($seasonYear: Int!) {
    Media(seasonYear: $seasonYear, season: WINTER, type: ANIME) {
      title {
        romaji(stylised: true)
        english(stylised: true)
        native(stylised: true)
      }
    }
  }
`;
