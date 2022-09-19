import Image from "next/image"
import Link from "next/link"
import Icon from "../Icon/Icon"
import cardStyle from "./card.module.css"


const Card = ({...props}) => {
    const card = props.card
  return (
    <li className={cardStyle.card}>
        <Link href={`/${card.slug}`}>
            <a>
                <Icon icon={card.icon} />

                <h4>{card.title}</h4>

                <p>{card.description}</p>
            </a>
        </Link>
    </li>
  )
}

export default Card