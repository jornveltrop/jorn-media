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
        description
        sections {
          clients {
            slug
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