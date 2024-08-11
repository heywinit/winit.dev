import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "cal-sans";

// Lazy load components
// const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SocialsPage = lazy(() => import("./pages/SocialsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const LoadingPage = lazy(() => import("./pages/LoadingPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage/>}>
        <AboutPage />
        {/* <HomePage /> */}
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<LoadingPage/>}>
        <ErrorPage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<LoadingPage/>}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "/projects",
    element: (
      <Suspense fallback={<LoadingPage/>}>
        <ProjectsPage />
      </Suspense>
    ),
  },
  {
    path: "/blog",
    element: (
      <Suspense fallback={<LoadingPage/>}>
        <BlogPage />
      </Suspense>
    ),
  },
  {
    path: "/gallery",
    element: (
      <Suspense fallback={<LoadingPage/>}>
        <GalleryPage />
      </Suspense>
    ),
  },
  {
    path: "/socials",
    element: (
      <Suspense fallback={<LoadingPage/>}>
        <SocialsPage />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
