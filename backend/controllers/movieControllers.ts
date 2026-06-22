import type { Request, Response } from "express";
import Movie from "../models/movieModel.ts";
import mongoose from "mongoose";

// GET all movies
export async function getMovies(req: Request, res: Response){
    const movies = await Movie.find({}).sort({ createdAt: -1 });
    
    res.status(200).json(movies);
};

// UPDATE a movie
export async function updateMovie(req: Request, res: Response){
    const id = Number(req.params.id);

    if (isNaN(id)) { 
        return res.status(400).json({ message: "movie id not valid" });
    };

    try {
        const currentMovie = await Movie.findOneAndUpdate(
            { id }, 
            { $set: req.body },
            {
                new: true,
                upsert: true
            }
        );

        return res.status(200).json({ 
            data: currentMovie,
            message: "Movie has been updated"
        });
    } catch (error) {
        const err = error as Error;

        return res.status(500).json({
            error: err.message,
        });
    };
};

// GET a movie
export async function getMovie(req: Request, res:Response){

};