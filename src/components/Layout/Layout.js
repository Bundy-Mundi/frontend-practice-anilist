import React, { useContext } from "react";
import Header from "./LayoutComponents/Header";
import Main from "./LayoutComponents/Main";
import Footer from "./LayoutComponents/Footer";
import MobileMenuTab from "./LayoutComponents/MoblieMenuTab";
import Filter from '../Filter';
import { Context } from "../../_context/ContextProvider";

export default ({ children, mainHeight }) => {
  const ctx = useContext(Context);
  return (
    <>
      <Header/>
      <Filter/>
      <MobileMenuTab zIndex={ ctx.tailwind.mobile_menuTab_zIndex }/>

      <Main height={mainHeight} children={children}/>
      <Footer/>
    </>
  )
};