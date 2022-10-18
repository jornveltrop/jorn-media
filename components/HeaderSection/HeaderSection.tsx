import React from "react";
import Image from "next/image";
import headerSectionStyle from "./headerSection.module.css";

const HeaderSection = ({ ...props }) => {
  let headerImageUrl = "/fotos/placeholder.jpg";
  let imagePositionX = 50;
  let imagePositionY = 50;
  let headerImageAlt = "Placeholder JornMedia";

  if (props.headerImage != null) {
    let headerImage = props.headerImage;
    headerImageUrl = headerImage.url;
    imagePositionX = headerImage.focalPoint.x * 100;
    imagePositionY = headerImage.focalPoint.y * 100;
    headerImageAlt = headerImage.alt;
  }

  return (
    <section
      className={`${headerSectionStyle.headerSection} ${props.className}`}
    >
      <div className="boxed">
        <header className={`${headerSectionStyle.header} relative`}>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition={`${imagePositionX || 50}% ${imagePositionY || 50}%`}
            src={props.headerImage.url}
            alt={props.headerImage.alt}
            className={headerSectionStyle.headerImage}
          ></Image>
          <div className={headerSectionStyle.overlayContainer}>
            <div className={headerSectionStyle.overlay}>
              <span className="tag">{props.skill.title}</span>
            </div>
          </div>
        </header>

        <h1>{props.title}</h1>
        <p>{props.client}</p>
      </div>
    </section>
  );
};

export default HeaderSection;
