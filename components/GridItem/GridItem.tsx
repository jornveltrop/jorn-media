import Image from "next/image";
import Link from "next/link";
import gridItemStyle from "./gridItem.module.css";

const GridItem = ({ ...props }) => {
  const item = props.item;
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
    imagePositionX = headerImage.focalPoint.x * 100;
    imagePositionY = headerImage.focalPoint.y * 100;
    headerImageAlt = headerImage.alt;
  }
  const skill: any = item.skill;

  return (
    <li
      key={item.id}
      className={`gridItem${i} ${gridItemStyle.gridItem} ${skill.slug}`}
      style={{ gridArea: gridSize == "home" ? `item${i}` : "unset" }}
    >
      <Link href={`/${item.slug}`}>
        <a>
          <Image
            src={headerImageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition={`${imagePositionX || 50}% ${imagePositionY || 50}%`}
            alt={headerImageAlt}
          />

          <div className={gridItemStyle.overlayContainer}>
            <div className={gridItemStyle.overlay}>
              <div>
                <h4>{item.title}</h4>
                <h5>{item.client}</h5>
              </div>
              <span className="tag">{skill.title}</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default GridItem;
