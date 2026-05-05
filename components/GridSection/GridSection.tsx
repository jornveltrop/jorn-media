import Link from "next/link"
import Grid from "../Grid/Grid"
import slugify from "slugify"
import type { LinkItem } from "../../types"

const GridSection = ({...props}) => {
    const section = props.section
    const gridItems = section.items
    const links = section.links

  return (
    <section id={slugify(section.title, { lower: true })} className={section._modelApiKey}>
        <div className={`boxed`}>
            <h2>{section.title}</h2>
        </div>

        <div className="fullWidth">
          <Grid gridItems={gridItems} />
        </div>

        <div className="buttonWrapper">
          {links.map((link: LinkItem) => {
            return (
              <Link key={link.title} href={link.url != "" ? link.url : link.page.slug} className="button">
                {link.title}
              </Link>
            )
          })}
            
        </div>
    </section>
  )
}

export default GridSection
