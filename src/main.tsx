import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "cal-sans";

// Lazy load components
const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SocialsPage = lazy(() => import("./pages/SocialsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "/projects",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsPage />
      </Suspense>
    ),
  },
  {
    path: "/blog",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPage />
      </Suspense>
    ),
  },
  {
    path: "/gallery",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <GalleryPage />
      </Suspense>
    ),
  },
  {
    path: "/socials",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SocialsPage />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
