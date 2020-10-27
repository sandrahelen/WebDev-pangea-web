import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        country(country: String): Country
        countries: [Country!]!
    }
    type Country {
        _id: ID!
        country: String!
        continent: String
        city: String
        dish: String
        visitedAt: String
    }
`


