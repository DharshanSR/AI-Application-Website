import express from "express";

const app = express();
app.use(express.json());

const jobs = [
  {
    _id: "xyz",
    title: "Intern - Software Engineer",
    type: "Full-time",
    location: "Remote",
  },
  {
    _id: "abc",
    title: "Software Engineer",
    type: "Full-time",
    location: "Remote",
  },
];

app.get("/jobs",(req, res) =>{
  res.json(jobs)
})


app.listen(4000, () => console.log("Server is listening on port 4000."));