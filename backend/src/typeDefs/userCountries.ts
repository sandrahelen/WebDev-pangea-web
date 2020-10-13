import { gql } from "apollo-server-express";

export default gql` 
    extend type Mutation {
        addCountry(countryIds: [ID!]!): Country
    }
    
    
    type UserCountries {
        id: ID!
        name: String!
        visitedAt: String
        users: [User!]!
        countries: [Country!]!
    }
`