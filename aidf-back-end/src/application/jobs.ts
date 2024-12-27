import { Request, Response } from "express";
import jobs from "../infrastructure/jobs";

// Get all jobs
export const getAllJobs = (req: Request, res: Response): void => {
    res.json(jobs);
};

// Create a new job
export const createJob = (req: Request, res: Response): void => {
    const { _id, title, type, location } = req.body;

    // Validate input
    if (!(_id && title && type && location && typeof _id === "string" &&
        typeof title === "string" && typeof type === "string" && typeof location === "string")) {
        res.status(400).json({ error: "Invalid input. All fields are required and must be strings." });
        return; // Ensure function execution ends here
    }

    jobs.push({ _id, title, type, location });
    res.status(201).json({ message: "Job created successfully." });
};

// Get a job by ID
export const getJobById = (req: Request, res: Response): void => {
    const job = jobs.find(el => el._id === req.params._id);

    if (!job) {
        res.status(404).json({ error: "Job not found." });
        return; // Ensure function execution ends here
    }

    res.json(job);
};

// Delete a job
export const deleteJob = (req: Request, res: Response): void => {
    const indexToRemove = jobs.findIndex(el => el._id === req.params._id);

    if (indexToRemove === -1) {
        res.status(404).json({ error: "Job not found." });
        return; // Ensure function execution ends here
    }

    jobs.splice(indexToRemove, 1);
    res.status(204).send();
};

// Update a job
export const updateJob = (req: Request, res: Response): void => {
    const indexToUpdate = jobs.findIndex(el => el._id === req.params._id);

    if (indexToUpdate === -1) {
        res.status(404).json({ error: "Job not found." });
        return; // Ensure function execution ends here
    }

    const { title, type, location } = req.body;

    // Validate input
    if (!(title && type && location && typeof title === "string" && typeof type === "string" && typeof location === "string")) {
        res.status(400).json({ error: "Invalid input. All fields are required and must be strings." });
        return; // Ensure function execution ends here
    }

    jobs[indexToUpdate] = { ...jobs[indexToUpdate], title, type, location };
    res.status(204).send();
};
