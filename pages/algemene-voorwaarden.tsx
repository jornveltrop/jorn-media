import type { NextPage } from "next";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ToTop from "../components/ToTop/ToTop";
import headerQuery from "./api/headerQuery";
import footerQuery from "./api/footerQuery";
import style from "../styles/voorwaarden.module.css";
import type { HeaderData, FooterData } from "../types";

const PDF_PAD = "/algemene-voorwaarden.pdf";

interface VoorwaardenProps {
  header: HeaderData;
  footer: FooterData;
}

const AlgemeneVoorwaarden: NextPage<VoorwaardenProps> = ({ header, footer }) => {
  return (
    <>
      <Head>
        <title>Algemene voorwaarden — Jorn Veltrop</title>
        <meta
          name="description"
          content="De algemene voorwaarden van JornMedia, van toepassing op alle offertes, opdrachten en overeenkomsten voor video, concept, design en websites."
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Header headerData={header} />
      <main className={style.voorwaarden}>
        <div className="boxed">
          <div className={style.intro}>
            <h2>Algemene voorwaarden</h2>
            <p>
              Deze voorwaarden zijn van toepassing op alle offertes, opdrachten
              en overeenkomsten van JornMedia. Je kunt ze hieronder lezen of als
              PDF downloaden.
            </p>
            <div className={style.acties}>
              <a className="button" href={PDF_PAD} download="Algemene voorwaarden - JornMedia.pdf">
                Download PDF
              </a>
              <a href={PDF_PAD} target="_blank" rel="noopener noreferrer">
                Open in nieuw tabblad
              </a>
            </div>
          </div>
        </div>

        <div className="boxed">
          <object
            className={style.viewer}
            data={`${PDF_PAD}#view=FitH`}
            type="application/pdf"
            aria-label="Algemene voorwaarden van JornMedia"
          >
            <div className={style.fallback}>
              <p>
                Je browser kan de PDF hier niet tonen. Open hem in een nieuw
                tabblad of download het bestand.
              </p>
              <a className="button" href={PDF_PAD} target="_blank" rel="noopener noreferrer">
                Open de voorwaarden
              </a>
            </div>
          </object>

          <div className={`${style.fallback} ${style.alleenMobiel}`}>
            <p>
              Op een telefoon lees je de voorwaarden het makkelijkst als PDF.
            </p>
            <a className="button" href={PDF_PAD} target="_blank" rel="noopener noreferrer">
              Open de voorwaarden
            </a>
          </div>
        </div>
      </main>
      <Footer footerData={footer} />
      <ToTop />
    </>
  );
};

export async function getStaticProps() {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });

  const headerData: any = await graphQLClient.request(headerQuery);
  const footerData: any = await graphQLClient.request(footerQuery);

  return {
    props: {
      header: headerData.header,
      footer: footerData.footer,
    },
  };
}

export default AlgemeneVoorwaarden;
