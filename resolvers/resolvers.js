import MovieModel from "../models/movie.js";

const movieResolvers = {
  Query: {
    movies: async () => await MovieModel.find(),
    movie: async (_, { id }) => await MovieModel.findById(id),
    moviesByDirector: async (_, { director_name }) =>
      await MovieModel.findByDirector(director_name),
  },

  Mutation: {
    addMovie: async (_, args) => {
      const newMovie = new MovieModel(args);
      return await newMovie.save();
    },

    updateMovie: async (_, { id, ...updates }) =>
      await MovieModel.findByIdAndUpdate(id, updates, { new: true }),

    deleteMovie: async (_, { id }) => {
      const result = await MovieModel.findByIdAndDelete(id);
      return result ? true : false;
    },
  },
};

export default movieResolvers;