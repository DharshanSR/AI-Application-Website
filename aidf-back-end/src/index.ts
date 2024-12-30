import "dotenv/config";
import express from "express";
import jobsRouter from "./api/jobs";
import { connectDB } from "./infrastructure/db";
import jobApplicationRouter from "./api/jobApplication";
import  cors from "cors";

const app = express();
app.use(express.json());
app.use(cors())

connectDB();

app.use("/jobs", jobsRouter);

app.use("/jobApplications",jobApplicationRouter)

const PORT = 8000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));