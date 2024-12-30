import express from "express";
import { createJobApplication, getJobApplications, getJobApplicationById } from "../application/jobApplication";

const jobApplicationRouter = express.Router();

jobApplicationRouter.route("/").post(createJobApplication).get(getJobApplications);
jobApplicationRouter.route("/:id")
  .get(getJobApplicationById);



export default jobApplicationRouter;