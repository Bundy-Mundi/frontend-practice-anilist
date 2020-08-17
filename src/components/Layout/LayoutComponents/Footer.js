import React, { useContext } from "react";
import { Context } from "../../../_context/ContextProvider";
import { Desktop, Mobile, Tablet } from "../../MediaQuery";


export default ({ height }) => {
  const { tailwind } = useContext(Context);

  const Heading = ({ title }) => {
    return <p className={tailwind.heading_sm}>{ title }</p>
  }
  
  const CopyRight = () =>(
      <p className="">Since 2020 Example Corp All Rights Reserved</p>
    )

  return (
    <>
    <Desktop>
      <footer className={ tailwind.footer_container_desktop } style={{
          height: height ?? null,
          backgroundColor: tailwind._footerColor
        }}>

          <div className={tailwind.footer_grid_item}>
            <Heading title="FIRST CONTENT"/>
          </div>
          {/* EXAMPLE FOOTER MENU CONTAINER */}
          <div className={tailwind.footer_grid_item}>
            <Heading title="Pages"/>
            <div className="mt-8">
              <p className="mt-4">HOME</p>
              <p className="mt-4">ABOUT</p>
              <p className="mt-4">CONTACT</p>
            </div>

          </div>
          <div className={tailwind.footer_grid_item}>
            <Heading title="THIRD CONTENT"/>
          </div>
          <div className={tailwind.footer_grid_item}>
            <Heading title="FOURTH CONTENT"/>
          </div>
      </footer>
    </Desktop>

    <Tablet>
      <footer className={ tailwind.footer_container_mobile } style={{
        height: height ?? null,
        backgroundColor: tailwind._footerColor
      }}>
        <div className={tailwind.footer_flex_item}>COPYRIGHT</div>
      </footer>
    </Tablet>

    <Mobile>
      <footer className={ tailwind.footer_container_mobile } style={{
          height: height ?? null,
          backgroundColor: tailwind._footerColor
        }}>
        <div className={tailwind.footer_flex_item}>COPYRIGHT</div>
      </footer>
    </Mobile>
    </>
  )
};