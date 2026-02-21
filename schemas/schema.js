import { gql } from 'graphql-tag';
export const typeDefs = gql`
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  type Query {
    # a) Get all movies
    movies: [Movie!]!

    # b) Get movie by ID
    movie(id: ID!): Movie

    # c) Get movies by Director name (will use static method in resolver)
    moviesByDirector(director_name: String!): [Movie!]!
  }

  type Mutation {
    # a) Insert new movie
    addMovie(
      name: String!
      director_name: String!
      production_house: String!
      release_date: String!
      rating: Float!
    ): Movie!

    # b) Update movie
    updateMovie(
      id: ID!
      name: String
      director_name: String
      production_house: String
      release_date: String
      rating: Float
    ): Movie

    # c) Delete movie by ID
    deleteMovie(id: ID!): Boolean!
  }
`;