import { gql } from "graphql-request"

const homeQuery = gql`
    query {
        home {
          siteLogo {
            alt
            url
            width
            height
          }
          backgroundPhoto {
            url
            width
            height
          }
          title
          tagline
          skillsSummary {
            skillText
          }
          description
          clientsPreview {
            client
            title
            clientImage {
              alt
              height
              width
              url
            }
          }
          sections {
            ... on GridSectionRecord {
              _modelApiKey
              title
              items {
                title
                tag {
                  tag
                }
                client
                gridImage {
                focalPoint {
                  x
                  y
                }
                alt
                url
                width
                height
              }
              }
              allProjects {
                _modelApiKey
                linkText
              }
            }
            ... on CardsSectionRecord {
              _modelApiKey
              title
              cards {
                cardTitle
                cardDescription(markdown: false)
              }
            }
            ... on TextSectionRecord {
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