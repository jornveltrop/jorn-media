import Image from "next/image"
import gridItemStyle from "./gridItem.module.css"

const GridItem = ({...props}) => {
    const item = props.item
    let i = props.index
    i++
    const headerImage: any  = item.headerImage
    const imagePositionX = headerImage.focalPoint.x * 100
    const imagePositionY = headerImage.focalPoint.y * 100
    const skillTag: any = item.skill

  return (
    <li className={`gridItem${i} ${gridItemStyle.gridItem}`} 
        style={{ 
            gridArea: `item${i}`
        }}
    >
        <a>
            <div>
                <Image src={headerImage.url} layout="fill" objectFit="cover" objectPosition={`${imagePositionX}% ${imagePositionY}%`} alt={headerImage.alt} />
            </div>

            <div className={gridItemStyle.overlayContainer}>
                <div className={gridItemStyle.overlay}>
                    <div>
                        <h4>{item.title}</h4>
                        <h5>{item.client}</h5>
                    </div>
                    <span className={`tag ${gridItemStyle[skillTag.title]}`}>{skillTag.title}</span>
                </div>  
            </div>
        </a>
    </li>
  )
}

export default GridItem