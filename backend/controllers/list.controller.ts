import type { Request, Response } from "express";
import Movie from "../models/movieModel.ts";
// import mongoose from "mongoose";

// GET list
export async function getList(req: Request, res: Response){
    const list = await Movie.find({ isWatching: true }).sort({ createdAt: -1 });

    res.status(200).json(list);
};

// ADD to list
export async function addToList(req: Request, res: Response){
    const { id, title, backdrop_path, poster_path, isWatching } = req.body;
    // const { id, title, backdrop_path, poster_path, isFavorite, isWatching } = req.body;

    const existingMovie = await Movie.findOne({
        id, status: "Watching"
    });

    if(existingMovie) {
        return res.status(409).json({
            message: 'Movie is already in your watching list',
        });
    };

    try {
        const movie = await Movie.create({ id, title, backdrop_path, poster_path, isWatching });
        res.status(201).json(movie);
    } catch (error) {
        const err = error as Error;
        res.status(404).json({ error: err.message });
    };
};

// DELETE from list
export async function deleteFromList(req: Request, res: Response){
    const id = Number(req.params.id);

    const deletedMovie = await Movie.findOneAndDelete({ id });

    if(!deletedMovie) {
        return res.status(404).json({ error: "Movie does not exist" });
    };

    res.status(200).json(deletedMovie);
};

// UPDATE movie
export async function updateList(req: Request, res: Response){
    const id = Number(req.params.id);

    if( isNaN(id) ){
        return res.status(400).json({ error: "Invalid movie id" });
    };


    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            { id }, 
            { $set: req.body },
            { new: true, upsert: true }
        );

        


        res.status(200).json(updatedMovie)
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    };
};


