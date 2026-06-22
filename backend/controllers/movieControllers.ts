import type { Request, Response } from "express";
import Movie from "../models/movieModel.ts";
import mongoose from "mongoose";

// GET all movies
export async function getMovies(req: Request, res: Response){
    const movies = await Movie.find({}).sort({ createdAt: -1 });
    
    res.status(200).json(movies);
};

// GET a movie
export async function getMovie(req: Request, res:Response){

};

// UPDATE a movie
export async function updateMovie(req: Request, res: Response){

};