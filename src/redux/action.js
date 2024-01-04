import { ALL_AGENTS } from "./action-types";

import axios from "axios";

export const allAgents = () => {
  try {
    return async function (dispatch) {
      const { data } = await axios("http://localhost:3000/agents");
      return dispatch({
        type: ALL_AGENTS,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};
