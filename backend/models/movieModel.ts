import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    backdrop_path: { type: String },
    poster_path: { type: String },
    isFavorite: { type: Boolean },
    isWatching: { type: Boolean },
    isCompleted: { type: Boolean },
    isPaused: { type: Boolean },
    isDropped: { type: Boolean },
    isPlanning: { type: Boolean }
}, { timestamps: true });

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;