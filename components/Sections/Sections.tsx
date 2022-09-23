import Cards_section from "../Cards_section/Cards_section"
import Grid_section from "../Grid_section/Grid_section"
import Text_section from "../Text_section/Text_section"


const Sections = ({ ...props }) => {
    const sections = props.sections
  return (
    <>
        {sections.map((section: {[key:string]:string}) => {
            console.log(section)
            if (section._modelApiKey == 'grid_section') {
                return <Grid_section section={section} />
            } 
            else if (section._modelApiKey == 'text_section') {
                return <Text_section section={section} />
            }
            else if (section._modelApiKey == 'cards_section') {
                return <Cards_section section={section} />
            }
            else return
        })}
    </>
  )
}

export default Sections