import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../Navigation/Navigation'
import headerStyle from "./header.module.css"

const Header = ({...props}) => {
  const headerData = props.headerData

  return (
    <>
      <header className={headerStyle.header}>
          <div className={`${headerStyle.headerContainer} boxed`}>
              <Link href="/">
                <a className={headerStyle.siteLogoContainer}>
                  <Image className={headerStyle.siteLogo} src={headerData.siteLogo.url} alt={headerData.siteLogo.alt} width={headerData.siteLogo.width} height={headerData.siteLogo.height}/>
                </a>  
              </Link>

              <Navigation links={headerData.links} />
          </div>
      </header>
    </>
    
  )
}

export default Header