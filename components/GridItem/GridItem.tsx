import Image from "next/image";
import Link from "next/link";
import gridItemStyle from "./gridItem.module.css";
import type { GridProject, Skill } from "../../types";

const GridItem = ({ ...props }) => {
  const item: GridProject = props.item;
  const gridSize = props.gridSize;
  let i = props.index;
  i++;

  let headerImageUrl = "/fotos/placeholder.jpg";
  let imagePositionX = 50;
  let imagePositionY = 50;
  let headerImageAlt = "Placeholder JornMedia";

  if (item.headerImage != null) {
    let headerImage = item.headerImage;
    headerImageUrl = headerImage.url;
    imagePositionX = (headerImage.focalPoint?.x ?? 0.5) * 100;
    imagePositionY = (headerImage.focalPoint?.y ?? 0.5) * 100;
    headerImageAlt = headerImage.alt;
  }

  const skillSlugs = item.skill.map((s: Skill) => s.slug).join(" ");

  return (
    <li
      key={item.id}
      className={`gridItem${i} ${gridItemStyle.gridItem} ${skillSlugs}`}
      style={{ gridArea: gridSize == "home" ? `item${i}` : "unset" }}
    >
      <Link href={`/${item.slug}`}>
        <Image
          src={headerImageUrl}
          fill
          style={{ objectFit: "cover", objectPosition: `${imagePositionX || 50}% ${imagePositionY || 50}%` }}
          alt={headerImageAlt}
          priority
        />

        <div className={gridItemStyle.overlayContainer}>
          <div className={gridItemStyle.overlay}>
            <div>
              <h4>{item.title}</h4>
              <h5>{item.client}</h5>
            </div>
          </div>
          <div className={gridItemStyle.tags}>
            {item.skill.map((s: Skill) => (
              <span key={s.slug} className={gridItemStyle.tag}>{s.title}</span>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default GridItem;
