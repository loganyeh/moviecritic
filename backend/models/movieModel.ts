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
    watchStatus: { 
        type: String,
        default: 'Add to List',
     },
}, { timestamps: true });

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;