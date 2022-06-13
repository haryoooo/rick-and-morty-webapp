export const LoadEpisodes = (data) => {
  return {
    type: "LOAD_EPS",
    payload: data,
  };
};

export const filterEpisodes = (data) => {
  return {
    type: "FILTER_EPS",
    payload: data,
  };
};

export const loadingEpisodes = (data) => {
  return {
    type: "LOADING_EPS",
    payload: data,
  };
};
