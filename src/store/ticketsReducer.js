const defaultState = {
  tickets: [],
  visibleTickets: [],
  loading: true,
};

const ADD_TICKETS = "ADD_TICKETS";
const ADD_VISIBLE_TICKETS = "ADD_VISIBLE_TICKETS";
const CLEAR_VISIBLE_TICKETS = "CLEAR_VISIBLE_TICKETS";
const STOP_LOADING = "STOP_LOADING";

export const ticketsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case STOP_LOADING:
      return { ...state, loading: false };

    case ADD_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.payload] };

    case ADD_VISIBLE_TICKETS:
      return { ...state, visibleTickets: [...state.visibleTickets, ...action.payload] };

    case CLEAR_VISIBLE_TICKETS:
      return { ...state, visibleTickets: [] };

    default:
      return state;
  }
};

export const addTicketsAction = (payload) => ({ type: ADD_TICKETS, payload });
export const addVisibleTicketsAction = (payload) => ({ type: ADD_VISIBLE_TICKETS, payload });
export const clearVisibleTicketsAction = () => ({ type: CLEAR_VISIBLE_TICKETS });
export const stopLoadingAction = () => ({ type: STOP_LOADING });
