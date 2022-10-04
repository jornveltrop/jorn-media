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
    }
  }
`;

export default getProjectQuery;
