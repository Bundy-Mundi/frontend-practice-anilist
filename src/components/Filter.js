import React, { useContext } from "react";
import { Context } from "../_context/ContextProvider";
import { CLOSE_MOBILE_MENU} from "../_reducers/actions";
import { Tablet, Mobile } from "./MediaQuery";

export default () => {
  const { tailwind, state, dispatch } = useContext(Context);
  const handleClick = () => {
    dispatch({ type: CLOSE_MOBILE_MENU });
  }
  return (
    <>
      <Tablet>
        {
          state.isMobileMenuOpen ? 
          <div onClick={handleClick} style={{ opacity: 1, zIndex: tailwind.filter_zIndex, backgroundColor: tailwind._filterColor}} className={tailwind.filter}/>
            :
          <div style={{ opacity: 0, zIndex: tailwind.filter_zIndex, backgroundColor: "transparent"}} className={tailwind.filter}/>
        }
      </Tablet>
      <Mobile>
        {
          state.isMobileMenuOpen ? 
          <div onClick={handleClick} style={{ opacity: 1, zIndex: tailwind.filter_zIndex, backgroundColor: tailwind._filterColor}} className={tailwind.filter}/>
            :
          <div style={{ opacity: 0, zIndex: tailwind.filter_zIndex, backgroundColor: "transparent"}} className={tailwind.filter}/>
        }
      </Mobile>
    </>
  )
}