import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoutes.js"

dotenv.config();

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://moviecritic-seven.vercel.app"
    ]
}));
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

app.use('/movies', movieRoutes);

mongoose.connect(process.env.MONGO_URI!)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => console.error(err));