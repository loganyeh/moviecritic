import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    id: { 
        type: Number
     },
    title: { 
        type: String
     },
    backdrop_path: { 
        type: String
     },
    poster_path: { 
        type: String
     },
    isFavorite: { 
        type: Boolean,
        default: false,
     },
    isWatching: { 
        type: Boolean,
        default: false,
     },
    isCompleted: { 
        type: Boolean,
        // default: false,
     },
    isPaused: { 
        type: Boolean,
        // default: false,
     },
    isDropped: { 
        type: Boolean,
        // default: false,
     },
    isPlanning: { 
        type: Boolean,
        // default: false, 
    }
}, { timestamps: true });

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;