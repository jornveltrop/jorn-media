import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import navigationStyle from "./navigation.module.css";
import Icon from "../Icon/Icon";

const Navigation = ({ ...props }) => {
  const links = props.links;
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);

  function setCurrentNav(item: string) {
    return router.pathname === `/${item}` ? "menuActive" : "";
  }

  function closeMenu() {
    setToggleMenu(false);
  }

  return (
    <>
      <nav className={`${navigationStyle.navigation} ${toggleMenu ? navigationStyle.openMenu : ""}`}>
        <ul className={navigationStyle.navBar}>
          {links.map((link: { [key: string]: string }) => (
            <li key={link.slug}>
              <Link href={`/${link.slug}`} className={navigationStyle[setCurrentNav(link.slug)]}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={navigationStyle.navTools}>
          <button
            className={navigationStyle.menuButton}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <Icon icon="hamburger" />
            <span className="screenReader">Hoofdmenu</span>
          </button>

          <Link href="/#contact">Contact</Link>
        </ul>
      </nav>

      <div
        className={`${navigationStyle.contentOverlay} ${toggleMenu ? navigationStyle.openMenu : ""}`}
        onClick={closeMenu}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") closeMenu();
        }}
        role="button"
        tabIndex={0}
      />
    </>
  );
};

export default Navigation;