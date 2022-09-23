import { gql } from "graphql-request"

const footerQuery = gql`
query MyQuery {
  footer {
    copyrightTag
  }
}

`

export default footerQuery