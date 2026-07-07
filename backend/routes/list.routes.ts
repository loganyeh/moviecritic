import express from "express";
import { getList, getWatchingList, getCompletedList, updateList } from "../controllers/list.controller.ts";

const listRouter = express.Router();

// GET List
listRouter.get("/", getList);

// GET WATCHING LIST
listRouter.get("/watching", getWatchingList);

// GET COMPLETED LIST
listRouter.get("/completed", getCompletedList);

// UPDATE movie
listRouter.patch("/:id", updateList);

export default listRouter;