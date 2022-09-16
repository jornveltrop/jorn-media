import Link from "next/link"
import navBarStyle from "./navBar.module.css"

const NavBar = () => {
  return (
    <ul className={navBarStyle.navBar}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/">Projecten</Link></li>
      <li><Link href="/#over-mij">Over mij</Link></li>
      <li><Link href="/#skills">Skills</Link></li>
    </ul>
  )
}

export default NavBar