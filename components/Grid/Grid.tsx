import GridItem from "../GridItem/GridItem";
import gridStyle from "./Grid.module.css"

const Grid = ({...props}) => {
    const gridItems = props.gridItems;
    const gridName = props.gridName;

  return (
    <ul className={`${gridStyle.grid} ${gridStyle[gridName]} fullWidth`}>
        {gridItems.map((item: {[key:string]:string}, i:number ) => {
            return <GridItem item={item} index={i} />
        })}
    </ul>
  )
}

export default Grid