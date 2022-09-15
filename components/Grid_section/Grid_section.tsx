import Link from "next/link"
import Grid from "../Grid/Grid"

const Grid_section = ({...props}) => {
    const section = props.section
    const grid_items = section.items
    const grid_name = section.title

  return (
    <section className={section._modelApiKey}>
        <div className={`boxed`}>
            <h2>{section.title}</h2>
        </div>

        <Grid grid_items={grid_items} grid_name={grid_name} />

        <div className="button_wrapper">
            <Link href={section.allProjects._modelApiKey}>
                <a className="button">{section.allProjects.linkText}</a>
            </Link>
        </div>
    </section>
  )
}

export default Grid_section