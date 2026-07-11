import type { Request, Response } from "express";
import Movie from "../models/movieModel.js";
import mongoose from "mongoose";

// GET all movies
export async function getMovies(req: Request, res: Response){
    const movies = await Movie.find({}).sort({ createdAt: -1 });
    
    res.status(200).json(movies);
};

// GET all FAV movies
export async function getFavMovies(req: Request, res: Response){
    const favoriteMovies = await Movie.find({ isFavorite: true }).sort({ createdAt: -1 });

    res.status(200).json(favoriteMovies)
};

// GET all WATCHING movies
export async function getWatchingList(req: Request, res: Response){
    const watchingListMovies = await Movie.find({ watchStatus: "Watching" }).sort({ createdAt: -1 });

    res.status(200).json(watchingListMovies);
};

// GET all COMPLETED movies
export async function getCompletedList(req: Request, res: Response){
    const completedMovies = await Movie.find({ watchStatus: "Completed" }).sort({ createdAt: -1 });

    res.status(200).json(completedMovies);
};

// UPDATE isFavorite movie
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

// DELETE a movie
export async function deleteMovie(req: Request, res:Response){
    const id = Number(req.params.id);

    try {
        const movie = await Movie.findOneAndDelete({ id: Number(id) });

        if(!movie){
            return res.status(404).json({ error: "Movie not found" });
        };

        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    };
};