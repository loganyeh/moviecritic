import express from "express";
import { getList, addToList, deleteFromList } from "../controllers/list.controller.ts";

const listRouter = express.Router();

// GET List
listRouter.get("/", getList);

// POST to list
listRouter.post("/", addToList);

// DELETE from list
listRouter.delete("/:id", deleteFromList);

export default listRouter;