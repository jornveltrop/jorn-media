import Image from "next/image";
import Link from "next/link";
import clientsPreviewStyle from "./clientsPreview.module.css"

const ClientsPreview = ({...props}) => {
    const clients = props.clientsPreview;

  return (
    <ul className={clientsPreviewStyle.clientsPreview}>
        {clients.map((client: any) => (
            <li>
                <Link href={`${client.slug}`}>
                    <a>
                        <Image src={client.clientImage.url} alt={client.clientImage.alt} width={client.clientImage.width} height={client.clientImage.height} layout="responsive"/>  
                    </a>
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default ClientsPreview