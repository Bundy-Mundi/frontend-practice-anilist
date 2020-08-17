import React from "react";
import { Link } from "react-router-dom";
import { Desktop, Tablet, Mobile } from "../../MediaQuery";
import menu from "../../../utils/menu";
import MobileMenu from "./MobileMenuIcon";

export default ({ nav_style, logo_style, menuItem_style, menuContainer_style, badge_style, badge_container_style }) => {

  const Logo = ({ url, to, style }) => {
    return (
      <Link className="w-20 h-20 flex justify-center items-center" to={ to }>
        <img className={style} src={url} alt=""></img>
      </Link>
    )
  };

  const MenuList = ({ data, menuContainer_style, menuItem_style }) => {
    return(
      <ul className={ menuContainer_style }>
        {
          data.map((v, k)=>(
            <Link key={k} className={ menuItem_style } to={ v.to }>
              <li key={k} className="flex justify-center items-center">
                { v.name }
              </li>
            </Link>))
        }
      </ul>
    )
  };

  const ProfileBadge = ({ container_style, badge_style, image_url }) => {
    return (
      <span className={ container_style }>
        {
          image_url ? 
            <img className={ badge_style } src={ image_url } alt=""/>
          :
            <p className="font-hairline text-xl text-white rounded-full bg-blue-700 flex items-center justify-center h-full w-full text-center">B</p>
        }

      </span>
    )
  }

  return (
    <>
    <Desktop>
      <nav className={ nav_style }>
        <Logo style={ `ml-10 ${logo_style}` } url={`${process.env.PUBLIC_URL}/image/logo.png`} to="/"/>
        <MenuList data={ menu } menuContainer_style={ menuContainer_style } menuItem_style={ menuItem_style }/>
        <ProfileBadge container_style={ badge_container_style } badge_style={ badge_style }/>
      </nav>
    </Desktop>

    <Tablet>
      <nav className={ nav_style }>
        <MobileMenu/>
        <Logo style={ logo_style } url={`${process.env.PUBLIC_URL}/image/logo.png`} to="/"/>
      </nav>
    </Tablet>

    <Mobile>
      <nav className={ nav_style }>
        <MobileMenu/>
        <Logo style={ logo_style } url={`${process.env.PUBLIC_URL}/image/logo.png`} to="/"/>
      </nav>
    </Mobile>
    </>
  )
}