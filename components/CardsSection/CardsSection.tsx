import slugify from "slugify"
import Card from "../Card/Card"
import cardsSectionStyle from "./cardsSection.module.css"

const CardsSection = ({...props}) => {
  const section = props.section
  
  console.log(section)
  return (
    <section id={slugify(section.title, { lower: true })} className={`${section._modelApiKey} fullWidth`}>
        <div className="boxed">
          <div className="titleContainer">
              <h2>{section.title}</h2>
          </div>

          <ul className={cardsSectionStyle.cards}>
            {section.cards.map((card: {[key:string]:any}) => (
              <Card card={card} />
            ))}
          </ul>
        </div>
    </section>
  )
}

export default CardsSection