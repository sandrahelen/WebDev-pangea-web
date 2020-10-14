import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        user(id: ID!): User
        users: [User!]!
    }
    extend type Mutation {
        signUp(username: String!, name: String): User
        signIn(username: String): User
        signOut: Boolean
    }

    type User {
        id: ID!
        username: String!
        name: String
        countries: [Country]
    }
`
