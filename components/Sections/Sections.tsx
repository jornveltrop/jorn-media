import CardsSection from "../CardsSection/CardsSection"
import GridSection from "../GridSection/GridSection"
import HeroSection from "../HeroSection/HeroSection"
import TextSection from "../TextSection/TextSection"


const Sections = ({ ...props }) => {
    const sections = props.sections
    
  return (
    <>
        {sections.map((section: {[key:string]:string}) => {

            if (section._modelApiKey == 'grid_section') {
                return <GridSection section={section} />
            } 
            else if (section._modelApiKey == 'text_section') {
                return <TextSection section={section} />
            }
            else if (section._modelApiKey == 'hero_section') {
                return <HeroSection section={section}/>
            }
            else if (section._modelApiKey == 'cards_section') {
                return <CardsSection section={section} />
            }
            else return
        })}
    </>
  )
}

export default Sections