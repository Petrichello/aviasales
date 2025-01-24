const defaultState = {
  sort: "cheapest",
};

const CHEAPEST = "CHEAPEST";
const FASTEST = "FASTEST";
const OPTIMAL = "OPTIMAL";

export const sortReducer = (action, state = defaultState) => {
  switch (action.type) {
    case CHEAPEST:
      return { ...state, sort: "cheapest" };

    case FASTEST:
      return { ...state, sort: "fastest" };

    case OPTIMAL:
      return { ...state, sort: "optimal" };

    default:
      return state;
  }
};

export const cheapestAction = (payload) => ({ type: CHEAPEST, payload });
export const fastestAction = (payload) => ({ type: FASTEST, payload });
export const optimalAction = (payload) => ({ type: OPTIMAL, payload });
