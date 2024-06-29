import ReactDOM from "react-dom/client";
import App from "./pages/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "cal-sans";
import ProjectsPage from "./pages/ProjectsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
