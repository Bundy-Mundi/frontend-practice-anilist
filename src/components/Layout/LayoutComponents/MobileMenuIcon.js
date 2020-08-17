import React, { useState, useContext } from 'react';
import { Context } from '../../../_context/ContextProvider';
import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from "../../../_reducers/actions";
import { Tablet, Mobile } from "../../MediaQuery";

const MobileMenu = () => {
  const [ rotate, setRotate ] = useState("");
  const ctx = useContext(Context);

  const handleClick = e => {
    if(ctx.state.isMobileMenuOpen){
      ctx.dispatch({ type: CLOSE_MOBILE_MENU  })
      setRotate("rotate_close")
    }else{
      ctx.dispatch({ type: OPEN_MOBILE_MENU })
      setRotate("rotate_open")
    }
  }
  return (

    <>
    <Tablet>
      <div onClick={ e => handleClick(e) } className="absolute p-3 cursor-pointer" style={{ left: 25 }}>
        <i className={`${rotate} fas fa-caret-down transition duration-150 ease-in-out`} style={{ fontSize:"2.8rem" }}></i>
      </div>
    </Tablet>
    
    <Mobile>
      <div onClick={ e => handleClick(e) } className="absolute p-3 cursor-pointer" style={{ left: 25 }}>
        <i className={`${rotate} fas fa-caret-down transition duration-150 ease-in-out`} style={{ fontSize:"2.8rem" }}></i>
      </div>
    </Mobile>
    </>
  )
}

export default MobileMenu;