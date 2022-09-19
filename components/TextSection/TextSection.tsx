import slugify from "slugify"

const TextSection = ({...props}) => {
  const section = props.section
  
  return (
    <section id={slugify(section.title, { lower: true })} className={`${section._modelApiKey} fullWidth`}>
        <div className="boxed">
          <div className="titleContainer">
              <h2>{section.title}</h2>
              <h3>{section.subtitle}</h3>
              <p>{section.description}</p>
          </div>
        </div>
    </section>
  )
}

export default TextSection