

const Cards_section = ({...props}) => {
  const section = props.section

  return (
    <section className={`${section._modelApiKey} full_width`}>
        <div className="boxed">
          <div className="title-container">
              <h2>{section.title}</h2>
          </div>
        </div>
    </section>
  )
}

export default Cards_section