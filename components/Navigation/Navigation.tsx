import Link from "next/link";
import { useState } from "react";
import navigationStyle from "./navigation.module.css"
import Icon from "../Icon/Icon";

const Navigation = ({...props}) => {
  const links = props.links
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className={`${navigationStyle.navigation} ${(toggleMenu ? navigationStyle.openMenu : '')}`}>
        <ul className={navigationStyle.navBar}>
          {links.map((link:{[key:string]:string}) => {
            return (
              <li>
                <Link href={`/${link.slug}`}>
                  <a>{link.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>

        <ul className={navigationStyle.navTools}>
          <button className={navigationStyle.menuButton} onClick={() => setToggleMenu(!toggleMenu)}>
            <Icon icon="hamburger" />
            <span className="screenReader">Hoofdmenu</span>
          </button>

          <Link href="#contact">Contact</Link>
        </ul>
      </nav>
      <div className={`${navigationStyle.contentOverlay}  ${(toggleMenu ? navigationStyle.openMenu : '')}`} onClick={() => setToggleMenu(!toggleMenu)}></div>
    </>
  )
}

export default Navigation