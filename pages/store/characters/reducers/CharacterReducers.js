import { LOADING_CHAR, LOAD_CHAR, LOAD_PAGE } from "../actionType";

const initialState = {
  character: [],
  pages: 1,
  //   filterChar: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_CHAR":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "LOAD_CHAR":
      return {
        ...state,
        character: action.payload,
      };

    case "LOAD_PAGE":
      return {
        ...state,
        pages: action.payload,
      };

    // case "FILTER_CHAR":
    //   return {
    //     ...state,
    //     character: action.payload,
    //   };

    default:
      return {
        ...state,
      };
  }
};
