import type { Request, Response } from "express";
import Movie from "../models/movieModel.ts";
// import mongoose from "mongoose";

// GET list
export async function getList(req: Request, res: Response){
    const list = await Movie.find({ status: "Watching" }).sort({ createdAt: -1 });

    res.status(200).json(list);
};

// ADD to list
export async function addToList(req: Request, res: Response){
    const { id, title, backdrop_path, poster_path, status } = req.body;

    const existingMovie = await Movie.findOne({id});

    if(existingMovie) {
        return res.status(409).json({
            message: 'Movie is already in your favorites',
        });
    };

    try {
        const movie = await Movie.create({ id, title, backdrop_path, poster_path, status });
        res.status(200).json(movie);
    } catch (error) {
        const err = error as Error;
        res.status(404).json({ error: err.message });
    };
};

// DELETE from list
export async function deleteFromList(req: Request, res: Response){

};


