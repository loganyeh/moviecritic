import express from "express";
import { 
    getMovies, 
    getMovie, 
    createMovie, 
    deleteMovie
} from "../controllers/favoriteMovies.controller.ts";

const router = express.Router();

// GET all Movies
router.get("/", getMovies);

// GET a single Movie
router.get("/:id", getMovie);

// POST a movie
router.post("/", createMovie);

// DELETE a movie
router.delete("/:id", deleteMovie);

export default router;