import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },
    backdrop_path: {
        type: String,
    },
    poster_path: {
        type: String,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;