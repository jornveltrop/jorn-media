import type { NextPage } from "next";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import Header from "../components/Header/Header";
import homeStyle from "../styles/home.module.css";
import projectenQuery from "./api/projectenQuery";
import headerQuery from "./api/headerQuery";
import Footer from "../components/Footer/Footer";
import footerQuery from "./api/footerQuery";
import ToTop from "../components/ToTop/ToTop";
import Grid from "../components/Grid/Grid";
import type { ProjectenData, HeaderData, FooterData } from "../types";

interface ProjectenProps {
  projecten: ProjectenData;
  header: HeaderData;
  footer: FooterData;
}

const Projecten: NextPage<ProjectenProps> = ({ projecten, header, footer }) => {
  const projectPage = projecten.projectPage;
  const allProjects = projecten.allProjects;


  return (
    <>
      <Head>
        <title>Projecten — Jorn Veltrop</title>
        <meta name="description" content="Bekijk alle projecten van Jorn Veltrop: video producties, concepten, designs en websites voor uiteenlopende opdrachtgevers." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Header headerData={header} className={`boxed`} />
      <main className={homeStyle.home}>
        <div className={`boxed`}>
          <h2>{projectPage.title}</h2>
        </div>
        <div className="fullWidth center">
          {/* <Filter skills={allSkills}/> */}
          <Grid gridItems={allProjects} />
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
  const projectenData: any
   = await graphQLClient.request(projectenQuery);
  const headerData: any = await graphQLClient.request(headerQuery);
  const footerData: any = await graphQLClient.request(footerQuery);
  const data = {
    projecten: projectenData,
    header: headerData.header,
    footer: footerData.footer,
  };

  return {
    props: data,
  };
}

export default Projecten;
