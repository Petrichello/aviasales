const defaultState = {
  checkboxes: {
    all: true,
    without: true,
    one: true,
    two: true,
    three: true,
  },
};

const CHECKED_ALL = "CHECKED_ALL";
const UNCHECKED_ALL = "UNCHECKED_ALL";
const CHECKED_WITHOUT = "CHECKED_WITHOUT";
const UNCHECKED_WITHOUT = "UNCHECKED_WITHOUT";
const CHECKED_ONE = "CHECKED_ONE";
const UNCHECKED_ONE = "UNCHECKED_ONE";
const CHECKED_TWO = "CHECKED_TWO";
const UNCHECKED_TWO = "UNCHECKED_TWO";
const CHECKED_THREE = "CHECKED_THREE";
const UNCHECKED_THREE = "UNCHECKED_THREE";

export const transfersReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case CHECKED_ALL:
      return { ...state, checkboxes: { ...state.checkboxes, all: true } };

    case UNCHECKED_ALL:
      return { ...state, checkboxes: { ...state.checkboxes, all: false } };

    case CHECKED_WITHOUT:
      return { ...state, checkboxes: { ...state.checkboxes, without: true } };

    case UNCHECKED_WITHOUT:
      return { ...state, checkboxes: { ...state.checkboxes, without: false } };

    case CHECKED_ONE:
      return { ...state, checkboxes: { ...state.checkboxes, one: true } };

    case UNCHECKED_ONE:
      return { ...state, checkboxes: { ...state.checkboxes, one: false } };

    case CHECKED_TWO:
      return { ...state, checkboxes: { ...state.checkboxes, two: true } };

    case UNCHECKED_TWO:
      return { ...state, checkboxes: { ...state.checkboxes, two: false } };

    case CHECKED_THREE:
      return { ...state, checkboxes: { ...state.checkboxes, three: true } };

    case UNCHECKED_THREE:
      return { ...state, checkboxes: { ...state.checkboxes, three: false } };

    default:
      return state;
  }
};

export const checkedAllAction = () => ({ type: CHECKED_ALL });
export const uncheckedAllAction = () => ({ type: UNCHECKED_ALL });
export const checkedWithoutAction = () => ({ type: CHECKED_WITHOUT });
export const uncheckedWithoutAction = () => ({ type: UNCHECKED_WITHOUT });
export const checkedOneAction = () => ({ type: CHECKED_ONE });
export const uncheckedOneAction = () => ({ type: UNCHECKED_ONE });
export const checkedTwoAction = () => ({ type: CHECKED_TWO });
export const uncheckedTwoAction = () => ({ type: UNCHECKED_TWO });
export const checkedThreeAction = () => ({ type: CHECKED_THREE });
export const uncheckedThreeAction = () => ({ type: UNCHECKED_THREE });
