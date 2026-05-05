import { gql } from "graphql-request";

const skillQuery = gql`
  query MyQuery {
    allSkills {
      title
      slug
    }
    allProjects {
      id
      slug
      title
      client
      skill {
        title
        slug
      }
      headerImage {
        alt
        url
        width
        height
        focalPoint {
          x
          y
        }
      }
    }
  }
`;

export default skillQuery;
