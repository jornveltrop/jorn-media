import Grid from "../Grid/Grid"

const GridSection = ({...props}) => {
    const section = props.section
    const gridItems = section.items
    const gridName = section.title

  return (
    <section className={section._modelApiKey}>
        <div className={`boxed`}>
            <h2>{section.title}</h2>
        </div>

        <Grid gridItems={gridItems} gridName={gridName} />

        <div className="buttonWrapper">
            
        </div>
    </section>
  )
}

export default GridSection