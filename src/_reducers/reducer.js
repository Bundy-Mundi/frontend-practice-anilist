import { OPEN_MOBILE_MENU } from "./actions";
import { CLOSE_MOBILE_MENU } from "./actions";

export const INITIAL_STATE = {
  isMobileMenuOpen: false
}

const reducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case OPEN_MOBILE_MENU:
      return { ...state, isMobileMenuOpen: true };
    case CLOSE_MOBILE_MENU:
        return { ...state, isMobileMenuOpen: false };
    default:
      return state;
  }
}

export default reducer;