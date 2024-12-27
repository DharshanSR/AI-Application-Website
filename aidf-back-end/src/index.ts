import express from "express";
import jobsRouter from "./api/jobs";

const app = express();
app.use(express.json());

app.use("/jobs", jobsRouter);

const PORT = 8000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));