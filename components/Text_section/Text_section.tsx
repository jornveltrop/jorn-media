

const Text_section = ({...props}) => {
  const section = props.section
  
  return (
    <section className={`${section._modelApiKey} full_width`}>
        <div className="boxed">
          <div className="title-container">
              <h2>{section.title}</h2>
              <h3>{section.subtitle}</h3>
              <p>{section.description}</p>
          </div>
        </div>
    </section>
  )
}

export default Text_section