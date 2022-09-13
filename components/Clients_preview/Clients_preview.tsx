import Image from "next/image";
import Link from "next/link";
import Clients_preview_style from "./Clients_preview.module.css"

const Clients_preview = ({...props}) => {
    const clients = props.clients_preview;
    console.log(clients)
  return (
    <ul className={Clients_preview_style.clients_preview}>
        {clients.map((client: {clientImage: {[key:string]:string}}) => (
            <li>
                <Link href={'/'}>
                    <a>
                        <Image src={client.clientImage.url} alt={client.clientImage.alt} width={client.clientImage.width} height={client.clientImage.height} layout="responsive"/>  
                    </a>
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default Clients_preview