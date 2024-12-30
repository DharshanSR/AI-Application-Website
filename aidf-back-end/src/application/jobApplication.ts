import { NextFunction, Request, Response } from "express";
import JobApplication from "../infrastructure/schemas/jobApplication";

export const createJobApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const jobApplication = req.body;
  console.log(jobApplication);

  const createdJobApplication = await JobApplication.create(jobApplication);
  return res.status(201).send();
};


export const getJobApplications = async (
  req: Request,
  res: Response,
) => {

  const { jobid } = req.query;

  if (jobid) {
    const jobApplications = await JobApplication.find({ job: jobid })
    return res.status(200).json(jobApplications);
  }

  const jobApplications = await JobApplication.find().populate("job").exec();
  return res.status(200).json(jobApplications);

};

export const getJobApplicationById = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;
  const jobApplication = await JobApplication.findById(id);
  if (jobApplication === null) {
    return res.status(404).send();
  }
  return res.status(200).json(jobApplication);
}