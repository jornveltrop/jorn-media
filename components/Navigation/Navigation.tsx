import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
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
              <li key={link.slug}>
                <Link href={`/${link.slug}`}>
                  <a className={navigationStyle[setCurrentNav(link.slug)]}>{link.title}</a>
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

          <Link href="/#contact">Contact</Link>
        </ul>
      </nav>
      <div className={`${navigationStyle.contentOverlay}  ${(toggleMenu ? navigationStyle.openMenu : '')}`} onClick={() => setToggleMenu(!toggleMenu)}></div>
    </>
  )
}

export default Navigation

function setCurrentNav(item:string) {
  const router = useRouter();
  const currentUrl = router.pathname
  const menuItem = `/${item}`
  
  if (currentUrl == menuItem) {
    return "menuActive"
  }
  return ''
}