import { gql } from "graphql-request";

const getProjectQuery = (project: any) => gql`
  query MyQuery {
    project(filter: { slug: { eq: "${project}" } }) {
      slug
      headerImage {
        width
        url
        height
        focalPoint {
          x
          y
        }
        alt
      }
      client
      clientImage {
        alt
        height
        width
        url
        focalPoint {
          x
          y
        }
      }
      title
      skill {
        slug
        title
      }
      sections {
        ... on CardsSectionRecord {
          id
          _modelApiKey
          title
          cards {
            title
            slug
            icon
            description
          }
        }
        ... on GridSectionRecord {
          id
          _modelApiKey
          title
          items {
            id
            slug
            skill {
              title
              slug
            }
            headerImage {
              alt
              focalPoint {
                x
                y
              }
              url
              width
              height
            }
            client
            slug
            title
          }
          links {
            title
            url
            page {
              ... on SkillRecord {
                id
                slug
              }
              ... on ProjectRecord {
                id
                slug
              }
              ... on ProjectPageRecord {
                id
                slug
              }
              ... on HomeRecord {
                id
                slug
              }
            }
          }
        }
        ... on TextSectionRecord {
          id
          _modelApiKey
          title
          subtitle
          description
        }
      }
    }
  }
`;

export default getProjectQuery;
