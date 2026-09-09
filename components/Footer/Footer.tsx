import Link from "next/link";
import footerStyle from "./footer.module.css";

const Footer = ({ ...props }) => {
  const footerData = props.footerData;
  return (
    <footer className={footerStyle.footer}>
      <div className="boxed">
        <ul>
          <li>
            <p>{footerData.copyrightTag}</p>
          </li>
          <li>
            <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
