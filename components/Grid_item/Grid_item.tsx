import Image from "next/image"
import Grid_item_style from "./Grid_item.module.css"

const Grid_item = ({...props}) => {
    const item = props.item
    let i = props.index
    i++
    const gridImage: any  = item.gridImage
    const imagePositionX = gridImage.focalPoint.x * 100
    const imagePositionY = gridImage.focalPoint.y * 100
    const tag: any = item.tag

  return (
    <li className={`grid_item_${i} ${Grid_item_style.grid_item}`} 
        style={{ 
            gridArea: `item-${i}`
        }}
    >
        <a>
            <div>
                <Image src={gridImage.url} layout="fill" objectFit="cover" objectPosition={`${imagePositionX}% ${imagePositionY}%`} alt={gridImage.alt} />
            </div>

            <div className={Grid_item_style.overlay_container}>
                <div className={Grid_item_style.overlay}>
                    <div>
                        <h4>{item.title}</h4>
                        <h5>{item.client}</h5>
                    </div>
                    <span className={`tag ${Grid_item_style[tag.tag]}`}>{tag.tag}</span>
                </div>  
            </div>
        </a>
    </li>
  )
}

export default Grid_item