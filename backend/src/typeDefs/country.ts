import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        country(name: String!): Country
        countries: [Country!]!
    }
    type Country {
        id: ID!
        name: String!
        continent: String
        capitol: String
        nationalDish: String
    }
`


