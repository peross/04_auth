import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import db from "./config/database.js";

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log(`🛢 Uspješna konekcija na bazu: ${process.env.DB_NAME}`);
} catch (error){
    console.log(error);
}

app.use(cors({
    origin: `http://localhost:5173`,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, `/frontend/dist`))); // serve static files from the frontend
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(process.env.PORT || 5000, async () => {
    console.log(`💻 Server started on port ${process.env.PORT || 5000}`);
});