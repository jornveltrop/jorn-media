import { gql } from "graphql-request"

const homeQuery = gql`
query MyQuery {
  home {
    slug
    title
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
          skill {
            title
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
      }
      ... on HeroSectionRecord {
        id
        _modelApiKey
        backgroundImages {
          alt
          url
          focalPoint {
            x
            y
          }
          height
          width
        }
        title
        tagline
        skillsSummary {
          title
          slug
        }
        sections {
          clients {
            clientImage {
              alt
              height
              url
              width
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
`

export default homeQuery