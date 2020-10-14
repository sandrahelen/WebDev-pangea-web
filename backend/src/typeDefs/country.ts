import { gql } from "apollo-server-express";

export default gql`
    type Country {
        id: ID!
        name: String!
        continent: String
        capitol: String
        nationalDish: String
    }
`


