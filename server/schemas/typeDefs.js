const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Project{
    _id:ID!
    title:String
    image:String
    description:String
    repoLink:String
    deployLink:String
  }
  type Query {
    projects:[Project]
    project(id:ID!):Project
  }
  type Mutation {
    addProject(title:String!, image:String,description:String,repoLink:String,deployLink:String):Project
    removeProject(id: ID): Project
  }

`;

module.exports = typeDefs;
