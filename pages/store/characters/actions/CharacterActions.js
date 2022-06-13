export const LoadCharacter = (data) => {
  return {
    type: "LOAD_CHAR",
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
