import express from "express";
import {
    createJob,
    deleteJob,
    getAllJobs,
    getJobById,
    updateJob
} from "../application/jobs"; // Update the path according to your file structure

const jobsRouter = express.Router();

// Routes for the jobs resource
jobsRouter.route("/").get(getAllJobs).post(createJob);
jobsRouter.route("/:_id")
    .get(getJobById)
    .put(updateJob)
    .delete(deleteJob);

export default jobsRouter;
