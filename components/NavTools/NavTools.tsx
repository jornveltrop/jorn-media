import headerStyle from "../Header/Header.module.css"

type NavProps = {
  children: React.ReactNode;
}

const NavTools: React.FunctionComponent<NavProps> = ({children}) => {
  return (
    <ul className={headerStyle.navTools}>
        {children}
    </ul>
  )
}

export default NavTools