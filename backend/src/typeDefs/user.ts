import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        user(username: String):User
        users: [User!]
        userCountries(username: String!): [String]
    }
    extend type Mutation {
        signUp(username: String!): User
        signIn(username: String!): User
        signOut(username: String!): Boolean
        addCountry(country: String!, username: String!): String
    }

    type User {
        _id: ID!
        username: String!
        loggedIn: Boolean
        userCountries: [String]
    }
`