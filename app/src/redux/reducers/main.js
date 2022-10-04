import * as types from "../ActionTpes";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
const initialState = {
  headerItems: [
    {
      label: "Home",
      value: "Home",
      active: true,
      Icon: HomeIcon,
    },
    {
      label: "About us",
      value: "About_US",
      active: false,
      Icon: InfoIcon,
    },
    {
      label: "Contact Us",
      value: "Contact_Us",
      active: false,
      Icon: ContentPaste,
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
