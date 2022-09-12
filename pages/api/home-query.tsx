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
    section {
        ... on GridSectionRecord {
        title
        items {
            title
        }
        }
        ... on CardsSectionRecord {
        title
        cards {
            cardTitle
            cardDescription(markdown: false)
        }
        }
        ... on TextSectionRecord {
        title
        description
        }
    }
    }
    }
`

export default homeQuery