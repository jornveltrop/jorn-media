import { gql } from "graphql-request"

const headerQuery = gql`
query MyQuery {
  header {
    links {
      ... on HomeRecord {
        id
        slug
        title
      }
      ... on ProjectPageRecord {
        id
        slug
        title
      }
    }
    siteLogo {
      alt
      height
      url
      width
    }
  }
}

`

export default headerQuery