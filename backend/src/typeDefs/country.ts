import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        country(country: String, skip: Int, take: Int): Country
        countries(filter: String): [Country!]!
        getVisitors(country:String): [String]
        getVisitedCountries(username: String): [Country]
    }
    
    extend type Mutation {
        addVisitor(username: String, country: String): Country
    }
   
    type Country {
        _id: ID!
        country: String!
        continent: String
        city: String
        dish: String
        visitedAt: String
        users: [String]
    }
    
`


