import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        user(username: String):User
        users: [User!]
    }
    extend type Mutation {
        signUp(username: String!): User
        signIn(username: String!): User
        signOut(username: String!): Boolean
        addCountry(country: String!, username: String!): Country
    }

    type User {
        _id: ID!
        username: String!
        loggedIn: Boolean
        countries: [Country]
    }
`