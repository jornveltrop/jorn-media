import { GraphQLClient } from "graphql-request";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import footerQuery from "./api/footerQuery";
import headerQuery from "./api/headerQuery";
import getProjectQuery from "./api/projectQuery";
import projectenQuery from "./api/projectenQuery";
import { NextPage } from "next";
import Footer from "../components/Footer/Footer";
import ToTop from "../components/ToTop/ToTop";
import Head from "next/head";
import Header from "../components/Header/Header";
import Sections from "../components/Sections/Sections";
import projectStyle from "../styles/project.module.css";
import type { ProjectData, HeaderData, FooterData, GridProject } from "../types";

interface ProjectProps {
  project: ProjectData;
  header: HeaderData;
  footer: FooterData;
}

const Project: NextPage<ProjectProps> = ({ project, header, footer }) => {
  return (
    <>
      <Head>
        <title>{Array.isArray(project.title) ? project.title.join(' ') : project.title} — Jorn Veltrop</title>
        <meta name="description" content={`${Array.isArray(project.title) ? project.title.join(' ') : project.title} — een project van Jorn Veltrop, video- en mediamaker.`} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Header headerData={header} />
      <main className={projectStyle.project}>
        <HeaderSection
          className={`fullWidth`}
          headerImage={project.headerImage}
          title={project.title}
          client={project.client}
          clientImage={project.clientImage}
          skill={project.skill}
        ></HeaderSection>

        <Sections sections={project.sections} />
      </main>
      <Footer footerData={footer} />
      <ToTop />
    </>
  );
};

export async function getStaticProps(context: { params: { project: string } }) {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });

  const project = context.params.project;
  const projectQuery = getProjectQuery(project);

  const projectData: any = await graphQLClient.request(projectQuery);
  const headerData: any = await graphQLClient.request(headerQuery);
  const footerData: any = await graphQLClient.request(footerQuery);

  const data = {
    project: projectData.project,
    header: headerData.header,
    footer: footerData.footer,
  };

  return {
    props: data,
  };
}

export async function getStaticPaths() {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });
  const projectenData: any = await graphQLClient.request(projectenQuery);
  let projects = projectenData.allProjects;

  const paths = projects.map((project: GridProject) => {
    return {
      params: { project: project.slug },
    };
  });

  return { paths, fallback: false };
}

export default Project;
