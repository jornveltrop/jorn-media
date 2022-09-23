import Grid_item from "../Grid_item/Grid_item";
import Grid_style from "./Grid.module.css"

const Grid = ({...props}) => {
    const grid_items = props.grid_items;
    const grid_name = props.grid_name;

  return (
    <ul className={`${Grid_style.grid} ${Grid_style[grid_name]} full_width`}>
        {grid_items.map((item: {[key:string]:string}, i:number ) => {
            return <Grid_item item={item} index={i} />
        })}
    </ul>
  )
}

export default Grid