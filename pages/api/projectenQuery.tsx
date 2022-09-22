import { gql } from "graphql-request"

const homeQuery = gql`
query MyQuery {
  projectPage {
    slug
    title
  }
  allProjects {
    title
    slug
    id
    headerImage {
      url
      width
      height
      alt
      focalPoint {
        x
        y
      }
    }
    skill {
      title
      slug
    }
    client
  }
}

`

export default homeQuery