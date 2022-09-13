import Link from "next/link";
import { useState } from "react";
import headerStyle from "../Header/Header.module.css"
import Icon from "../Icon/Icon";
import NavBar from "../Nav-bar/Nav-bar";
import NavTools from "../Nav-tools/Nav-tools";

const Navigation = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className={headerStyle.navigation + ' ' + (toggleMenu ? `${headerStyle.openMenu}` : '')}>
        <NavBar />

        <NavTools>
          <button className={headerStyle.menuButton} onClick={() => setToggleMenu(!toggleMenu)}>
            <Icon icon="hamburger" />
            <span className="screen-reader">Hoofdmenu</span>
          </button>

          <Link href="#contact">Contact</Link>
        </NavTools>
        
      </nav>
      <div className={headerStyle.contentOverlay + ' ' + (toggleMenu ? `${headerStyle.openMenu}` : '')} onClick={() => setToggleMenu(!toggleMenu)}></div>
    </>
  )
}

export default Navigation