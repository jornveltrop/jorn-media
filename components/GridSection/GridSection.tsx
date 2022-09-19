import Link from "next/link"
import Grid from "../Grid/Grid"
import slugify from "slugify"

const GridSection = ({...props}) => {
    const section = props.section
    const gridItems = section.items
    const gridName = section.title

  return (
    <section id={slugify(section.title, { lower: true })} className={section._modelApiKey}>
        <div className={`boxed`}>
            <h2>{section.title}</h2>
        </div>

        <Grid gridItems={gridItems} gridName={gridName} />

        <div className="buttonWrapper">
            <Link href={'/'} >
              <a className="button">Alle projecten</a>
            </Link>
        </div>
    </section>
  )
}

export default GridSection