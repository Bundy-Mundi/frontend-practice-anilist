import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { Context } from "../../../_context/ContextProvider";
import menu from "../../../utils/menu";
import { Tablet, Mobile } from "../../MediaQuery";

const MenuTab = ({ zIndex, tailwind, translate, onClick }) => {
  return (        
    <ul className={tailwind.mobile_menu_tab} style={{ height:"70vh", width:"18rem", top: "8rem", zIndex, transform:`translateX(${translate ? "0%" : "-100%"})` }}>
      <i onClick={ onClick ?? null } className="absolute fas fa-times cursor-pointer text-2xl" style={{ top:"2.355rem", left: "2.8rem" }}></i> 
      <div className="justify-center align-center flex">
        <p className="pt-10 pb-6 font-semibold text-xl uppercase">Menu</p>
      </div>
      {
        menu.map((v,k) => (
          <Link to={v.to}><li onClick={ onClick ?? null } className={tailwind.mobile_menu_item}>{v.name}</li></Link>
        ))
      }
    </ul>
  )
};

export default ({ zIndex }) => {

  const { tailwind, state, dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({ type: "CLOSE_MOBILE_MENU" })
  }

  return (
    <>
      <Tablet>
        { state.isMobileMenuOpen ? 
          <MenuTab onClick={handleClick} zIndex={zIndex} translate={true} tailwind={tailwind}/>
            :
          <MenuTab zIndex={zIndex} translate={false} tailwind={tailwind}/> }
      </Tablet>

      <Mobile>
        { state.isMobileMenuOpen ? 
          <MenuTab onClick={handleClick} zIndex={zIndex} translate={true} tailwind={tailwind}/>
            :
          <MenuTab zIndex={zIndex} translate={false} tailwind={tailwind}/> }
      </Mobile>
    </>
  )
}