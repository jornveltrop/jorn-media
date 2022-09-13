import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../Navigation/Navigation'
import headerStyle from "./Header.module.css"

const Header = ({...props}) => {
  return (
    <>
      <header className={headerStyle.header}>
          <div className={`${headerStyle.headerContainer} boxed` }>
              <Link href="/">
                <a className={headerStyle.siteLogoContainer}>
                  <Image className={headerStyle.siteLogo} src={props.siteLogo.url} alt={props.siteLogo.alt} width={props.siteLogo.width} height={props.siteLogo.height}/>
                </a>  
              </Link>

              <Navigation />
          </div>
      </header>
    </>
    
  )
}

export default Header