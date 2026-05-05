import Image from "next/image";
import Link from "next/link";
import clientsPreviewStyle from "./clientsPreview.module.css"
import type { Client } from "../../types"

const ClientsPreview = ({...props}) => {
    const clients = props.clientsPreview;

  return (
    <ul className={clientsPreviewStyle.clientsPreview}>
        {clients.map((client: Client) => (
            <li key={client.slug}>
                <Link key={client.slug} href={`${client.slug}`}>
                    <Image src={client.clientImage.url} alt={client.clientImage.alt} width={client.clientImage.width} height={client.clientImage.height} style={{ width: "100%", height: "auto" }} />
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default ClientsPreview