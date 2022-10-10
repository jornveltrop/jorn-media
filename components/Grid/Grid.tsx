import GridItem from "../GridItem/GridItem";
import gridStyle from "./grid.module.css"

const Grid = ({...props}) => {
    const gridItems = props.gridItems;

    const setGridSize = (items:any) => {
      let itemCount = items.length

      if (itemCount == 6) {
        return 'home'
      }
      else if (itemCount > 6) {
        return 'large'
      }
      else return ''
    }

  return (
    <ul className={`${gridStyle.grid} ${gridStyle[setGridSize(gridItems)]}`}>
        {gridItems.map((item: {[key:string]:string}, i:number ) => {
            return <GridItem key={item.id} item={item} index={i} gridSize={setGridSize(gridItems)} />
        })}
    </ul>
  )
}

export default Grid