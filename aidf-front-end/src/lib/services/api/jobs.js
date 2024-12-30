export const getJobs = async () => {
    const res = await fetch(
      "http://localhost:8000/jobs",
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data;
  };
  
  export const getJobById = async (id) => {
    const res = await fetch(
      `http://localhost:8000/jobs/${id}`,
      {
        method: "GET",      
      }
    );
    const data = await res.json();
    return data;
  };
  
  export const createJob = async ({
    title,
    description,
    type,
    location,
    questions,
  }) => {
    await fetch("http://localhost:8000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        type,
        location,
        questions,
      }),
    });
  };
  