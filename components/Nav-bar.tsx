import Link from "next/link"
import headerStyle from "./Header/Header.module.css"

const NavBar = () => {
  return (
    <ul className={headerStyle.navBar}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/">Projecten</Link></li>
      <li><Link href="/#over-mij">Over mij</Link></li>
      <li><Link href="/#skills">Skills</Link></li>
    </ul>
  )
}

export default NavBar