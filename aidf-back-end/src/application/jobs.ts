import { Request, Response } from "express";
import jobs from "../infrastructure/jobs";
import Job from "../infrastructure/schemas/job";

export const getAllJobs = async (req: Request, res: Response) => {
    const jobs = await Job.find();
    return res.status(200).json(jobs);
}

export const createJob = async (req: Request, res: Response) => {
    const job = req.body;
    await Job.create(job);
    return res.status(201).send();
}


export const getJobById = async (req: Request, res: Response) => {
    const job = await Job.findById(req.params._id);
    if (!job) {
        return res.status(404).send();
    }
    return res.status(200).json(job);
}

export const deleteJob = async (req: Request, res: Response) => {
    const job = await Job.findByIdAndDelete(req.params._id);
    if (!job) {
        return res.status(404).send();
    }
    return res.status(204).send();
}

export const updateJobType = async (req: Request, res: Response) => {
    try {
        // Find the job by ID
        const jobToUpdate = await Job.findById(req.params._id);

        // If the job is not found, return 404
        if (!jobToUpdate) {
            return res.status(404).send('Job not found');
        }

        // Update the job type
        const updatedJob = await Job.findByIdAndUpdate(
            req.params._id,
            {
                type: req.body.type // Update the 'type' field
            },
            { new: true } // Return the updated document
        );

        // Respond with the updated job
        return res.status(200).json(updatedJob); // Return updated job as response
    } catch (error) {
        // Handle errors
        console.error(error);
        return res.status(500).send('Error updating job');
    }
}