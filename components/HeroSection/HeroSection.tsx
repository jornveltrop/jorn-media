import Image from "next/image";
import Link from "next/link";
import ClientsPreview from "../ClientsPreview/ClientsPreview";
import Icon from "../Icon/Icon";
import SkillsSummary from "../SkillsSummary/SkillsSummary";
import heroSectionStyle from "./heroSection.module.css";

const HeroSection = ({ ...props }) => {
  const section = props.section;
  const backgroundMobile = section.backgroundImages[1];
  const backgroundDesktop = section.backgroundImages[0];

  return (
    <section className={heroSectionStyle.hero}>
      <div className={heroSectionStyle.backgroundDesktopContainer}>
        <Image
          className={heroSectionStyle.backgroundDesktop}
          src={backgroundDesktop.url}
          layout="fill"
          objectFit="cover"
          objectPosition="right bottom"
          alt={backgroundDesktop.alt}
        />
      </div>

      <div className={heroSectionStyle.content}>
        <div className={`${heroSectionStyle.contentContainer} boxed`}>
          <div className={heroSectionStyle.introduction}>
            <div className={heroSectionStyle.titleContainer}>
              <h1>{section.title}</h1>
            </div>

            <div className={heroSectionStyle.taglineContainer}>
              <h3>{section.tagline}</h3>
            </div>

            <SkillsSummary skillsSummary={section.skillsSummary} />

            <div className={heroSectionStyle.descriptionContainer}>
              <p>{section.description}</p>
            </div>

            <div className={heroSectionStyle.backgroundMobileContainer}>
              <Image
                src={backgroundMobile.url}
                height={backgroundMobile.height}
                width={backgroundMobile.width}
                alt={backgroundMobile.alt}
              />
            </div>
          </div>

          <div className={heroSectionStyle.heroBottom}>
            <div className={heroSectionStyle.scrollDownContainer}>
              <Link href="#projecten">
                <a>
                  <Icon icon="scrollDown" />
                </a>
              </Link>
            </div>

            <ClientsPreview clientsPreview={section.sections[0].clients} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
