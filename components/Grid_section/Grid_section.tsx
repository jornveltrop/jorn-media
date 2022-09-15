import Link from "next/link"
import Button from "../Button/Button"
import Grid_item from "../Grid_item/Grid_item"
import Grid_section_style from "./Grid_section.module.css"

const Grid_section = ({...props}) => {
    const section = props.section
    const grid_items = section.items

  return (
    <section className={`${section._modelApiKey} ${Grid_section_style[section.title]}`}>
        <div className={`${Grid_section_style.title_container} boxed`}>
            <h2>{section.title}</h2>
        </div>

        <ul className="grid full_width">
            {grid_items.map((item: {[key:string]:string}, i:number ) => {
                return <Grid_item item={item} index={i} />
            })}
        </ul>

        <div className="button_wrapper">
            <Link href={section.allProjects._modelApiKey}>
                <a className="button">{section.allProjects.linkText}</a>
            </Link>
        </div>
    </section>
  )
}

export default Grid_section