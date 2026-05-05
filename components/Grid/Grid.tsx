import GridItem from "../GridItem/GridItem";
import gridStyle from "./grid.module.css"
import type { GridProject } from "../../types"

const Grid = ({...props}) => {
    const gridItems: GridProject[] = props.gridItems;

    const setGridSize = (items: GridProject[]) => {
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
        {gridItems.map((item: GridProject, i: number) => {
            return <GridItem key={item.id} item={item} index={i} gridSize={setGridSize(gridItems)} />
        })}
    </ul>
  )
}

export default Grid