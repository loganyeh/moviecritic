import type { Request, Response } from "express";
import Movie from "../models/movieModel.ts";
import mongoose from "mongoose";

// GET all movies
export async function getMovies(req: Request, res: Response){
    const movies = await Movie.find({}).sort({ createdAt: -1 });
    
    res.status(200).json(movies);
    // res.status(200).json({message: "message"});
};

// GET a movie
export async function getMovie(req: Request, res:Response){
    const { id } = req.params;

    if (typeof id !== "string") {
        return res.status(400).json({ error: "Invalid id format" });
    }

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ erorr: `Movie does not exist` });
    };

    const movie = await Movie.findById(id);

    if(!movie) {
        return res.status(404).json({ error: `Movie does not exist` });
    };

    res.status(200).json(movie);
};

// CREATE a movie
export async function createMovie(){

}

// DELETE a movie
export async function deleteMovie(){

}