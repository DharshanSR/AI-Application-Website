import { useParams } from "react-router-dom";

function JobPage() {
  const params = useParams();

  return (
    <main className="p-4">
      <h1>Job Page</h1>
      <p>{params.id}</p>
    </main>
  );
}

export default JobPage;
