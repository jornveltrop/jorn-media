import React from "react";
import Image from "next/image";
import headerSectionStyle from "./headerSection.module.css";

const HeaderSection = ({ ...props }) => {
  let imagePositionX = 50;
  let imagePositionY = 50;

  if (props.headerImage != null) {
    let headerImage = props.headerImage;
    imagePositionX = headerImage.focalPoint.x * 100;
    imagePositionY = headerImage.focalPoint.y * 100;
  }

  return (
    <section
      className={`${headerSectionStyle.headerSection} ${props.className}`}
    >
      <div className="boxed">
        <header className={`${headerSectionStyle.header} relative`}>
          <Image
            fill
            style={{ objectFit: "cover", objectPosition: `${imagePositionX || 50}% ${imagePositionY || 50}%` }}
            src={props.headerImage.url}
            alt={props.headerImage.alt}
            className={headerSectionStyle.headerImage}
            priority
          />
          <div className={headerSectionStyle.overlayContainer}>
            <div className={headerSectionStyle.overlay}>
              <div className={headerSectionStyle.tags}>
                {props.skill.map((s: { title: string; slug: string }) => (
                  <span key={s.slug} className={headerSectionStyle.tag}>{s.title}</span>
                ))}
              </div>
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
