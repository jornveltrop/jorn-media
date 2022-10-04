import React from "react";
import Image from "next/image";
import headerSectionStyle from "./headerSection.module.css";

const HeaderSection = ({ ...props }) => {
  return (
    <section className={headerSectionStyle.headerSection}>
      <header className={headerSectionStyle.header}>
        <Image
          src={props.headerImage.url}
          height={props.headerImage.height}
          width={props.headerImage.width}
          alt={props.headerImage.alt}
        ></Image>
        <span>{props.skill.title}</span>
      </header>
      <h1>{props.title}</h1>
      <p>{props.client}</p>
      <ul>
        <li>tag 1</li>
        <li>tag 2</li>
      </ul>
    </section>
  );
};

export default HeaderSection;
