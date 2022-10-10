import CardsSection from "../CardsSection/CardsSection";
import GridSection from "../GridSection/GridSection";
import HeroSection from "../HeroSection/HeroSection";
import TextSection from "../TextSection/TextSection";

const Sections = ({ ...props }) => {
  let sections = [];
  if (props.sections) {
    sections = props.sections;
  }

  return (
    <>
      {sections.map((section: { [key: string]: string }) => {
        if (section._modelApiKey == "grid_section") {
          return <GridSection key={section.id} section={section} />;
        } else if (section._modelApiKey == "text_section") {
          return <TextSection key={section.id} section={section} />;
        } else if (section._modelApiKey == "hero_section") {
          return <HeroSection key={section.id} section={section} />;
        } else if (section._modelApiKey == "cards_section") {
          return <CardsSection key={section.id} section={section} />;
        } else return;
      })}
    </>
  );
};

export default Sections;
