import { client } from "../../../../graphql/client";
import { getCharacters } from "../../../../graphql/queries";

export const LoadCharacter = (data) => {
  return {
    type: "LOAD_CHAR",
    payload: data,
  };
};

export const LoadCharacterPage = (data) => {
  return {
    type: "LOAD_PAGE",
    payload: data,
  };
};

export const filterCharacter = (data) => {
  return {
    type: "FILTER_CHAR",
    payload: data,
  };
};

export const loadingCharacter = (data) => {
  return {
    type: "LOADING_CHAR",
    payload: data,
  };
};

export const fetchCharacters = () => {
  return async (dispatch) => {
    dispatch(loadingCharacter(true));
    const { data } = await client.query({
      query: getCharacters(1),
    });
    const { results } = data.characters;
    const { next, prev } = data.characters.info;
    dispatch(loadingCharacter(false));
    dispatch(LoadCharacter(results));
  };
};
