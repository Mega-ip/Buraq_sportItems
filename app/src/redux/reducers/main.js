import * as types from "../ActionTpes";
const initialState = {
  headerItems: [
    {
      label: "Home",
      value: "Home",
      active: true,
    },
    {
      label: "About us",
      value: "About_US",
      active: false,
    },
    {
      label: "Contact Us",
      value: "Contact_Us",
      active: false,
    },
  ],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_HEADER_ITEMS:
      return {
        ...state,
        headerItems: [...action.payload],
      };
    default:
      return state;
  }
};

export default appReducer;
