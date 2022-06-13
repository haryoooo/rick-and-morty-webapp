export const LoadLocations = (data) => {
  return {
    type: "LOAD_LOC",
    payload: data,
  };
};

export const filterLocations = (data) => {
  return {
    type: "FILTER_LOC",
    payload: data,
  };
};

export const loadingLocations = (data) => {
  return {
    type: "LOADING_LOC",
    payload: data,
  };
};
