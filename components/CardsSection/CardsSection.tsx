
const CardsSection = ({...props}) => {
  const section = props.section

  return (
    <section className={`${section._modelApiKey} fullWidth`}>
        <div className="boxed">
          <div className="titleContainer">
              <h2>{section.title}</h2>
          </div>
        </div>
    </section>
  )
}

export default CardsSection