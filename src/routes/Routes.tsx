import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <BlogDetails />,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-for-rahul-server/api/v1/project/${params.id}`
          ),
      },
    ],
  },
]);