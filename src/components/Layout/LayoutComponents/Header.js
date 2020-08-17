import React, { useContext } from "react";
import { Context } from "../../../_context/ContextProvider";
import { Desktop, Tablet, Mobile } from "../../MediaQuery";
import NavBar from './NavBar';

const HEADER_STYLE = {
  width: "100%",
  position: "sticky",
  top: 0,
  backgroundColor:"rgba(255, 255, 255, 0.8)",
  backdropFilter: "saturate(200%) blur(10px)"
}

export default () => {
  const theme = useContext(Context);
  return (
    <>
    <Desktop>
      <header 
        style={{ 
          ...HEADER_STYLE,
          height: "5.2rem"
        }}
        className="shadow-lg">
        <NavBar 
          nav_style={ theme.tailwind.navbar_desktop }
          logo_style={ theme.tailwind.logo_xs }
          menuContainer_style={ theme.tailwind.menuContainer_desktop }
          menuItem_style={ theme.tailwind.menuItem_desktop }
          badge_container_style={ theme.tailwind.profile_badge_container }
          badge_style={ theme.tailwind.profile_badge }
        />
      </header>
    </Desktop>

    <Tablet>
      <header 
        style={{ 
          ...HEADER_STYLE,
          height: "8rem",
          zIndex: theme.tailwind.header_zIndex
        }}
        className="shadow-lg">
        <NavBar 
          nav_style={ theme.tailwind.navbar_tablet }
          logo_style={ theme.tailwind.logo_small }
        />
      </header>
    </Tablet>

    <Mobile>
      <header 
        style={{ 
          ...HEADER_STYLE,
          height: "8rem",
          zIndex: theme.tailwind.header_zIndex
        }}
        className="shadow-lg">
        <NavBar 
          nav_style={ theme.tailwind.navbar_mobile }
          logo_style={ theme.tailwind.logo_small }
          menuItem_style={ theme.tailwind.menuItem_desktop_mobile }
        />
      </header>
    </Mobile>
    </>
  )
}