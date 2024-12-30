import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home/home.page.jsx";
import JobPage from "./pages/job/job.page";

import RootLayout from "./layouts/root.layout";
import SignInPage from "./pages/sign-in.page";
import SignUpPage from "./pages/sign-up.page";
import MainLayout from "./layouts/main.layout";
import AdminMainLayout from "./layouts/admin.layout";
import AdminJobPostsPage from "./pages/admin/jobPosts/admin-job-posts.page";
import AdminJobCreatePage from "./pages/admin/createJob/job-create.page";
import AdminJobPage from "./pages/admin/job/admin-job.page";
import AdminJobApplicationPage from "./pages/admin/jobApplication/admin-job-application.page";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/job/:id",
            element: <JobPage />,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminMainLayout />,
        children: [
          {
            path: "jobs",
            element: <AdminJobPostsPage />,
          },
          {
            path: "job/create",
            element: <AdminJobCreatePage />,
          },
          {
            path: "job/:id",
            element: <AdminJobPage />,
          },
          {
            path: "job/:id/application/:applicationId",
            element: <AdminJobApplicationPage />,
          },
        ],
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
