import { ALL_AGENTS } from "./action-types";

const initialState = {
  allAgents: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_AGENTS:
      return {
        ...state,
        allAgents: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
