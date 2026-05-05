import type { NextPage } from "next";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import Header from "../../components/Header/Header";
import homeStyle from "../../styles/home.module.css";
import skillQuery from "../api/skillQuery";
import headerQuery from "../api/headerQuery";
import footerQuery from "../api/footerQuery";
import Footer from "../../components/Footer/Footer";
import ToTop from "../../components/ToTop/ToTop";
import Grid from "../../components/Grid/Grid";
import type { Skill, GridProject, HeaderData, FooterData } from "../../types";

interface SkillPageProps {
  skill: Skill;
  projects: GridProject[];
  header: HeaderData;
  footer: FooterData;
}

const SkillPage: NextPage<SkillPageProps> = ({ skill, projects, header, footer }) => {
  return (
    <>
      <Head>
        <title>{Array.isArray(skill.title) ? skill.title.join(' ') : skill.title} projecten — Jorn Veltrop</title>
        <meta name="description" content={`Bekijk alle ${Array.isArray(skill.title) ? skill.title.join(' ') : skill.title} projecten van Jorn Veltrop.`} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Header headerData={header} />
      <main className={homeStyle.home}>
        <div className="boxed">
          <h2>{skill.title}</h2>
        </div>
        <div className="fullWidth center">
          <Grid gridItems={projects} />
        </div>
      </main>
      <Footer footerData={footer} />
      <ToTop />
    </>
  );
};

export async function getStaticProps(context: { params: { skill: string } }) {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });

  const slug = context.params.skill;

  const data: any = await graphQLClient.request(skillQuery);
  const headerData: any = await graphQLClient.request(headerQuery);
  const footerData: any = await graphQLClient.request(footerQuery);

  const skill = data.allSkills.find((s: Skill) => s.slug === slug);
  const projects = data.allProjects.filter(
    (p: GridProject) => p.skill.some((s: Skill) => s.slug === slug)
  );

  return {
    props: {
      skill,
      projects,
      header: headerData.header,
      footer: footerData.footer,
    },
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

  const data: any = await graphQLClient.request(skillQuery);
  const allSkills: Skill[] = data.allSkills;

  const paths = allSkills.map((skill: Skill) => ({
    params: { skill: skill.slug },
  }));

  return { paths, fallback: false };
}

export default SkillPage;
