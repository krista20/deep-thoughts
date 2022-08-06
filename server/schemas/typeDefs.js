// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    thoughts: # what goes here?
  }
`;

// export the typeDefs
module.exports = typeDefs;