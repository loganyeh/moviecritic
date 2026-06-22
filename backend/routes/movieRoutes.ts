import express from "express";
import { 
    getMovies, 
    getMovie, 
    updateMovie
} from "../controllers/movieControllers.ts";

const router = express.Router();

// GET all Movies
router.get("/", getMovies);

// GET a single Movie
router.get("/:id", getMovie);

// UPDATE a movie
router.patch("/:id", updateMovie);

export default router;