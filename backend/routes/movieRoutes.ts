import express from "express";
import { 
    getMovies, 
    getFavMovies,
    getWatchingList,
    getCompletedList,
    updateMovie,
    deleteMovie
} from "../controllers/movieControllers.ts";

const router = express.Router();

// GET all Movies
router.get("/", getMovies);

// GET all FAV movies
router.get("/favorites", getFavMovies);

// GET all WATCHING LIST movies
router.get("/watching", getWatchingList);

// GET all COMPLETED LIST movies
router.get("/completed", getCompletedList);

// UPDATE a movie
router.patch("/:id", updateMovie);

// DELETE a movie
router.delete("/:id", deleteMovie);

export default router;