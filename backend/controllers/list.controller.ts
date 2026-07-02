import type { Request, Response } from "express";
import Movie from "../models/movieModel.ts";
// import mongoose from "mongoose";

// GET list
export async function getList(req: Request, res: Response){
    const list = await Movie.find().sort({ createdAt: -1 });

    res.status(200).json(list);
};

// GET WATCHING list
export async function getWatchingList(req: Request, res: Response){
    const list = await Movie.find({ watchStatus: "Watching" }).sort({ createdAt: -1 });

    res.status(200).json(list);
};

// GET Completed list
export async function getCompletedList(req: Request, res: Response){
    const list = await Movie.find({ watchStatus: "Completed" }).sort({ createdAt: -1 });

    res.status(200).json(list);
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


